function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;
        // Alternatively you could use:
        // (new Image()).src = this;
    });
}

// Usage:
preload([
    'images/chuck_1.jpg',
    'images/chuck_3.jpg',
    'images/chuck_4.jpg',
    'images/chuck_5.jpg',
    'images/chuck_6.jpg',
    'images/chuck_7.jpg',
    'images/chuck_8.jpg',
    'images/chuck_9.jpg'
]);
/*
  Cycle through a series of background images
*/
function cycle(){
  
  var images = [
    'images/chuck_1.jpg',
    'images/chuck_3.jpg',
    'images/chuck_4.jpg',
    'images/chuck_5.jpg',
    'images/chuck_6.jpg',
    'images/chuck_7.jpg',
    'images/chuck_8.jpg',
    'images/chuck_9.jpg' 
  ];
  var i = 0;
  
  setInterval(function(){
      $('.bgImageContainer').css('background-image', function() {
          if (i >= images.length) {
              i=0;
          }
          return 'url(' + images[i++] + ')'; 
      });
  }, 5000);

}
cycle();


var timerId = countdown(new Date(2015, 2, 22, 17),
    function(ts){
      $('.countdown-timer').html($.parseHTML(ts.toHTML("strong")));  
    },
    countdown.DAYS|countdown.HOURS|countdown.MINUTES|countdown.SECONDS);