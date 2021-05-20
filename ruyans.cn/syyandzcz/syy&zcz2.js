function isIE() {
    var u = navigator.userAgent;
    if ((u.indexOf("compatible") > -1 && u.indexOf("MSIE") > -1) || (u.indexOf("Trident") > -1 && u.indexOf("rv:11.0") > -1)) {
        alert("该浏览器暂不支持，请更换浏览器");
        window.open('', '_self');
        window.close();
    }
    var audio = document.createElement("audio");
    audio.setAttribute("src", "http://music.163.com/song/media/outer/url?id=1302114856.mp3");
    audio.setAttribute("autoplay", "autoplay");
    0
}
isIE();