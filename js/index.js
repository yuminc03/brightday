function openDoor(field) {
  var y = $(field).find(".thumb");
  var x = y.attr("class");
  if (y.hasClass("thumbOpened")) {
      y.removeClass("thumbOpened");
  }
  else {
      $(".thumb").removeClass("thumbOpened");
      y.addClass("thumbOpened")
    $('.perspective').fadeOut(1000).addClass('thumbAnimate');
  } 
  setTimeout(function (){
      otherPage();
  }, 3000);
} 

function otherPage(){
  location.href = "hello.html";
}

$(  function() {
  var letters = $('.jump').text().split('');
  var spans = '<span>' + letters.join('</span><span>') + '</span>';
  $('.jump').html(spans);

  var currentSpan = $('.jump span:first');

  setInterval(function() {

    // check if we grabbed the wrong one
    if(currentSpan.length === 0) {
      currentSpan = $('.jump span:first');
    }

    currentSpan.addClass('up').on('transitionend',function(){
      $(this).removeClass('up');
    });

    currentSpan = currentSpan.next();

  }, 50);

});
