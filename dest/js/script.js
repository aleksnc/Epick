
$( document ).ready(function(){
   $('#silck_for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: '#silck_nav'
   });
   $('#silck_nav').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: '#silck_for',
      dots: true,
      centerMode: true,
      arrows: false,
      focusOnSelect: true

   });

   $('#review').slick({
      slidesToShow: 1,
      arrows: false

   });
});


function burgerToggl(){
$('#nav-display').toggleClass('nav-display--show');
}

function restSwitch_off(){
   $('#restTop_1').toggleClass('rest-tabs--switch-width', false);
   $('#restBottom_1').toggleClass('rest-tabs--switch-width', false);
}


function restSwitch_on(){
   $('#restTop_1').toggleClass('rest-tabs--switch-width', true);
   $('#restBottom_1').toggleClass('rest-tabs--switch-width', true);
}
