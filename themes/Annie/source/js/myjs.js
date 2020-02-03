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

