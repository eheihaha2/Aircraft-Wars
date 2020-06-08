/*
操作：pc下键盘操作，移动端下触屏事件
*/

/*
炸弹:pc空格,移动端两个手指
*/ 
// 检测键盘状态 ->键盘操作
let isLeft=false;
let isRight=false;
let isTop=false;
let isBottom=false;

// 检测触摸 ->移动端
// 记录触摸的信息
let tx=0;
let ty=0;
let heroX=0;
let heroY=0;

function move(em){
    em.preventDefault();
    let touch2=em.touches[0];
    let x=touch2.clientX;
    let y=touch2.clientY;
    hero.x=heroX+x-tx;
    hero.y=heroY+y-ty;
}


if(isMobile()){
    // 移动端，添加tap事件
    window.addEventListener("touchstart",(e)=>{
        // console.log("11111");
        e.preventDefault();
        let ts=e.touches;
        if(ts.length===1){
            // console.log("22222");
            // 一根手指，小飞机移动
            let touch=ts[0];
            tx=touch.clientX;
            ty=touch.clientY;
            heroX=hero.x;
            heroY=hero.y;
            if(tx>hero.x&&tx<hero.x+hero.w&&ty>hero.y&&ty<hero.y+hero.h){
                // 判断点在小飞机上
                // console.log("33333");
                window.addEventListener("touchmove",move)
            }
        }else if(ts.length===2){
            // 炸弹爆炸
            bomb();
        }
    })
    window.addEventListener("touchend",()=>{
        window.removeEventListener("touchmove",move);
    })
}else{
    //pc端:键盘事件
    window.onkeydown=(e)=>{
        switch(e.keyCode){
            case 37:
                isLeft=true;
                break;
             case 38:
                isTop=true;
                break;
            case 39:
                isRight=true;
                break;
            case 40:
                isBottom=true;
                break;
            default:
                break; 
        }
    }
    window.onkeyup=(e)=>{
        switch(e.keyCode){
            case 37:
                isLeft=false;
                break;
             case 38:
                isTop=false;
                break;
            case 39:
                isRight=false;
                break;
            case 40:
                isBottom=false;
                break;
            case 32:
                // 空格炸弹
                bomb();
                break;
            default:
                break; 
        }
    }
}

// 键盘操作英雄移动，调用方法
function control(){
    if(isLeft){
        hero.x-=7;
        hero.x=hero.x<-hero.w/2?-hero.w/2:hero.x;
    }
    if(isRight){
        hero.x+=7;
        hero.x=hero.x>sw-hero.w/2?sw-hero.w/2:hero.x;
    }
    if(isTop){
        hero.y-=7;
        hero.y=hero.y<0?0:hero.y;
    }
    if(isBottom){
        hero.y+=7;
        hero.y=hero.y>sh-hero.h?sh-hero.h:hero.y;
    }
}
