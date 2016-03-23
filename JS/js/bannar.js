(function () {
    var autoTimer = null, step = 0;
    var outer = document.getElementById("outer");
    var inner = document.getElementById("inner"), imgList = inner.getElementsByTagName("img");
    var tip = document.getElementById("tip"), tipList = tip.getElementsByTagName("li");
    var btnLeft = document.getElementById("btnLeft"), btnRight = document.getElementById("btnRight");

    selectTip();
    function selectTip() {
        var tempStep = step;
        tempStep >=5 ? tempStep = 0 : null;
        for (var i = 0; i < tipList.length; i++) {
            tipList[i].className = i === tempStep ? "bgColor" : null;
        }
    }

    tipMove();
    function tipMove() {
        for (var i = 0; i < tipList.length; i++) {
            var cur = tipList[i];
            cur.index = i;
            cur.onclick = function () {
                window.clearInterval(autoTimer);
                step = i;
                animate(inner, {left: -step * 1226}, 500);
                selectTip();
                autoTimer = window.setInterval(autoMove, 3000);
            }
        }
    }

    btnLeft.onclick = function () {
        window.clearInterval(autoTimer);
        step--;
        if (step < 0) {
            step = 4;
            inner.style.left = -5 * 1226 + "px";
        }
        animate(inner, {left: -step * 1226}, 500)
        selectTip();
        autoTimer = window.setInterval(autoMove, 3000);
    };
    btnRight.onclick = function () {
        window.clearInterval(autoTimer);
        autoMove();
        autoTimer = window.setInterval(autoMove, 3000);
    };
    function autoMove() {
        step++;
        if (step > 5) {
            step = 1;
            inner.style.left = 0;
        }
        animate(inner, {left: -step * 1226}, 500);
        selectTip();
    }

    autoTimer = window.setInterval(autoMove, 3000);
})();
