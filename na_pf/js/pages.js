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
  
  $(".mobileNav").click(function(){
    $(this).toggleClass("on");
    if($(this).hasClass("on")){
      $(this).find("i").attr("class","fa fa-times");
      $(this).next("ul").slideDown("fast");
    
    } else {
      $(this).find("i").attr("class","fa fa-bars");
      $(this).next("ul").slideUp("fast");
  
    }
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
  $('.rightImgBox.plan').on('mouseover',function(){
    const imgHeight = $(this).find(".imgBox img").height();
    const frameHeight = $(this).find(".imgBox").height();
    $(this).find(".imgBox img").stop().animate({top:-imgHeight + frameHeight}, 1000);
  });
  $('.rightImgBox').on('mouseout',function(){
    $(".rightImgBox .imgBox img").stop().animate({top:0}, 1000);
  });
});

$(function(){
  var winWidth = $(window).width();
  if(winWidth<1200){
  $('.leftImgBox .imgBox').css({'height':winWidth * 0.295});
  $('.leftImgM .imgBox').css({'width':winWidth * 0.09, 'height':winWidth * 0.185})
  };
  if(winWidth<750){
  $('.leftImgBox .imgBox').css({'height':winWidth * 0.315});
  }
  if(winWidth<600){
    $('.leftImgBox .imgBox').css({'height':winWidth * 0.33});
  }
  if(winWidth<=480){
    $('.leftImgBox .imgBox').css({'height':'53%'});
    $('.leftImgM .imgBox').css({'width':'90%', 'height':'33%'})

  }

  $(window).resize(function(){
    var winWidth = $(window).width();
    if(winWidth<1200){
    $('.leftImgBox .imgBox').css({'height':winWidth * 0.295});
    $('.rightImgBox.plan .imgBox').css({'height':winWidth * 0.3});
    $('.leftImgM .imgBox').css({'width':winWidth * 0.09, 'height':winWidth * 0.185})
    }
    if(winWidth<750){
      $('.leftImgBox .imgBox').css({'height':winWidth * 0.315});
    }
    if(winWidth<600){
      $('.leftImgBox .imgBox').css({'height':winWidth * 0.33});
    }
    if(winWidth<=480){
      $('.leftImgBox .imgBox').css({'height':'53%'});
      $('.leftImgM .imgBox').css({'width':'90%', 'height':'33%'})
    }
  });
});