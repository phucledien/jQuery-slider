sliderInt = 1;
sliderNext = 2;

$(document).ready(function() {
  $('#slider').find('#1').fadeIn(300);
  //$('#slider > img#1').fadeIn(300);
  startSlider();
});

function startSlider() {
  count = $('#slider').find('img').length;
  //count = $('#slider > img').length;

  loop = setInterval(function() {
    if (sliderNext > count) {
      sliderNext = 1;
      sliderInt = 1;
    }
    $('#slider').find('img').fadeOut(300);
    //$('#slider > img').fadeOut(300);
    $('#slider').find('img#' + sliderNext).fadeIn(300);
    //$('#slider > img#' + sliderNext).fadeIn(300);

    sliderInt = sliderNext;
    sliderNext = sliderNext + 1;
  }, 3000);
}
