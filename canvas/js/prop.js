/*
奖励
*/ 


// showIndex:0[炸弹]  1[双排]   2[密集]
class Prop extends Rect{
    constructor(x,y,showIndex){
        super(x,y);
        this.w=39;
        this.h=68;
        this.showIndex=showIndex;
        this.speed=rand(3,10);
        this.img=propImg;
    }
}


/*------------------------------------------------------ */ 
let props=[];//存储出现的奖励
let propImg=new Image();
propImg.src="../img/supply0.png";
function createProp(){
    let n=rand(0,100);
    let arr=[rand(0,sw-39),-68];
    // console.log(n);
    if(n===10){
        // 炸弹
        arr.push(0);
        // propImg.src="../img/supply0.png";
    }else if(n===20){
        // 双排子弹
        arr.push(1);
        // propImg.src="../img/supply1.png";
    }else if(n===30){
        // 密集子弹
        arr.push(2);
        // propImg.src="../img/supply2.png";
    }
    if(n===10||n===20||n===30){
        let p=new Prop(...arr);
        props.push(p);
    }
}