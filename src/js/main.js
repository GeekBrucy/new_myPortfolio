$(document).ready(function () {
  var contactBtn = $('.contact-detail button')
  var backTop = $('.back-top')
  backTop.on('click', function () {
    $('html, body').animate({
      scrollTop: $('.pg-header').offset().top
    }, 1000);
  })
  contactBtn.on('click', function () {
    // console.log($(this).next())
    $(this).next().show()
    $(this).hide()
  })
  $(window).scroll(function () {
    var pos = document.documentElement.scrollTop
    if (pos > 200) {
      $('.back-top').attr('style', 'visibility: visible')
      $('.back-top').attr('style', 'opacity: 1')
    } else {
      $('.back-top').attr('style', 'opacity: 0')
      $('.back-top').attr('style', 'visibility: hidden')
    }
  })
})