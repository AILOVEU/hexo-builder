/**
 * 鼠标点击，弹出20字
 */
(function () {
  function color16() { //十六进制颜色随机
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
    return color;
  }
  $("html,body").click(function (e) {
    var gcd = new Array("❤", "^_^", "自由", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善");
    var n = Math.floor(Math.random() * gcd.length);
    var $i = $("<b/>").text(gcd[n]);
    var x = e.pageX,
      y = e.pageY;
    $i.css({
      "z-index": 99999,
      "top": y - 20,
      "left": x,
      "position": "absolute",
      "color": color16()
    });
    $("body").append($i);
    $i.animate({
        "top": y - 180,
        "opacity": 0
      },
      1500,
      function () {
        $i.remove()
      });
    e.stopPropagation()
  });
})()


/**
 * 星空连线
 * created by lvfan
 * 2018-09-04
 */
window.requestAnimFrame = (function () {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    };
})();
//version 2
(function(){
  
  //帧动画
  var canvas = document.getElementById("universe");
  var cxt = canvas.getContext("2d");
  var w, h;
  var num = 50;
  var data = [];
  var move = [];
  init();
  //初始化位置
  function init() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    for (var i = 0; i < num; i++) //每个粒子都有自己的角度,从始至终一直是初始化的这个
    { //随机取得一个坐标以及方向增量
      data[i] = {
        x: Math.random() * w,
        y: Math.random() * h,
        cx: Math.random() * 3 - 1,
        cy: Math.random() * 3 - 1
      };
      circle(data[i].x, data[i].y); //画点
    }
  }

  function circle(x, y) {
    cxt.save();
    cxt.fillStyle = "pink";
    cxt.beginPath();
    cxt.arc(x, y, 0.5, Math.PI * 2, false);
    cxt.closePath();
    cxt.fill();
    cxt.restore();
  }!
  function draw() { //循环自执行
    cxt.clearRect(0, 0, w, h); //清除画布
    for (var i = 0; i < num; i++) {
      data[i].x += data[i].cx; //位移
      data[i].y += data[i].cy;
      if (data[i].x > w || data[i].x < 0) data[i].cx = -data[i].cx; //边界反弹
      if (data[i].y > h || data[i].y < 0) data[i].cy = -data[i].cy;
      circle(data[i].x, data[i].y);
      for (var j = i + 1; j < num; j++) //寻找距离较小的点(i+1握手原理)
      {
        if ((data[i].x - data[j].x) * (data[i].x - data[j].x) + (data[i].y - data[j].y) * (data[i].y - data[j].y) <= 80 * 80) line(data[i].x, data[i].y, data[j].x, data[j].y);
      }
      if (move.x) //鼠标跟随
      {
        if ((data[i].x - move.x) * (data[i].x - move.x) + (data[i].y - move.y) * (data[i].y - move.y) <= 100 * 100) line(data[i].x, data[i].y, move.x, move.y);
      }

    }
    /* setInterval(function(){
      draw();
    },13); */
    //定时器会卡顿,所以不用
    window.requestAnimFrame(draw);
  }();

  function line(x1, y1, x2, y2) {
    var color = cxt.createLinearGradient(x1, y1, x2, y2); //设置渐变线颜色
    color.addColorStop(0, "#eee");
    color.addColorStop(0.5, "#eee");
    color.addColorStop(1, "#eee");
    cxt.save();
    cxt.strokeStyle = color;
    cxt.beginPath();
    cxt.moveTo(x1, y1); //起点
    cxt.lineTo(x2, y2);
    cxt.stroke();
    cxt.restore();
  }
  document.onmousemove = function (e) {
    move.x = e.clientX;
    move.y = e.clientY;
  }
})();


/**
 * 懒加载图片
 * 
 */
