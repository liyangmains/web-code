/**
 * 封装工具对象
 *DOM2事件绑定工具类
 */
var tools = {
    'addEvent': function(ele,type,methodName) {
        if(ele.addEventListener){
            ele.addEventListener(type,methodName);
            console.log("谷歌");
        }else if(ele.attachEvent){
            ele.attachEvent("on"+type,methodName);
            console.log("IE");
        }else{
            ele['on'+type]=null;
        }
    },
    'removeEvent': function removeEvent(ele,type,methodName){
        if(ele.removeEventListener){
            ele.removeEventListener(type,methodName);
        }else if(ele.detachEvent){
            ele.detachEvent('on'+type,methodName);
        }else{
            ele['on'+type] = '';
        }
    }
};