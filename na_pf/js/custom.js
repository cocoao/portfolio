$(function(){
 
  $(".mobileNav").click(function(){
    $(this).toggleClass("on");
    if($(this).hasClass("on")){
      $(this).find("i").attr("class","fa fa-times");
      $(this).next("ul").slideDown("fast");
    } else {
      $(this).find("i").attr("class","fa fa-bars");
      $(this).next("ul").slideUp("fast");
      $(this).removeClass("on")
    }
  });

  const pathName = window.location.pathname;
  if(pathName.includes("about")){
    $('.nav ul li').removeClass('active');
    $('.nav ul li').eq(1).addClass('active');
  }
  if(pathName.includes("publishing")){
    $('.nav ul li').removeClass('active');
    $('.nav ul li').eq(2).addClass('active');
  }
  if(pathName.includes("design")){
    $('.nav ul li').removeClass('active');
    $('.nav ul li').eq(3).addClass('active');
  }
  if(pathName.includes("more")){
    $('.nav ul li').removeClass('active');
    $('.nav ul li').eq(4).addClass('active');
  }

  function moveSlide(){
    $(".slide:first-child").animate({'width':0},700);
    $(".slide:nth-child(2)").addClass('active');
    $(".slide:first-child i").animate({'opacity':'0'},300);
    $(".slide:nth-child(2)").animate({'width': '60%', 'left':0}, 500);
    $(".slide:nth-child(3)").animate({'width': '20%', 'left':'60%'}, 500);
    $(".slide:nth-child(4)").animate({'width': '10%', 'left':'80%'}, 500);
    // $('.slides .slide:last-child').animate({'animation':'slideLeft 0.1s 1'})

    setTimeout(function(){
      $(".slide:first-child").clone().appendTo('.slide-box');
      $(".slide:first-child").remove();
      $(".slide:nth-child(1)").css('width', '60%');
      $(".slide:first-child i").css('opacity','1');
      $(".slide:nth-child(2)").css('width','20%');
      $(".slide:nth-child(3)").css('width', '10%');
      $(".slide:nth-child(4)").css('width', '10%');
      $(".slide:nth-child(4)").css({'left':'90%','animation':'slideLeft 0.1s 1'});
      $(".slide:last-child").removeClass('active');

      className = $('.slide.active').attr('value');
      $('.contents').css({'display':'none'});
      $('.contents.' + className).css({'display':'flex'});
    }, 500)
  }

  function moveSlideRe(){
    $(".slide:last-child").animate({'width':'0','left':'100%'},700);
    $(".slide:last-child").addClass('active');
    $(".slide:first-child i").animate({'opacity':'0'},300);
    $(".slide:nth-child(4)").animate({'width': '60%', 'left':0}, 500);
    $(".slide:nth-child(1)").animate({'width': '20%', 'left':'60%'}, 500);
    $(".slide:nth-child(2)").animate({'width': '10%', 'left':'80%'}, 500);
    $(".slide:nth-child(3)").animate({'width': '10%', 'left':'90%'}, 500);
    

    setTimeout(function(){
      $(".slide:last-child").clone().prependTo('.slide-box');
      $(".slide:last-child").remove();
      $(".slide:nth-child(1)").css('width', '0');
      $(".slide:nth-child(1)").css({'width': '60%','left':'0','animation':'slideLeft 0.1s 1'});
      $(".slide:first-child i").css('opacity','1');
      $(".slide:nth-child(2)").css('width','20%');
      $(".slide:nth-child(3)").css('width', '10%');
      $(".slide:nth-child(4)").css('width', '10%');
      $(".slide:nth-child(4)").css('left','90%');
      $(".slide:nth-child(2)").removeClass('active');

      className = $('.slide.active').attr('value');
      $('.contents').css({'display':'none'});
      $('.contents.' + className).css({'display':'flex'});
    }, 500)
  }

  winWidth = $(window).width();
  if(winWidth <= 480){
    function moveSlide(){
      $(".slide:first-child").animate({'width':0},700);
      $(".slide:nth-child(2)").addClass('active');
      $(".slide:first-child i").animate({'opacity':'0'},300);
      $(".slide:nth-child(2)").animate({'width': '100%', 'left':'0'}, 500);
      $(".slide:nth-child(3)").animate({'width': '100%', 'left':'100%'}, 500);
      $(".slide:nth-child(4)").animate({'width': '100%', 'left':'200%'}, 500);
      // $('.slides .slide:last-child').animate({'animation':'slideLeft 0.1s 1'})
  
      setTimeout(function(){
        $(".slide:first-child").clone().appendTo('.slide-box');
        $(".slide:first-child").remove();
        $(".slide:nth-child(1)").css('width', '100%');
        $(".slide:first-child i").css('opacity','1');
        $(".slide:nth-child(2)").css('width','100%');
        $(".slide:nth-child(3)").css('width', '100%');
        $(".slide:nth-child(4)").css('width', '100%');
        $(".slide:nth-child(4)").css({'left':'300%'});
        $(".slide:last-child").removeClass('active');
  
        className = $('.slide.active').attr('value');
        $('.contents').css({'display':'none'});
        $('.contents.' + className).css({'display':'flex'});
      }, 500)
    }

    function moveSlideRe(){
      $(".slide:last-child").animate({'width':'0','left':'100%'},700);
      $(".slide:last-child").addClass('active');
      $(".slide:first-child i").animate({'opacity':'0'},300);
      $(".slide:nth-child(4)").animate({'width': '100%', 'left':0}, 500);
      $(".slide:nth-child(1)").animate({'width': '100%', 'left':'100%'}, 500);
      $(".slide:nth-child(2)").animate({'width': '100%', 'left':'200%'}, 500);
      $(".slide:nth-child(3)").animate({'width': '100%', 'left':'300%'}, 500);
      
  
      setTimeout(function(){
        $(".slide:last-child").clone().prependTo('.slide-box');
        $(".slide:last-child").remove();
        $(".slide:nth-child(1)").css('width', '0');
        $(".slide:nth-child(1)").css({'width': '100%','left':'0','animation':'slideLeft 0.1s 1'});
        $(".slide:first-child i").css('opacity','1');
        $(".slide:nth-child(2)").css('width','100%');
        $(".slide:nth-child(3)").css('width', '100%');
        $(".slide:nth-child(4)").css('width', '100%');
        $(".slide:nth-child(4)").css('left','300%');
        $(".slide:nth-child(2)").removeClass('active');
  
        className = $('.slide.active').attr('value');
        $('.contents').css({'display':'none'});
        $('.contents.' + className).css({'display':'flex'});
      }, 500)
    }
  }

  $(function(){
	setInterval(function () {
    moveSlide()
	}, 5000);
  });

  $(".next").click(function(){
    moveSlide();
  });
  $(".prev").click(function(){
    moveSlideRe();
  });
});
