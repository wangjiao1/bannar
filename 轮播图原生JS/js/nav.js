(function () {
    var list = document.getElementById("list"), listDet = utils.children(list, "li");
    var listDetail = utils.getElementsByClass("listDetail",list);
    for (var i = 0; i < listDet.length; i++) {
        var cur = listDet[i];
        cur.index = i;
        cur.onmouseenter = function () {
            this.style.backgroundColor = "orange";
            listDetail[this.index].style.display = "block";
        };
        cur.onmouseleave = function () {
            this.style.backgroundColor = null;
            listDetail[this.index].style.display = "none";
        }
    }


})();
