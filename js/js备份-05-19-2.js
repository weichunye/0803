
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
//->把选项卡切换的操作封装成插件
    function tabChange(tabBox) {
        var tabBoxUL = utils.firstChild(tabBox);//->第一个UL
        var oLis = utils.children(tabBoxUL, "li");//->第一个UL所有子元素LI
        var divList = utils.children(tabBox, "div");//->容器子元素中的DIV

        for (var i = 0; i < oLis.length; i++) {
            var curLi = oLis[i];
            curLi.index = i;
            curLi.onclick = function () {
                console.log("ok")
                //->让当前点击的这个LI有选中的样式,而其兄弟元素都移除选中样式
                utils.addClass(this, "bg");
                var curLiSibling = utils.siblings(this);
                for (var k = 0; k < curLiSibling.length; k++) {
                    utils.removeClass(curLiSibling[k], "bg");

                }
                //->让和当前点击LI索引对应的那个DIV有选中的样式,其余的DIV移除选中样式
                for (k = 0; k < divList.length; k++) {
                    k === this.index ? utils.addClass(divList[k], "bg") : utils.removeClass(divList[k], "bg");
                }
            }

        }
    }
}();

//左侧菜单显示隐藏
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