(function () {
  // onload是等所有的资源文件加载完毕以后再绑定事件
  window.onload = function () {
    // 获取图片列表，即img标签列表
    var imgs = document.querySelectorAll('.lazy-img');
    // 获取到浏览器顶部的距离
    function getTop(e) {
      return e.offsetTop;
    }

    // 懒加载实现
    function lazyload(imgs) {
      // 可视区域高度
      var h = window.innerHeight;
      //滚动区域高度
      var s = document.documentElement.scrollTop || document.body.scrollTop;
      for (var i = 0; i < imgs.length; i++) {
        //图片距离顶部的距离大于可视区域和滚动区域之和时懒加载
        if ((h + s) > getTop(imgs[i])) {
          // 真实情况是页面开始有2秒空白，所以使用setTimeout定时2s
          (function (i) {
            setTimeout(function () {
                // 不加立即执行函数i会等于9
                // 隐形加载图片或其他资源，
                //创建一个临时图片，这个图片在内存中不会到页面上去。实现隐形加载
                var temp = new Image();
                temp.src = imgs[i].getAttribute('data-src'); //只会请求一次
                // onload判断图片加载完毕，真是图片加载完毕，再赋值给dom节点
                temp.onload = function () {
                  // 获取自定义属性data-src，用真图片替换假图片
                  imgs[i].src = imgs[i].getAttribute('data-src')
                  imgs[i].class = "img";
                }
              },
              2000)
          })(i)
        }
      }
    }
    lazyload(imgs);

    // 滚屏函数
    window.onscroll = function () {
      lazyload(imgs);
    }
  }
})();

/**
 * 特定页面加载mermaidEle
 * 
 */
(function () {
  var mermaidEle = document.querySelectorAll("#mermaidEle");
  if (mermaidEle.length > 0) {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://unpkg.com/mermaid@7.1.2/dist/mermaid.min.js';
    head.appendChild(script);
    if (window.mermaid) {
      mermaid.initialize({
        theme: 'default'
      });
    }
  }
})();
/**
 * 
 * html2canvas
 * 稀里糊涂的就实现了？
 * 
 */
$(function () {
    $(".btn_click_html2cancas").click(function () {
      html2canvas($(".fixbackground"),{
        //allowTaint:true,
        useCORS: true,
        onrendered: function (canvas) {
          // var pageData = canvas.toDataURL('image/jpeg', 1.0);
          // saveFile(pageData.replace("image/jpeg", "image/octet-stream"),new Date().getTime()+".jpeg");
        }
      }).then((canvas)=>{
        var pageData = canvas.toDataURL('image/jpeg', 1.0);
        saveFile(pageData,new Date().getTime()+".jpeg");
      });

  });
  
});
/*
* @param  {String} data     要保存到本地的图片数据
* @param  {String} filename 文件名
*/
var saveFile = function(data, filename){
  var save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
  save_link.href = data;
  save_link.download = filename;

  var event = document.createEvent('MouseEvents');
  
  event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
  save_link.dispatchEvent(event);


 
};


/**
 * 介是嘛呀，介是刮刮乐的实现 ! 
 * 终于做出来了，5555
 */
(function() {
  var imgRefence = document.querySelector('.img-ggl-refence');
  var refenceUrl = imgRefence.getAttribute('data-src');
  var refenceImg = new Image();
  refenceImg.src = refenceUrl;
  refenceImg.onload = function() {
    var refenceW = imgRefence.clientWidth;
    var bodystyle = document.body.style;
    bodystyle.mozUserSelect = 'none';
    bodystyle.webkitUserSelect = 'none';
    var img = new Image();
    var canvas = document.querySelector('.canvas');
    canvas.style.backgroundColor = 'transparent';
    canvas.style.position = 'absolute';
    
    img.src = canvas.getAttribute("data-src");
    canvas.style.backgroundImage = 'url(' + img.src + ')';

    img.addEventListener('load',
    function(e) {
        var ctx;
        var scale = img.width / refenceW;
        var w = img.width / scale,
        h = img.height / scale;
        console.log([w, h]);
        var offsetX = canvas.offsetLeft,
        offsetY = canvas.offsetTop;
        var mouseDown = false;
  
        function layer(ctx) {
            ctx.fillStyle = 'black';
            ctx.fillRect(0, 0, w, h)
        };
  
        function eventDown(e) {
            e.preventDefault();
            mouseDown = true;
        }
  
        function eventUp(e) {
            e.preventDefault();
            mouseDown = false;
        }
  
        function eventMove(e) {
            e.preventDefault();
            if (mouseDown) {
                // changedTouches 最近一次触发该事件的手指信息
                if (e.changedTouches) {
                    e = e.changedTouches[e.changedTouches.length - 1];
                }
                var x = (e.clientX + window.pageXOffset) - offsetX || 0;
                var y = (e.clientY + window.pageYOffset) - offsetY || 0;
                ctx.beginPath();
                ctx.arc(x, y,w/5, 0, Math.PI * 2);
                ctx.fill();
                // with(ctx) {
                //     beginPath();
                //     //fillRect(x,y,30,30)
                //     arc(x, y,w/5, 0, Math.PI * 2);
                //     fill();
                // }
            }
        }
        canvas.width = w;
        canvas.height = h;
        var articleContentEle = document.querySelector("#article-content");
        articleContentEle.style.marginBottom = `${h+20}px`;
        canvas.style.backgroundImage = 'url(' + img.src + ')';
        ctx = canvas.getContext('2d');
        ctx.fillStyle = 'transparent';
        ctx.fillRect(0, 0, w, h);
        layer(ctx);
        ctx.globalCompositeOperation = "destination-out";
        canvas.addEventListener('touchstart', eventDown);
        canvas.addEventListener('touchend', eventUp);
        canvas.addEventListener('touchmove', eventMove);
        canvas.addEventListener('mousedown', eventDown);
        canvas.addEventListener('mouseup', eventUp);
        canvas.addEventListener('mousemove', eventMove);
    },
    false)
  }

  
})()




