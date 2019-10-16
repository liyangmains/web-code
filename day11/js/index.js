/**
 * Created by Administrator on 2018/3/29 0029.
 */
var click=document.getElementById("click");
var imgBox=document.getElementById("imgBox");
var li=click.getElementsByTagName("li");
function change(i){
   if(i==0){
        imgBox.src="images/banner1.png"
   }else if(i==1){
       imgBox.src="images/banner2.jpg"
   }else if(i==2){
       imgBox.src="images/banner3.jpg"
   }else if(i==3){
       imgBox.src="images/banner4.jpg"
   }else if(i==4){
       imgBox.src="images/banner5.jpg"
   }
}

/**
 * 页面预定活动倒计时时间
 * @type {Date}
 */
var sysTime = new Date();
var endTimeStr = document.querySelector('#endTimeStr').innerHTML;
var timeOut = document.querySelectorAll('.timeOut');
endTimeStr = endTimeStr.replace('(','').replace(')','');
endTimeStr = endTimeStr.split(':')[1]+' 00:00:00';
var endTime = new Date(endTimeStr);
// 获取结束时间到现在的秒数
var totals = Math.floor((endTime-sysTime)/1000);
console.log(totals);
    var t = setInterval(function () {
        if(totals <= 0){
            timeOut.innerHTML='(已结束)';
            clearInterval(t);
        }
        var date = Math.floor(totals/3600/24);
        var hour = Math.floor(totals/3600-date*24);
        var min = Math.floor(totals/60-date*24*60-hour*60);
        var mis = Math.floor(totals-date*24*3600-hour*3600-min*60);
        var timeOutLength = timeOut.length;
        for(var t=0 ; t<timeOutLength ; t++){
            timeOut[t].innerHTML='(剩余:'+(date>=10 ? date+'' : '0'+date)+'天'
                                    +(hour>=10 ? hour+'' : '0'+hour)+'小时'
                                    +(min>=10 ? min+'' : '0'+min)+'分钟'
                                    +(mis>=10 ? mis+'' : '0'+mis)+'秒)';
        }
        totals --;
    },1000);
