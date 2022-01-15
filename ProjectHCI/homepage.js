$(document).ready(function(){
    $('.next').on('click', function(){
      var curr = $('.active');
      var img = curr.next();
  
      if(img.length){
        curr.removeClass('active').css('z-index', -1);
        img.addClass('active').css('z-index', 1);
      }
    });
  
    $('.prev').on('click', function(){
      var curr = $('.active');
      var img = curr.prev();
  
      if(img.length){
        curr.removeClass('active').css('z-index', -1);
        img.addClass('active').css('z-index', 1);
      }
    });
  });