/**
 * 星空连线
 * 
 */
// version 1
// (function drawBg() {
//   console.log("draw bg");
//   window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
//       window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
//   const starDensity = 0.216;
//   const speedCoeff = 0.05;
//   let width;
//   let height;
//   let starCount;
//   /* no-unused-vars */
//   // let circleRadius;
//   // let circleCenter;
//   let first = true;
//   let giantColor = '180,184,240';
//   let starColor = '226,225,142';
//   let cometColor = '226,225,224';
//   const canva = document.getElementById('universe');
//   let stars = [];
//   let universe;
//   windowResizeHandler();
//   window.addEventListener('resize', windowResizeHandler, false);
//   function windowResizeHandler() {
//       width = window.innerWidth;
//       height = window.innerHeight;
//       starCount = width * starDensity;
//       // circleRadius = (width > height ? height / 2 : width / 2);
//       // circleCenter = {
//       //   x: width / 2,
//       //   y: height / 2
//       // };
//       canva.setAttribute('width', width);
//       canva.setAttribute('height', height);
//   }
//   createUniverse();
//   function createUniverse() {
//       universe = canva.getContext('2d');
//       for (let i = 0; i < starCount; i++) {
//           stars[i] = new Star();
//           stars[i].reset();
//       }
//       draw();
//   }
//   function draw() {
//       universe.clearRect(0, 0, width, height);
//       let starsLength = stars.length;
//       for (let i = 0; i < starsLength; i++) {
//           let star = stars[i];
//           star.move();
//           star.fadeIn();
//           star.fadeOut();
//           star.draw();
//       }
//       window.requestAnimationFrame(draw);
//   }
//   function Star() {
//       this.reset = function () {
//           this.giant = getProbability(3);
//           this.comet = this.giant || first ? false : getProbability(10);
//           this.x = getRandInterval(0, width - 10);
//           this.y = getRandInterval(0, height);
//           this.r = getRandInterval(1.1, 2.6);
//           this.dx = getRandInterval(speedCoeff, 6 * speedCoeff) + (this.comet + 1 - 1) * speedCoeff * getRandInterval(50, 120) + speedCoeff * 2;
//           this.dy = -getRandInterval(speedCoeff, 6 * speedCoeff) - (this.comet + 1 - 1) * speedCoeff * getRandInterval(50, 120);
//           this.fadingOut = null;
//           this.fadingIn = true;
//           this.opacity = 0;
//           this.opacityTresh = getRandInterval(0.2, 1 - (this.comet + 1 - 1) * 0.4);
//           this.do = getRandInterval(0.0005, 0.002) + (this.comet + 1 - 1) * 0.001;
//       };
//       this.fadeIn = function () {
//           if (this.fadingIn) {
//               this.fadingIn = !(this.opacity > this.opacityTresh);
//               this.opacity += this.do;
//           }
//       };
//       this.fadeOut = function () {
//           if (this.fadingOut) {
//               this.fadingOut = !(this.opacity < 0);
//               this.opacity -= this.do / 2;
//               if (this.x > width || this.y < 0) {
//                   this.fadingOut = false;
//                   this.reset();
//               }
//           }
//       };
//       this.draw = function () {
//           universe.beginPath();
//           if (this.giant) {
//               universe.fillStyle = 'rgba(' + giantColor + ',' + this.opacity + ')';
//               universe.arc(this.x, this.y, 2, 0, 2 * Math.PI, false);
//           } else if (this.comet) {
//               universe.fillStyle = 'rgba(' + cometColor + ',' + this.opacity + ')';
//               universe.arc(this.x, this.y, 1.5, 0, 2 * Math.PI, false);
//               // comet tail
//               for (let i = 0; i < 30; i++) {
//                   universe.fillStyle = 'rgba(' + cometColor + ',' + (this.opacity - (this.opacity / 20) * i) + ')';
//                   universe.rect(this.x - this.dx / 4 * i, this.y - this.dy / 4 * i - 2, 2, 2);
//                   universe.fill();
//               }
//           } else {
//               universe.fillStyle = 'rgba(' + starColor + ',' + this.opacity + ')';
//               universe.rect(this.x, this.y, this.r, this.r);
//           }
//           universe.closePath();
//           universe.fill();
//       };
//       this.move = function () {
//           this.x += this.dx;
//           this.y += this.dy;
//           if (this.fadingOut === false) {
//               this.reset();
//           }
//           if (this.x > width - (width / 4) || this.y < 0) {
//               this.fadingOut = true;
//           }
//       };
//       (function () {
//           setTimeout(function () {
//               first = false;
//           }, 50);
//       })();
//   }
//   function getProbability(percents) {
//       return ((Math.floor(Math.random() * 1000) + 1) < percents * 10);
//   }
//   function getRandInterval(min, max) {
//       return (Math.random() * (max - min) + min);
//   }
// }());
/*
//version3
var canvas = document.getElementById("universe");
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;
var ctx = canvas.getContext("2d");
//创建小球的构造函数
function Ball() {
  this.x = randomNum(3, canvas.width - 3);
  this.y = randomNum(3, canvas.height - 3);
  this.r = randomNum(1, 3);
  this.color = randomColor();
  this.speedX = randomNum( - 3, 3) * 0.2;
  this.speedY = randomNum( - 3, 3) * 0.2;
}
Ball.prototype = {
  //绘制小球
  draw: function() {
    ctx.beginPath();
    ctx.globalAlpha = 1;
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fill();
  },
  //小球移动
  move: function() {
    this.x += this.speedX;
    this.y += this.speedY;
    //为了合理性,设置极限值
    if (this.x <= 3 || this.x > canvas.width - 3) {
      this.speedX *= -1;
    }
    if (this.y <= 3 || this.y >= canvas.height - 3) {
      this.speedY *= -1;
    }
  }
}
//存储所有的小球
var balls = [];
//创建200个小球
for (var i = 0; i < 150; i++) {
  var ball = new Ball();
  balls.push(ball);
}
main();
function main() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  //鼠标移动绘制线				
  mouseLine();
  //小球与小球之间自动画线
  drawLine();
  //使用关键帧动画，不断的绘制和清除
  window.requestAnimationFrame(main);
}
//添加鼠标移动事件
//记录鼠标移动时的mouseX坐标
var mouseX;
var mouseY;
canvas.onmousemove = function(e) {
  var ev = event || e;
  mouseX = ev.offsetX;
  mouseY = ev.offsetY;
}
//判断是否划线
function drawLine() {
  for (var i = 0; i < balls.length; i++) {
    balls[i].draw();
    balls[i].move();
    for (var j = 0; j < balls.length; j++) {
      if (i != j) {
        if (Math.sqrt(Math.pow((balls[i].x - balls[j].x), 2) + Math.pow((balls[i].y - balls[j].y), 2)) < 80) {
          ctx.beginPath();
          ctx.moveTo(balls[i].x, balls[i].y);
          ctx.lineTo(balls[j].x, balls[j].y);
          ctx.strokeStyle = "gray";
          ctx.globalAlpha = 0.2;
          ctx.stroke();
        }
      }
    }
  }
}
//使用鼠标移动划线
function mouseLine() {
  for (var i = 0; i < balls.length; i++) {
    if (Math.sqrt(Math.pow((balls[i].x - mouseX), 2) + Math.pow((balls[i].y - mouseY), 2)) < 80) {
      ctx.beginPath();
      ctx.moveTo(balls[i].x, balls[i].y);
      ctx.lineTo(mouseX, mouseY);
      ctx.strokeStyle = "white";
      ctx.globalAlpha = 0.8;
      ctx.stroke();
    }
  }
}
//随机函数
function randomNum(m, n) {
  return Math.floor(Math.random() * (n - m + 1) + m);
}
//随机颜色
function randomColor() {
  return "rgb(" + randomNum(0, 255) + "," + randomNum(0, 255) + "," + randomNum(0, 255) + ")";
}
*/



