/* 
* @判断是否是移动端
* @如果函数返回tru,那么是移动罐
* @函数返回false,是pc端
*/ 
let mobileSystem=["iOS","Android","Symbian","iPhone","iPad","iPod"];
function isMobile(){
    // console.log(navigator.userAgent);
    for(let i=0;i<mobileSystem.length;i++){
        // console.log(i);
        if(navigator.userAgent.includes(mobileSystem[i])){
            // console.log("我是移动端");
            return true;
        }
        // console.log("我是pc端");   
    }
    return false;
}