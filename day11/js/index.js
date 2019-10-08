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