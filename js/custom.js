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

      $('#pics img').on('click',function(){
        var src = $(this).attr('src');
        var img = '<img src="' + src + '" class="img-responsive"/>';
        $('#picsModal').modal();
        $('#picsModal').on('shown.bs.modal', function(){
            $('#picsModal .modal-body').html(img);
        });
        $('#picsModal').on('hidden.bs.modal', function(){
            $('#picsModal .modal-body').html('');
        });
      });

      $('#picsModal').click(function(){
        $('.modal').modal('hide');
      });

});

$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});