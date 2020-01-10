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