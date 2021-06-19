document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        loadingFade();
    }
}

function loadingFade() {
    var opacity =
        1;
    var loadingPage = document.getElementById('loading');
    var loadingBackground = document.getElementById('loading_bg');
    var time = setInterval(function () {
        if (opacity <= 0) {
            clearInterval(
                time);
            loadingPage.remove();
            $('#loading').remove();
        }
        loadingBackground.style.opacity = opacity;
        opacity -= 0.4;
    }, 100);
}
var chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

function generateMixed(n) {
    var res = "";
    for (var i = 0; i < n; i++) {
        var id = Math.ceil(Math.random() * 16);
        res += chars[id];
    }
    return res;
}

var num = generateMixed(6);
var p = document.getElementById('broadcast');
p.style.color = "#" + num;