var utilis = {
    win:function win(attr,value){
        if(typeof value==="undefined"){
            return document.documentElement[attr]||document.body[attr];
        }
        document.documentElement[attr]=value;
        document.body[attr]=value;
    },
    offset:function offset(curEle){
        var t=curEle.offsetTop,l=curEle.offsetLeft,p=curEle.offsetParent;
        while(p){
            if(navigator.userAgent.indexOf("MSIE 8.0")===-1){
                t+= p.clientTop;
                l+= p.clientHeight;
            }
            t+= p.offsetTop;
            l+= p.offsetLeft;
            p= p.offsetParent;
        }
        return {top:t,left:l}
    }
};