var binft = function (r) {
    function t() {
        return b[Math.floor(Math.random() * b.length)]
    }

    function e() {
        return String.fromCharCode(94 * Math.random() + 33)
    }

    function n(r) {
        for (var n = document.createDocumentFragment(), i = 0; r > i; i++) {
            var l = document.createElement("span");
            l.textContent = e(), l.style.color = t(), n.appendChild(l)
        }
        return n
    }

    function i() {
        var t = o[c.skillI];
        c.step ? c.step-- : (c.step = g, c.prefixP < l.length ? (c.prefixP >= 0 && (c.text += l[c.prefixP]), c.prefixP++) : "forward" === c.direction ? c.skillP < t.length ? (c.text += t[c.skillP], c.skillP++) : c.delay ? c.delay-- : (c.direction = "backward", c.delay = a) : c.skillP > 0 ? (c.text = c.text.slice(0, -1), c.skillP--) : (c.skillI = (c.skillI + 1) % o.length, c.direction = "forward")), r.textContent = c.text, r.appendChild(n(c.prefixP < l.length ? Math.min(s, s + c.prefixP) : Math.min(s, t.length - c.skillP))), setTimeout(i, d)
    }
    var l = "",
        o = ["问你啊，改天是哪天，下次是哪次，以后是多久，生活不是为了赶路而是为了感受路，去经历去后悔，请保持你的热爱，奔赴下一次山海，", "听闻远方有你，动身跋涉千里，我吹过你吹过的风，这算不算相拥，我喜欢你，从一而终，认真且怂。", "你知道吗？人生之所以美好，是因为他不总是晴空万里，也不总是困难重重，路上总会有阴影，但抬头总会有阳光，世界的温柔，是晚来的善意，和心有阳光努力的你。", "我们所做的事情，不过是重复前人所做的事情罢了", "幸福的家庭都是相似的，不幸的家庭各有各的不幸。", "因为痛苦太有价值，因为回忆太珍贵，所以我们更要继续往前走。", "你逆光而来，配得上世间所有的美好。"].map(function (r) {
            return r + ""
        }),
        a = 2,
        g = 1,
        s = 5,
        d = 75,
        b = ["rgb(110,64,170)", "rgb(150,61,179)", "rgb(191,60,175)", "rgb(228,65,157)", "rgb(254,75,131)", "rgb(255,94,99)", "rgb(255,120,71)", "rgb(251,150,51)", "rgb(226,183,47)", "rgb(198,214,60)", "rgb(175,240,91)", "rgb(127,246,88)", "rgb(82,246,103)", "rgb(48,239,130)", "rgb(29,223,163)", "rgb(26,199,194)", "rgb(35,171,216)", "rgb(54,140,225)", "rgb(76,110,219)", "rgb(96,84,200)"],
        c = {
            text: "",
            prefixP: -s,
            skillI: 0,
            skillP: 0,
            direction: "forward",
            delay: a,
            step: g
        };
    i()
};
binft(document.getElementById('binft'));