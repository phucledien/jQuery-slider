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

function prev() {
  newSlide = sliderInt - 1;
  showSlide(newSlide);
}

function next() {
  newSlide = sliderInt + 1;
  showSlide(newSlide);
}

function stopLoop() {
  window.clearInterval(loop);
}

function showSlide(id) {
  stopLoop();
  if (id > count) {
    id = 1;
  } else if (id < 1) {
    id = count;
  }
  $('#slider').find('img').fadeOut(300);
  //$('#slider > img').fadeOut(300);
  $('#slider').find('img#' + id).fadeIn(300);
  //$('#slider > img#' + sliderNext).fadeIn(300);

  sliderInt = id;
  sliderNext = id + 1;
  startSlider();
}

$('#slider > img').hover(
  function() {
    stopLoop();
    $('#slider').next().text('Slide stopped!');
  },
  function() {
    startSlider();
    $('#slider').next().text('Slide started!');
  }
);
