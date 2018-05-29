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
      $('.back-top').attr('style', 'opacity: 0.8')
    } else {
      $('.back-top').attr('style', 'opacity: 0')
    }
  })
  $('#send-email').submit(function (e) {
    var name = document.getElementById('contact-name'),
      email = document.getElementById('contact-email'),
      msg = document.getElementById('contact-msg')
    if (!name.value || !email.value || !msg.value) {
      alert('Please Enter the filed!')
    } else {
      $.ajax({
        url: "https://formspree.io/peichunzhou1006@gmail.com",
        method: "POST",
        data: $(this).serialize(),
        dataType: "json"
      });
      e.preventDefault()
    }
  })
})