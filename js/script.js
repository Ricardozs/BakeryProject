$(document).ready(function () {
  if($(".content-container").prop('scrollHeight') < $(".content-container").outerHeight()){
    $(".content-container").removeClass("overflow");
  }
  $(".navbar > a").click(function (e) {
    e.preventDefault();
    goToDiv(this.id);
  });
  console.log($(".content-container").outerHeight());
  console.log($(".content-container").prop('scrollHeight'))
  $(".content-container").scroll(function () {
    if ($(this).scrollTop() > 0) {
      $(".header").animate({
        top: '-165px'
      })
      $(".navbar").animate({
        top: '-165px'
      })
      $(".content-container").animate({
        marginTop: '30px'
      })
    } else if ($(this).scrollTop() === 0) {
      console.log($(this).scrollTop());
      $(".header").animate({
        top: '0px'
      })
      $(".navbar").animate({
        top: '0px'
      })
      $(".content-container").animate({
        marginTop: '130px'
      })
    }
  });
});

function goToDiv(id) {
  let idToScroll = id.replace("Link", "");
  $(".navbar > a").removeClass("active");
  $("#" + id).addClass("active");
  $("html,body").animate(
    {
      scrollTop: $("#" + idToScroll).offset().top,
    },
    "slow"
  );
}
