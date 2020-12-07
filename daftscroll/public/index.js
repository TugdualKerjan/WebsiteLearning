// ScrollOut({
//   targets: 'h2,h3,p'

// })

$(document).scroll(function() {
  var scroll = $(window).scrollTop();
  var amount = -160+(scroll*0.4);
  if(amount < 40) {
    $('.letter').css({left:amount+"px"});
  }
})