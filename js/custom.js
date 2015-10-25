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

      $('#tickets form').addClass('form-horizontal');
      $('#tickets form .ss-form-entry').addClass('form-group');
      $('#tickets form .ss-text label').addClass('col-sm-3 control-label');
      $('#tickets form .ss-text input').wrap( "<div class='col-sm-9'></div>" );
      $('#tickets form .ss-text input').addClass('form-control');
      $('#tickets form .ss-radio').addClass('col-sm-9 col-sm-offset-3')
      //$('#tickets form input[value="Submit"]').addClass('col-sm-9 col-sm-offset-3')
      $('#tickets form input[value="Submit"]').val("Continue to PayPal ($80) >>") ;
      //$('#tickets #entry_1985643611').removeAttr('style');//.css({'backgroun-image':'none','color':'green'});
      //$('#tickets #entry_1985643611').css({'background-image':'none','color':'green'});
      //$('#tickets form').css({'color':'green'});

});

$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});