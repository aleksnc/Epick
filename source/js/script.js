$( document ).ready(function(){

   $("#singleOvl").owlCarousel({
      items: 1,
      loop: true,
      center: true
   });

   $("#otherOvl").owlCarousel({
      items: 3,
      loop: true,
      responsive:{ //Адаптация в зависимости от разрешения экрана
         0:{
            items: 1,
         },
         768:{
            items:2
         },
         1200:{
            items:3
         }
      }
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
