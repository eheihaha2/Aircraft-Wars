/*
敌机类
*/ 

let e1Img=new Image();
e1Img.src="../img/enemy1_down0.png";
let e2Img=new Image();
e2Img.src="../img/enemy2_down0.png";
let e3Img=new Image();
e3Img.src="../img/enemy3_down0.png";


let eNum=200;//控制游戏难度
// 创建随机数，范围是[0,eNum]
// if num<=10 创建敌机
// num>9 创建大敌机
// num>6 创建中敌机
// 否则创建小敌机
let enemys=[];//用来保存敌机

class Enemy extends Rect{
    constructor(x,y,w,h,hp,speed,showMax,score,img){
        super(x,y);
        this.w=w;
        this.h=h;
        this.hp=hp;//血量
        this.speed=speed;
        this.showMax=showMax;
        this.showIndex=0;
        this.score=score;
        this.img=img;
    }
    bol(){
        if(this.hp<=0){
            this.showIndex++;
            if(this.showIndex>=this.showMax){
                this.showIndex=this.showMax;
                this.isDel=true;
            }
        }
    }
}
// 创建敌机
function createEnemy(){
    let n=rand(0,eNum);
    let arr=[];
    if(n<=10){
        if(n>9){
            arr=[rand(0,sw-110),-164,110,164,600,rand(3,6),9,6,e3Img];
        }else if(n>6){
            arr=[rand(0,sw-46),-64,46,64,300,rand(3,8),5,3,e2Img];
        }else{
            arr=[rand(0,sw-38),-34,38,34,100,rand(3,10),4,1,e1Img];
        }
        let e=new Enemy(...arr);
        // console.log(e.img);
        enemys.push(e);
    }
}

