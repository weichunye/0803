
~function(){
    var topNav=utils.getElementsByClass("overdis-none")
    var topnavCon=utils.getElementsByClass("overdcon-hidden");
    for(var i=0; i<topNav.length; i++){
        var cur=topNav[i];
        var navA=utils.firstChild(cur)
        cur.index=i;
        cur.onmousemove=function(){
            utils.removeClass(navA,"a")
            utils.addClass(navA,"sub_nav_list_a")
            for(var k=0; k<topnavCon.length; k++){
                var curCon=topnavCon[k];
                if(this.index===k){
                    curCon.style.display="block";
                }
            }

        }
        cur.onmouseout=function(){
            utils.addClass(navA,"a")
            utils.removeClass(navA,"sub_nav_list_a")
            for(var k=0; k<topnavCon.length; k++){
                var curCon=topnavCon[k];
                if(this.index===k){
                    curCon.style.display="none";
                }
            }
        }
    }


}();
~function(){
    var allTabBox = utils.getElementsByClass("tabBox");
    for (var i = 0; i < allTabBox.length; i++) {
        tabChange(allTabBox[i]);
    }
//->��ѡ��л��Ĳ�����װ�ɲ��
    function tabChange(tabBox) {
        var tabBoxUL = utils.firstChild(tabBox);//->��һ��UL
        var oLis = utils.children(tabBoxUL, "li");//->��һ��UL������Ԫ��LI
        var divList = utils.children(tabBox, "div");//->������Ԫ���е�DIV

        for (var i = 0; i < oLis.length; i++) {
            var curLi = oLis[i];
            curLi.index = i;
            curLi.onclick = function () {
                console.log("ok")
                //->�õ�ǰ��������LI��ѡ�е���ʽ,�����ֵ�Ԫ�ض��Ƴ�ѡ����ʽ
                utils.addClass(this, "bg");
                var curLiSibling = utils.siblings(this);
                for (var k = 0; k < curLiSibling.length; k++) {
                    utils.removeClass(curLiSibling[k], "bg");

                }
                //->�ú͵�ǰ���LI������Ӧ���Ǹ�DIV��ѡ�е���ʽ,�����DIV�Ƴ�ѡ����ʽ
                for (k = 0; k < divList.length; k++) {
                    k === this.index ? utils.addClass(divList[k], "bg") : utils.removeClass(divList[k], "bg");
                }
            }

        }
    }
}();

//���˵���ʾ����
~function(){
    var leftOver=utils.getElementsByClass("sort_list_box_line")
    var leftBox=utils.getElementsByClass("shop_list");

    for(var i=0; i<leftOver.length; i++){
        var cur=leftOver[i];
        cur._index=i

        cur.onmouseover=function(){
            utils.addClass(leftOver[this._index],"sort_listbg");

            for(var k=0; k<leftBox.length; k++){

                var curBox=leftBox[k]


                if(this._index==k){
                    curBox.style.display="block"
                    utils.css(curBox,"top",-this._index*37)
                }

            }
        }
        cur.onmouseout=function(){
            utils.removeClass(leftOver[this._index],"sort_listbg");
            for(var k=0; k<leftBox.length; k++){
                var curBox=leftBox[k]
                if(this._index==k){
                    curBox.style.display="none"
                }

            }
        }


    }

}();