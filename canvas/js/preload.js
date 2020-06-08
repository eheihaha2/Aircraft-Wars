/*
    @预加载
*/ 
let srcs=["again.png","background.png","bomb.png","supply0.png",
"supply1.png","supply2.png","bullet1.png","enemy1_down0.png","enemy1_down1.png",
"enemy1_down2.png","enemy1_down3.png","enemy1_down4.png","enemy2_down0.png",
"enemy2_down1.png","enemy2_down2.png","enemy2_down3.png","enemy2_down4.png",
"enemy2_down5.png","enemy3_down0.png","enemy3_down1.png","enemy3_down2.png",
"enemy3_down3.png","enemy3_down4.png","enemy3_down5.png","enemy3_down6.png",
"enemy3_down7.png","enemy3_down8.png","enemy3_down9.png","gameover.png",
"life.png","me_destroy_1.png","me_destroy_2.png","me_destroy_3.png","me_destroy_4.png",
"me_destroy_0.png","pause_nor.png","pause_pressed.png","resume_nor.png","resume_pressed.png"];
// 用来记录加载好图片的个数
let loadedNum=0;
// 预加载
function loading(callback){
    for(let i=0;i<srcs.length;i++){
        let img=new Image();

        img.onload=()=>{
            loadedNum++;
            if(loadedNum===srcs.length){
                // 全部加载完毕
                callback();
            }
        }
        img.src="../img/"+srcs[i];
    }
}