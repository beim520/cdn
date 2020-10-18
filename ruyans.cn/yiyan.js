fetch('https://v1.hitokoto.cn/?c=h')
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        var hitokoto = document.getElementById('hitokoto');
        var afrom = document.getElementById('afrom');
        hitokoto.innerText = data.hitokoto;
        afrom.innerText = '——【' + data.from + ' ' + data.from_who + '】';
    })
    .catch(function (err) {
        console.error(err);
    })