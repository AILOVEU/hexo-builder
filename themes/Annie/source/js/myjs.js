function color16(){//十六进制颜色随机
        var r = Math.floor(Math.random()*256);
        var g = Math.floor(Math.random()*256);
        var b = Math.floor(Math.random()*256);
        var color = '#'+r.toString(16)+g.toString(16)+b.toString(16);
        return color;
    }
$("html,body").click(function(e) {
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
  function() {
    $i.remove()
  });
  e.stopPropagation()
});


/**
 * 星空连线
 */
/**
 * created by lvfan
 * 2018-09-04
 */


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

//version 2
window.requestAnimFrame = (function() {  
  return  window.requestAnimationFrame ||   
      window.webkitRequestAnimationFrame ||   
      window.mozRequestAnimationFrame    ||   
      function(callback){  
          window.setTimeout(callback, 1000 / 60);  
      }; 
})();//帧动画
var canvas=document.getElementById("universe");
var cxt=canvas.getContext("2d");
var w,h;
var num=150;
var data=[];
var move=[];
init();
//初始化位置
function init(){
  w=canvas.width=window.innerWidth;
  h=canvas.height=window.innerHeight;
  for(var i=0;i<num;i++)//每个粒子都有自己的角度,从始至终一直是初始化的这个
  {//随机取得一个坐标以及方向增量
      data[i]={x:Math.random()*w,y:Math.random()*h,cx:Math.random()*3-1,cy:Math.random()*3-1};
      circle(data[i].x,data[i].y);//画点
  }
}
function circle(x,y){
  cxt.save();
  cxt.fillStyle="pink";
  cxt.beginPath();
  cxt.arc(x,y,0.5,Math.PI*2,false);
  cxt.closePath();
  cxt.fill();
  cxt.restore();
}
!function draw(){//循环自执行
  cxt.clearRect(0,0,w,h);//清除画布
  for(var i=0;i<num;i++)
  {
      data[i].x+=data[i].cx;//位移
      data[i].y+=data[i].cy;
      if(data[i].x>w||data[i].x<0)data[i].cx=-data[i].cx;//边界反弹
      if(data[i].y>h||data[i].y<0)data[i].cy=-data[i].cy;
      circle(data[i].x,data[i].y);
      for(var j=i+1;j<num;j++)//寻找距离较小的点(i+1握手原理)
      {
          if((data[i].x-data[j].x)*(data[i].x-data[j].x)+(data[i].y-data[j].y)*(data[i].y-data[j].y)<=80*80)
              line(data[i].x,data[i].y,data[j].x,data[j].y);
      }
      if(move.x)//鼠标跟随
      {
          if((data[i].x-move.x)*(data[i].x-move.x)+(data[i].y-move.y)*(data[i].y-move.y)<=100*100)
              line(data[i].x,data[i].y,move.x,move.y);
      }
      
  }
  window.requestAnimFrame(draw);
  /* setInterval(function(){
      draw();
  },13); */
  //定时器会卡顿,所以不用
}();
function line(x1,y1,x2,y2){
  var color=cxt.createLinearGradient(x1,y1,x2,y2);//设置渐变线颜色
  color.addColorStop(0,"#eee");
  color.addColorStop(0.5,"#eee");
  color.addColorStop(1,"#eee");
  cxt.save();
  cxt.strokeStyle=color;
  cxt.beginPath();
  cxt.moveTo(x1,y1);//起点
  cxt.lineTo(x2,y2);
  cxt.stroke();
  cxt.restore();
}
document.onmousemove=function(e){
  move.x=e.clientX;
  move.y=e.clientY;
}