/**
 * 刮刮乐
 */
// (function(){

//   const oImgs = document.querySelectorAll('#img')
//   //oImg.readyState 图片加载状态
//   if (oImgs.length > 0) {
//     var oImg = oImgs[0];
//     var temp = new Image();
//     temp.src = oImg.getAttribute('src'); //只会请求一次
//     // onload判断图片加载完毕，真是图片加载完毕，再赋值给dom节点
//     temp.onload = function () {
//       // 获取自定义属性data-src，用真图片替换假图片
//       oImg.src = oImg.getAttribute('data-src');
//       draw(oImg);
//     }
//   }
  
//   function draw(oImg) { //等图片加载完成后再添加canvas画布在上面
//     let can = document.createElement('canvas'); //创建一个canvas画布
//     can.width = oImg.width; //等于图片的宽高
//     can.height = oImg.height;
//     can.style.position = "absolute"; //canvas画布设置浮动会漂浮在图片上
//     can.style.left = oImg.offsetLeft + "px"; //保存与画布位置一致
//     can.style.top = oImg.offsetTop + "px";
//     //找到图片的父级：parentNode  在oImg子元素前面添加canvas标签：insertBefore
//     oImg.parentNode.insertBefore(can, oImg) //在img前面去插入canvas标签
//     let ctx = can.getContext('2d');
//     ctx.fillStyle = "#bbb"; //刮刮乐的颜色
//     ctx.fillRect(0, 0, oImg.width, oImg.height) //填充宽度
//     //合成:处理合成图片的透明样式；
//     //拖拽的时候，canvas图层显示透明；destination-out：新图形与原图形重叠部分透明
//     ctx.globalCompositeOperation = "destination-out";
//     ctx.strokeStyle = "#eee"; //触笔的颜色 随便  因为它终究变成透明
//     ctx.lineWidth = 30; //拖动时开始画线的线宽
//     ctx.lineCap = "round" //这两步是把画笔变成圆形
//     //按下，移动，抬起事件
//     can.onmousedown = function (e) {
//       e = e || window.event; //兼容低版本IE浏览器
//       //e.pageX距离文档右边缘； offsetLeft：canvas画布距离文档的右边距离
//       let x = e.pageX - can.offsetLeft; //得到的x是在canvas上的坐标值
//       let y = e.pageY - can.offsetTop;
//       ctx.beginPath();
//       // ctx.moveTo(  x,y )//从哪里开始来画
//       ctx.arc(x, y, 15, 0, 6.3, false); //点第一下是画一个圆
//       ctx.fill();
//       //按下后拖拽
//       can.onmousemove = function (e) { //拖动时一直执行下面
//         e = e || window.event; //兼容低版本IE浏览器
//         ctx.beginPath(); //拖动时开始画线
//         ctx.moveTo(x, y); //起始点   
//         ctx.lineTo(e.pageX - can.offsetLeft, e.pageY - can.offsetTop); //移动的过程
//         //每次移动的时候，样式所在的坐标；
//         x = e.pageX - can.offsetLeft; //第二次渲染刮图片效果的起始点应该在上一次的终止点
//         y = e.pageY - can.offsetTop;
//         ctx.stroke(); //弹出图形并恢复画布
//       }
//       document.onmouseup = function () {
//         //抬起后将事件注销
//         can.onmousemove = null;
//         this.onmouseup = null;
//         check(); //完成后通过像素计算刮过的的百分比
//       }
//     }
  
//     function check() {
//       //获取画布的像素列表
//       let data = ctx.getImageData(0, 0, can.width, can.height).data;
//       let n = 0; //计算透明像素的个数
//       for (let i = 0; i < data.length; i += 4) { //感觉这一步比较消耗性能
//         //RGBA
//         if (data[i] == 0 && data[i + 1] == 0 && data[i + 2] == 0 && data[i + 3] == 0) {
//           n++
//         }
//       }
//       let f = n * 100 / (can.width * can.height); //算出所刮的面积的占比；
//       //刮开面积的比例
//       if (f > 30) { //如果所刮的面积大于30%   则将canvas画布整体清除fillRect
//         ctx.beginPath();
//         ctx.fillRect(0, 0, can.width, can.height)
//       }
//     }
//   }
// })();
