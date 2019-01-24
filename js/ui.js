$(document).ready(function(){
   $('.spesialist-slider').slick({
      dots: true,
      infinite: true,
      slidesToShow: 4,
      responsive: [
         {
           breakpoint: 1024,
           settings: {
             slidesToShow: 3,
             slidesToScroll: 1,
             infinite: true,
             dots: true
           }
         },
         {
           breakpoint: 820,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 1
           }
         },
         {
           breakpoint: 540,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1
           }
         }  
      ]     
   });


   $('.feedback-slider').slick({
      dots: false,
      infinite: true,
      slidesToShow: 1,
   });
 });


 $(document).on('click', '.slick-slide', function(){
    if($('body').width() > 1020){
      var id_modal = $(this).find('.spesialist-info').attr('data-target');
      $(id_modal).modal('toggle');
    }
    
});








$(document).on('click', '.btn-modal-close', function(){
   var id_modal = $(this).parent().parent().parent().attr('id');
  $('#'+id_modal).modal('hide')
});
$(document).on('click', '.menu-collapse-button', function(){
   $('.navbar-right-left').toggleClass('open');
   $('.shadow').toggleClass('active');
});
$(document).on('click', '.shadow', function(){
   $('.navbar-right-left').removeClass('open');
   $('.shadow').removeClass('active');
});
$(document).on('click', '.form-register-more-arrow', function(){
   $('.register').addClass('more');
});