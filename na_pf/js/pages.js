$(function(){
  var loca = $(location).attr('href').split('#')[1];
  var clickTop = $('.' + loca).offset().top;
  $('html, body').animate({scrollTop:clickTop - 100},800);
});


// about page
$(function(){
  $(window).scroll(function(){
    if($('.skillSection').hasClass('aos-animate')){
      for(let i=0; i<$('.roundBox').length; i++){
      const percent = $('.roundBox').eq(i).find('.percentTxt').text();
      $('.roundBox').eq(i).find('.hover').css({'display':'flex'});
      $('.roundBox').eq(i).find('.percentBg').animate({'width': percent,'opacity':'1'}, 1000)
      }
    }
  });
    

  var winWidth = $(window).width();
  $('.ab_content_in .text').css({'height':winWidth * 0.22})
  $('.ab_content_in .img img').css({'top':winWidth * 0.22});
  
  $(window).resize(function(){
    var winWidth = $(window).width();
    $('.ab_content_in .text').css({'height':winWidth * 0.225});
    $('.ab_content_in .img img').css({'top':winWidth * 0.22});
  });
  
  AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
  });
  AOS.init();
  
  if(winWidth <= 480){
  AOS.init({
      disable: 'mobile'
  });
  };
  
  AOS.init({
    once: true
 })
 
});



// publishing page
$(document).ready(function(){
  $('#fullpage').fullpage({
    autoScrolling:true,
    scrollHorizontally:true
  });
});



$(function(){
  $('.rightImgBox').on('mouseover',function(){
    const imgHeight = $(this).find(".imgBox img").height();
    const frameHeight = $(this).find(".imgBox").height();
    $(this).find(".imgBox img").stop().animate({top:-imgHeight + frameHeight}, 2500);
  });
  $('.rightImgBox').on('mouseout',function(){
    $(".rightImgBox .imgBox img").stop().animate({top:0}, 2500);
  });
});


$(function(){
  $('.leftImgM').on('mouseover',function(){
    const imgHeight = $(this).find(".imgBox img").height();
    const frameHeight = $(this).find(".imgBox").height();
    $(this).find(".imgBox img").stop().animate({top:-imgHeight + frameHeight}, 800);
  });
  $('.leftImgM').on('mouseout',function(){
    $(".leftImgM .imgBox img").stop().animate({top:0}, 800);
  });
});


$(function(){
  $('.leftImgBox.plan').on('mouseover',function(){
    const imgHeight = $(this).find(".imgBox img").height();
    const frameHeight = $(this).find(".imgBox").height();
    $(this).find(".imgBox img").stop().animate({top:-imgHeight + frameHeight}, 1000);
  });
  $('.leftImgBox.plan').on('mouseout',function(){
    $(".leftImgBox .imgBox img").stop().animate({top:0}, 1000);
  });
});


// more page
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

