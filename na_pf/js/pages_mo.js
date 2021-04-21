// filter effect
$(function(){

  $(document).ready(function() { 
  let filterSelect = document.location.href.split("#")[1];

  $('.moImgBoxes').isotope({ filter: filterSelect });
  $('.button-group button').removeClass('active');
  $('button' + filterSelect).addClass('active');
  });

  $('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $('.moImgBoxes').isotope({ filter: filterValue });
    $('.moBtns button').removeClass('active');
    $(this).addClass('active');
  });
  $('.moBtns button').eq(0).trigger('click');

  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
  });

  $('.moImgBoxes').imagesLoaded(function(){
    $('.moImgBoxes').masonry({
        itemSelector: '.moImgBox',
        columnWidth: '.box-sizer',
        percentPosition: true
    });
  });
});