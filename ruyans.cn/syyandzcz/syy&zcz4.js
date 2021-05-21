var textArr = ['I love three things in this world,', '我爱这个世界上的三样东西，', 'the sun ,the moon and you.', '太阳，月亮和你，',
    'The sun for the day,', '白天的太阳，', 'the moon for the night,', '夜晚的月亮，', 'and you forever!', '', '永远的你！',
    'If you were a teardrop,', '如果你是一滴眼泪，', 'in my eye,', '在我眼里，', 'for fear of losing you,', '因为害怕失去你，',
    'I would never cry.', '我永远不会哭。', 'And if the golden sun,', '如果金色的太阳，',
    'should cease to shine its light,', '如果不再闪耀光芒，', 'just one smile from you,', '你的一个微笑，',
    'would make my whole world bright.', '会让我的整个世界变得光明。'
];
var text_520 = document.getElementById('text_520');
var height = (window.innerHeight - text_520.offsetHeight) / 10;
var width = (window.innerWidth - text_520.offsetWidth) / 10;

text_520.style.top = height + 'px';
text_520.style.left = width + 'px';
$('#text_520').hide();
$('.img').hide();
var m = 0;
var n = 0;
var text = document.getElementById('text');

function typing() {
    if (m <= textArr[n].length) {
        text.innerHTML = text.innerHTML.substring(0, text.innerHTML.length - 1) + textArr[n].substr(m++, 1) +
            '_';
        setTimeout(typing, 100);
    } else {
        if (n < textArr.length - 1) {
            text.innerHTML = text.innerHTML.substring(0, text.innerHTML.length - 1) + "<br />_";
            n++;
            m = 0;
            typing();
        } else {
            text.innerHTML = text.innerHTML.substring(0, text.innerHTML.length - 1);
            $('#text').fadeOut(5000);
            setTimeout(function () {
                $('#text_520').fadeIn(5000);
            }, 7000);
            setTimeout(function () {
                $('#text_520').fadeOut(5000);
            }, 7000);
            setTimeout(function () {
                $('.img').fadeIn(50000);
            }, 15000)
        }
    }
}
setTimeout(typing, 5000);
var ctx = document.querySelector('canvas').getContext('2d');
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

var sparks = [];
var fireworks = [];

var walker;

fireworks.pop();

var i = 10;
while (i--)
    fireworks.push(new Firework(Math.random() * window.innerWidth, window.innerHeight * Math.random()));
// setInterval(render, 1000/50);
render();

function render() {

    setTimeout(render, 1000 / 50);

    ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // 上升效果
    for (var firework of fireworks) {
        if (firework.dead)
            continue;
        firework.move();
        firework.draw();
    }
    // 绽放效果
    for (var spark of sparks) {
        if (spark.dead)
            continue;
        spark.move();
        spark.draw();

    }

    if (Math.random() < 0.5)
        fireworks.push(new Firework());

    //ctx.height = ctx.height;
}

function Spark(x, y, color) {
    this.x = x;
    this.y = y;
    this.dir = Math.random() * (Math.PI * 2);
    this.dead = false;
    this.color = color;
    this.speed = Math.random() * 3 + 3;
    walker = new Walker({
        radius: 20,
        speed: 0.25
    });
    this.gravity = 0.25;
    this.dur = this.speed / 0.15;
    this.move = function () {
        this.dur--;
        if (this.dur < 0)
            this.dead = true;

        if (this.speed < 0)
            return;
        if (this.speed > 0)
            this.speed -= 0.15;
        walk = walker.step();
        this.x += Math.cos(this.dir + walk) * this.speed;
        this.y += Math.sin(this.dir + walk) * this.speed;
        this.y += this.gravity;
        this.gravity += 0.05;

    }
    this.draw = function () {
        drawCircle(this.x, this.y, 2, this.color);
    }

}

function Firework(x, y) {
    this.xmove = Math.random() * 2 - 1;
    this.x = x || Math.random() * ctx.canvas.width;
    this.y = y || ctx.canvas.height;
    this.height = Math.random() * ctx.canvas.height / 2;
    this.dead = false;
    this.color = randomColor();

    this.move = function () {
        this.x += this.xmove;
        if (this.y > this.height)
            this.y -= 4;
        else
            this.burst();

    }

    this.draw = function () {
        drawCircle(this.x, this.y, 3, this.color)
    }

    this.burst = function () {
        this.dead = true
        i = 100;
        while (i--)
            sparks.push(new Spark(this.x, this.y, this.color));
        sparks.pop();
    }

}

setTimeout(function () {
    window.open('', '_self').close();
}, 175000);

/*

            // 清除两个数组
            function clear(){
                if(sparks!=null || fireworks!=null){
                    sparks.pop();
                    fireworks.pop();
                }
                var sparks = [];
                var fireworks = [];
            }
           
            setInterval(clear,100);
             */
function drawCircle(x, y, radius, color) {
    color = color || '#FFF';
    ctx.fillStyle = color;
    ctx.fillRect(x - radius / 2, y - radius / 2, radius, radius);
}

function randomColor() {
    return ['#6ae5ab', '#88e3b2', '#36b89b', '#7bd7ec', '#66cbe1'][Math.floor(Math.random() * 5)];
}

function Walker(options) {
    this.step = function () {
        this.direction = Math.sign(this.target) * this.speed
        this.value += this.direction
        this.target ? this.target -= this.direction : (this.value) ? (this.wander) ? this.target = this
            .newTarget() : this.target = -this.value : this.target = this.newTarget()
        return this.direction
    }

    this.newTarget = function () {
        return Math.round(Math.random() * (this.radius * 2) - this.radius)
    }

    this.start = 0
    this.value = 0
    this.radius = options.radius
    this.target = this.newTarget()
    this.direction = Math.sign(this.target)
    this.wander = options.wander
    this.speed = options.speed || 1
}