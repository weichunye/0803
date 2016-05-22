
!function(){
    var overHidden = utils.getElementsByClass("overhidden");
    for (var i = 0; i < overHidden.length; i++) {
        tabDisplay(overHidden[i]);
    }
    function tabDisplay(overhidden){
        var overBox = utils.firstChild(overhidden);//->点击的元素div
        var overA=utils.firstChild(overBox)//a元素
        var overCon = utils.next(overA);//->隐藏的div
        overBox.onmousemove=function(){
            utils.removeClass(overA,"a")
            utils.addClass(overA,"sub_nav_list_a")
            overCon.style.display="block";
        }
        overBox.onmouseout=function(){
            overCon.style.display="none";
            utils.removeClass(overA,"sub_nav_list_a")
            utils.addClass(overA,"a")
        }
    }
}()



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