// //version3
// var canvas = document.getElementById("universe");
// canvas.width = document.documentElement.clientWidth;
// canvas.height = document.documentElement.clientHeight;
// var ctx = canvas.getContext("2d");
// //创建小球的构造函数
// function Ball() {
//     this.x = randomNum(3, canvas.width - 3);
//     this.y = randomNum(3, canvas.height - 3);
//     this.r = randomNum(1, 3);
//     this.color = randomColor();
//     this.speedX = randomNum(-3, 3) * 0.2;
//     this.speedY = randomNum(-3, 3) * 0.2;
// }
// Ball.prototype = {
//         //绘制小球
//         draw: function () {
//                 ctx.beginPath();
//                 ctx.globalAlpha = 1;
//                 ctx.fillStyle = this.color;
//                 ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
//                 ctx.fill();
//             },
//             //小球移动
//             move: function () {
//                 this.x += this.speedX;
//                 this.y += this.speedY;
//                 //为了合理性,设置极限值
//                 if (this.x <= 3 || this.x > canvas.width - 3) {
//                     this.speedX *= -1;
//                 }
//                 if (this.y <= 3 || this.y >= canvas.height - 3) {
//                     this.speedY *= -1;
//                 }
//             }
//     }
//     //存储所有的小球
// var balls = [];
// //创建200个小球
// for (var i = 0; i < 150; i++) {
//     var ball = new Ball();
//     balls.push(ball);
// }
// main();

// function main() {
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         //鼠标移动绘制线				
//         mouseLine();
//         //小球与小球之间自动画线
//         drawLine();
//         //使用关键帧动画，不断的绘制和清除
//         window.requestAnimationFrame(main);
//     }
//     //添加鼠标移动事件
//     //记录鼠标移动时的mouseX坐标
// var mouseX;
// var mouseY;
// canvas.onmousemove = function (e) {
//         var ev = event || e;
//         mouseX = ev.offsetX;
//         mouseY = ev.offsetY;
//     }
//     //判断是否划线

// function drawLine() {
//         for (var i = 0; i < balls.length; i++) {
//             balls[i].draw();
//             balls[i].move();
//             for (var j = 0; j < balls.length; j++) {
//                 if (i != j) {
//                     if (Math.sqrt(Math.pow((balls[i].x - balls[j].x), 2) + Math.pow((balls[i].y - balls[j].y), 2)) < 80) {
//                         ctx.beginPath();
//                         ctx.moveTo(balls[i].x, balls[i].y);
//                         ctx.lineTo(balls[j].x, balls[j].y);
//                         ctx.strokeStyle = "gray";
//                         ctx.globalAlpha = 0.2;
//                         ctx.stroke();
//                     }
//                 }
//             }
//         }
//     }
//     //使用鼠标移动划线

// function mouseLine() {
//         for (var i = 0; i < balls.length; i++) {
//             if (Math.sqrt(Math.pow((balls[i].x - mouseX), 2) + Math.pow((balls[i].y - mouseY), 2)) < 80) {
//                 ctx.beginPath();
//                 ctx.moveTo(balls[i].x, balls[i].y);
//                 ctx.lineTo(mouseX, mouseY);
//                 ctx.strokeStyle = "white";
//                 ctx.globalAlpha = 0.8;
//                 ctx.stroke();
//             }
//         }
//     }
//     //随机函数

// function randomNum(m, n) {
//         return Math.floor(Math.random() * (n - m + 1) + m);
//     }
//     //随机颜色

// function randomColor() {
//     return "rgb(" + randomNum(0, 255) + "," + randomNum(0, 255) + "," + randomNum(0, 255) + ")";
// }


app5MarkCtx = app5Mark.getContext('2d');
app5Mark.width = 600;
app5Mark.height = 600;
var imageFill = new Image();
imageFill.src = 'https://s2.ax1x.com/2020/02/03/1UiL4g.md.jpg'
imageFill.onload = function(){
  app5MarkCtx.drawImage(this,0,0,600,600)
}
app5MarkMouseDownTag = 0;
app5Mark.addEventListener('mousedown', function(e){
  app5MarkMouseDownTag = 1
  app5MarkCtx.clearRect(e.offsetX - 30, e.offsetY - 30, 60, 60)
})
app5Mark.addEventListener('mousemove', function(e){
  if(app5MarkMouseDownTag == 1)
    app5MarkCtx.clearRect(e.offsetX - 60, e.offsetY - 60, 120, 120)
})
app5Mark.addEventListener('mouseup', function(e){
  app5MarkMouseDownTag = 0
})
