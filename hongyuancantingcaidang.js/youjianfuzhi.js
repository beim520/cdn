function stop() {
    return false;
}
document.oncontextmenu = stop;

//禁止鼠标右键
//contextmenu是右键菜单,将整个document的contextmenu事件阻止,就无法通过右键复制
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
})
//禁止鼠标选中
//selectstart是鼠标开始选中内容,将document(整个html元素)的selectstart事件阻止后就将无法右键选中,就无法ctrl+c
document.addEventListener('selectstart', function(e) {
e.preventDefault();
})

document.onkeydown = function(){

    if(window.event && window.event.keyCode == 123) {
        alert("F12被禁用");
        event.keyCode=0;
        event.returnValue=false;
    }
    if(window.event && window.event.keyCode == 13) {
        window.event.keyCode = 505;
    }
    if(window.event && window.event.keyCode == 8) {
        alert(str+"\n请使用Del键进行字符的删除操作！");
        window.event.returnValue=false;
    }

}