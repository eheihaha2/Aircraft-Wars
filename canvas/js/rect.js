/*
@这是一个矩形类，是一个子弹类，敌机类，奖励类的父类
*/ 
class Rect{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.isDel=false;//是否被删除
        this.speed=0;//公有属性，继承后被子集重写
        this.showIndex=-1;
    }
    move(){
        this.y+=this.speed;
        if((this.speed>0&&this.y>sh+this.h)||(this.speed<0&&this.y<-this.h)){
            this.isDel=true;
        }
    }
    draw() {
        this.move();
        ctx.beginPath();
        // console.log(this.showIndex);
        if(this.showIndex!=-1){
            //敌机&奖励
            if(this.hp>=0){
                // 敌机
                this.bol();
            }
            // console.log(this.img.src);
            if(this.img.src.includes("enemy1")){
                this.img.src= `../img/enemy1_down${this.showIndex}.png`;
            }else if(this.img.src.includes("enemy2")){
                this.img.src= `../img/enemy2_down${this.showIndex}.png`;
            }else if(this.img.src.includes("enemy3")){
                this.img.src= `../img/enemy3_down${this.showIndex}.png`
            }else if(this.img.src.includes("supply")){
                this.img.src=`../img/supply${this.showIndex}.png`;
            }
            ctx.drawImage(this.img,this.x,this.y,this.w,this.h);
        }else{
            // 子弹
            ctx.drawImage(this.img,this.x,this.y,this.w,this.h);
        }
    }
}