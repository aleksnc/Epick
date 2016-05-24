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
 /*  $(".fancybox").fancybox();

   $("#galery a").on("click", function(event){
      event.preventDefault();
      $(this).attr("href");
      $("#gallery-img img").attr('src', $(this).attr("href"));

   });*/
});
