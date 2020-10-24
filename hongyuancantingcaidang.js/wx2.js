var useragent = navigator.userAgent;
if (useragent.match(/MicroMessenger/i) != 'MicroMessenger') {
    window.location.href = "http://ruyans.cn/hongyuancanting/ts.html"; //若不是微信浏览器，跳转到温馨error页面
}