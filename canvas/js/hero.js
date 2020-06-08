/*
英雄hero
英雄操作
全局就一个英雄
*/ 
let heroImg=new Image();
let hero ={
    x: sw/2-33,
    y: sh-82,
    w:66,
    h:82,
    showIndex:0,//这个属性用来控制小飞机的图像显示
    showMaxIndex:4,//用来记录最大的下标值
    isBol:false,//是否爆炸
    isOver:false,//控制游戏是否结束
    draw:function(){
        // console.log(this.x);
        ctx.beginPath();
        if(this.isBol){
            // 小飞机爆炸
            this.showIndex++;
            if(this.showIndex>this.showMaxIndex){
                this.showIndex=this.showMaxIndex;
                this.isOver=true;
            }
        }
        // console.log(this);
        // console.log(hero.showIndex);
        heroImg.src=`../img/me_destroy_${this.showIndex}.png`;
        // console.log(heroImg.src)
        ctx.drawImage(heroImg,this.x,this.y,this.w,this.h);
    }
}