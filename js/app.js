$(function(){
    $('#recipeCarousel').carousel({
        interval :2000
      })
      
      $('.carousel .carousel-item').each(function(){
          var next = $(this).next();
          if (!next.length) {
          next = $(this).siblings(':first');
          }
          next.children(':first-child').clone().appendTo($(this));
          
          for (var i=0;i<10;i++) {
              next=next.next();
              if (!next.length) {
                  next = $(this).siblings(':first');
                }
              
              next.children(':first-child').clone().appendTo($(this));
            }
      });
});

document.querySelector( ".navbar-toggler" )
  .addEventListener( "click", function() {
    this.classList.toggle( "active" );
});