$(document).ready(function () {
  $(".navbar > a").click(function (e) {
    e.preventDefault();
    goToDiv(this.id);
  });
  navbarScroll();
  mobileVersion();
  $(window).resize(mobileVersion);
});

function navbarScroll(){
  $(".content-container").scroll(function () {
    if ($(this).scrollTop() > 0) {
      $(".header").css(
        'top', '-165px')
      $(".navbar").css(
        'top', '-165px'
      )
      $(".content-container").css(
        'margin-top', '30px'
      )
    } else if ($(this).scrollTop() === 0) {
      $(".header").css(
        'top', '0px'
      )
      $(".navbar").css(
        'top', '0px'
      )
      $(".content-container").css(
        'margin-top', '195px'
      )
    }
  });
}

function goToDiv(id) {
  let idToScroll = id.replace("Link", "");
  $(".navbar > a").removeClass("active");
  $("#" + id).addClass("active");
  $(".content-container").animate(
    {
      scrollTop: $("#" + idToScroll).offset().top,
    },
    "slow"
  );
}

function mobileVersion(){
  if($(window).width() <= 996){
    $('.navbar').css(
      'display', 'none'
    );
    $('.mobile-navbar').css(
      'display', 'flex'
    );
  }
  else{
    $('.navbar').css(
      'display', 'flex'
    );
    $('.mobile-navbar').css(
      'display', 'none'
    );
  }
}
