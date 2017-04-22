$(document).ajaxComplete(function(){

  var $overlay = $("<div class='overlay'></div>");
  var $image = $("<img class='img'>");
  var $caption = $('<p></p>');
  var $arrowLeft = $("<a id='left' href='#'><img src='img/left.png'></a>");
  var $arrowRight = $("<a id='right' href='#'><img src='img/right.png'></a>");
  $('body').append($overlay);
  $overlay.append($image);
  $overlay.append($caption);
  $overlay.append($arrowLeft)
  $overlay.append($arrowRight);

  // SRC attribute array
  var imageArray = $('.gallery li img').map(function(){
    return $(this).attr('src');
  }).get();
  //caption array
  var captionArray = $('.gallery li p').map(function(){
    return $(this).text();
  }).get();

  var imageLength = imageArray.length;

  //when clicked on image
  $('.gallery img').on('click',function(){
    //get clicked img src
      var $src = $(this).attr('src');
    //get caption text
      var text = $(this).siblings('p').text();
    //set src and caption for overlay current image
      $image.attr('src',$src);
      $caption.text(text);
      $overlay.show();
    //get image position from set of elements
      var allImages = $('.gallery li img');
    //global position variable
      getPosition = $(allImages).index(this);
      console.log(getPosition);
  });

  //when clicked on image appended to overlay
  $('.overlay .img').click(function() {
    $($overlay).hide();
  });

  //move right through image array
  var right = function () {
      $image.fadeOut('slow',function() {
      getPosition += 1;
      $image.attr('src',imageArray[getPosition]);
      $caption.text(captionArray[getPosition]);
      if (getPosition === imageLength) {
        getPosition = imageLength -1;
      }
      console.log(getPosition);

    }).fadeIn(500);
  }

  //move left through image array
  var left = function () {
      $image.fadeOut('slow',function() {
      getPosition -= 1;
      $image.attr('src',imageArray[getPosition]);
      $caption.text(captionArray[getPosition]);
      if (getPosition <= 0) {
        getPosition = 0;
      }
      console.log(getPosition);
    }).fadeIn(500);
  }

  $('#left').on('click',function() {
    left();
  });

  $('#right').on('click',function() {
    right();
  });

  //move through image array with left and right keyboard keys
  $(document).on( "keydown", function( e ) {
     var code = e.keyCode;
       if( code == 39 ) {
            right();
      }
       if( code == 37 ) {
            left();
       }
  });

});
