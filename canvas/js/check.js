/*
1、碰撞检测
2、敌机 子弹 奖励的运动
*/ 

// 碰撞检测
function isCrash(a,b){
    let al=a.x;
    let ar=al+a.w;
    let at=a.y;
    let ab=at+a.h;

    let bl=b.x;
    let br=bl+b.w;
    let bt=b.y;
    let bb=bt+b.h;
    if(al>br||bl>ar||at>bb||bt>ab){
        // 不碰撞
        return false;
    }
    return true;
}
// 1、英雄与敌机
// 2、英雄与奖励
// 3、子弹与敌机
let allScore=0;
let killCount=0;
function gameover(){
    if(hero.isOver){
        // 游戏结束
        clearInterval(timer);
        alert(`总分为:${allScore}
杀敌数为:${killCount}
        `);
    }
}

function drawBullets(){
    for(let i=0;i<bullets.length;i++){
        if(bullets[i].isDel){
            bullets.splice(i,1);
            i--;
            continue;
        }
        bullets[i].draw();
    }
}

function drawEnemys(){
    // 遍历敌机数组
    for(let i=0;i<enemys.length;i++){
        let e=enemys[i];
        // 检测与英雄的碰撞
        if(!hero.isBol && e.hp>0 && isCrash(e,hero)){
            hero.isBol=true;
        }

        // 检测与子弹的碰撞
        // 遍历子弹数组
        for(let j=0;j<bullets.length;j++){
            let b=bullets[j];
            if(e.hp>0&&isCrash(e,b)){
                // 子弹与敌机相撞
                e.hp-=b.hurt;
                b.isDel=true;
                break;
            }
        }
        if(e.isDel){
            allScore+=e.score;
            killCount++;
            enemys.splice(i,1);
            i--;
            continue;
        }
        e.draw();
    }
}


// 炸弹
let bombNum=0;//记录炸弹的数量，最多3个
function getBomb(){
    bombNum++;
    bombNum=bombNum>3?3:bombNum;
}
// 双排子弹
let doubleTimer=null;
let dt=0;//用来计量双排子弹的时间，最多8秒
function getDoubleBullet(){
    isDouble=true;
    dt=8;
    if(!doubleTimer){
        doubleTimer=setInterval(()=>{
            dt--;
            if(dt===0){
                clearInterval(doubleTimer);
                doubleTimer=null;
                isDouble=false;
            }
        },1000);
    }
}
// 密集子弹
let crowTimer=null;
let ct=0;//用来计量密集子弹的时间，最多8秒
function getCrowedBullet(){
    isCrowed=true;
    ct=8;
    if(!crowTimer){
        crowTimer=setInterval(()=>{
            ct--;
            if(ct===0){
                clearInterval(crowTimer);
                crowTimer=null;
                isCrowed=false;
            }
        },1000);
    }
}
function drawProps(){
    for(let i=0;i<props.length;i++){  
        let p=props[i];
        // console.log(p.showIndex);
        if(!hero.isBol&&isCrash(hero,p)){
            p.isDel=true;
            // console.log(p.showIndex);
            if(p.showIndex===0){
                // 炸弹
                getBomb();
            }else if(p.showIndex===1){
                // 双排子弹
                getDoubleBullet();
            }else if(p.showIndex===2){
                // 密集子弹
                getCrowedBullet();
            }
        }
        if(p.isDel){
            props.splice(i,1);
            i--;
            continue;
        }
        p.draw();
    }
}

function allMove(){
    // 1、验证游戏是否结束
    gameover();
    // 2、遍历子弹，绘制子弹
    drawBullets();
    // 3、遍历敌机，绘制敌机（碰撞检测）
    drawEnemys();
    // 4、遍历奖励，绘制奖励（碰撞检测）
    drawProps();
    // 5、绘制炸弹
    drawBomb();
}


let bombImg=new Image();
bombImg.src="../img/bomb.png";
function drawBomb(){
    console.log("111111");
    for(let i=0;i<bombNum;i++){
        ctx.beginPath();
        ctx.drawImage(bombImg,i*42,sh-36,42,36);
    }
}

// 炸弹触发
function bomb(){
    if(bombNum!=0){
        bombNum--;
        for(let i=0;i<enemys.length;i++){
            enemys[i].hp=0;
        }
    }
}
