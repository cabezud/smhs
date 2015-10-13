$(function() {

      //add smooth scrolling
      $("a[href^='#']").on('click', function(e) {
        e.preventDefault();
        var target_offset = $(this.hash).offset() ? $(this.hash).offset().top : 0;
        //change this number to create the additional off set        
        var customoffset = 50;
        $('html, body').animate({scrollTop:target_offset - customoffset}, 300);
      });

      //add scrollspy to nav
      $('body').scrollspy({ 
        target: '#mainLinks',
        offset: 200
      });

});