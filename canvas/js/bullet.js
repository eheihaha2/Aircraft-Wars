/*
子弹类
*/ 
class Bullet extends Rect{
    constructor(x,y){
        super(x,y);
        this.w=6;
        this.h=14;
        this.hurt=100;//伤害值
        this.speed=-10;
        this.img=bulletImg;
    }
}


let gap=7;//创建子弹的间隔参数
let gapNum=0;//计量子弹间隔参数
let bullets=[];//存放创建的子弹
let isDouble=false;//是否创建双排子弹
let isCrowed=false;//是否创建密集子弹

let bulletImg=new Image();
bulletImg.src="../img/bullet1.png"

//在timer调用的方法
function createBullet(){
    gap=isCrowed?3:7;
    gapNum++;
    if(gapNum%gap===0){
        gapNum=0;
        if(isDouble){
            // 双排子弹
            let b1=new Bullet(hero.x+hero.w/2-25,hero.y+22);
            bullets.push(b1);
            let b2=new Bullet(hero.x+hero.w/2+19,hero.y+22);
            bullets.push(b2);
        }else{
            // 单排子弹
            let b=new Bullet(hero.x+hero.w/2-3,hero.y);
            bullets.push(b);
        }
    }
} 