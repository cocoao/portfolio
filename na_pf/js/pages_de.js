$(function(){

  // leflet open book
  $(window).resize(function(){
    const windWid = $(window).width();
    if(windWid > 1200){
      document.location.reload()
      flipB() 
    }
    if(windWid <= 1200 & windWid > 600){
      document.location.reload()
      flipB()
    }
    if(windWid <= 600 & windWid > 480){
      document.location.reload()
      flipB()
    }
    if(windWid <= 480){
      document.location.reload()
      $('.modal').off();
    }
  });
  flipB()
  const windWid = $(window).width();
  if(windWid <= 480){
    $('.cover.leaflet-1').off();
    $('.cover.leaflet-2').off();
  }


  function flipB(){
  $('.cover.leaflet-1').click(function(){
    $(".modal.leaflet-1").css({'display':'block'});
    const windWid = $(window).width();
    if(windWid > 1200){
    loadApp('.flipbook','600','630');
    }
    if(windWid <= 1200 & windWid > 600){
      loadApp('.flipbook','400','420');
      }
    if(windWid <= 600 & windWid > 480){
      loadApp('.flipbook','300','315');
      }
    if(windWid <= 480){
      loadApp('.flipbook','200','210');
      }
  });


  $('.cover.leaflet-2').click(function(){
    $(".modal.leaflet-2").css({'display':'block'});
    const windWid = $(window).width();
    if(windWid > 1200){
    loadApp('.flipbook-2','600','630');
    }
    if(windWid <= 1200 & windWid > 600){
      loadApp('.flipbook-2','400','420');
      }
    if(windWid <= 600 & windWid > 480){
      loadApp('.flipbook-2','300','315');
      }
    if(windWid <= 480){
      loadApp('.flipbook-2','200','210');
      }
  });
  }

  $('.close').click(function(){
    $(".modal").css({'display':'none'});
    document.location.reload()
  });


  function loadApp(book,b_wid,b_hei) {
    $(book).turn({
      width:b_wid,
      height:b_hei,
      elevation: 50,
      gradients: true,
      autoCenter: true
    });
    }
  yepnope({
    test : Modernizr.csstransforms,
    yep: ['/na_pf/plugin/turn.js'],
    nope: ['/na_pf/plugin/turn.html4.min.js'],
    complete: loadApp
  });

  // cardnews slider
  $(window).resize(function(){
    var frameHeight = $('#deSlider ul li').width();
    $('#deSlider ul li').css({height:frameHeight});
  
    var slideCount = $('#deSlider ul li').length;
    var slideWidth = $('#deSlider ul li').width();
    var slideHeight = $('#deSlider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;
    
    $('#deSlider').css({ width: slideWidth, height: slideHeight });
    $('#deSlider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
  });

  var frameHeight = $('#deSlider ul li').width();
  $('#deSlider ul li').css({height:frameHeight});

	var slideCount = $('#deSlider ul li').length;
	var slideWidth = $('#deSlider ul li').width();
	var slideHeight = $('#deSlider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;
	
	$('#deSlider').css({ width: slideWidth, height: slideHeight });
	$('#deSlider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
    $('#deSlider ul li:last-child').prependTo('#deSlider ul');

    function moveLeft() {
        $('#deSlider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#deSlider ul li:last-child').prependTo('#deSlider ul');
            $('#deSlider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#deSlider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#deSlider ul li:first-child').appendTo('#deSlider ul');
            $('#deSlider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });
});

  // fullpage
  $(document).ready(function(){
    $('#fullpage').fullpage({
      autoScrolling:true,
      scrollHorizontally:true,
      bigSectionsDestination: top,
      anchors:['1st', '2st', '3st', '4st'],
      afterLoad:function(anchorLink, index){
        if(anchorLink == '4st'){
          zoomEffect('none');
        } 

        else{
          zoomEffect('default');
            $('.magnify').remove();
        }
        
      }
    });
  });

  // pop zoom effect
  function zoomEffect(isNone){
  var winWidth = $(window).width();
  if(winWidth <= 750){
    var magnifierSize = 150;
  } else {
  var magnifierSize = 250;
  }
  var magnification = 2;
  var isHover = false;

  function magnifier() {

  this.magnifyImg = function(ptr, magnification, magnifierSize) {
    var $pointer;
    if (typeof ptr == "string") {
      $pointer = $(ptr);
    } else if (typeof ptr == "object") {
      $pointer = ptr;
    }
    
    if(!($pointer.is('img'))){
      alert('Object must be image.');
      return false;
    }

    magnification = +(magnification);

    $pointer.hover(function() {
        $(this).css('cursor', isNone);
        $('.magnify').show();

        var width = $(this).width();
        var height = $(this).height();
        var src = $(this).attr('src');
        var imagePos = $(this).offset();
        var image = $(this);

        if (magnifierSize == undefined) {
          magnifierSize = '150px';
        }

        $('.magnify').css({
          'background-size': width * magnification + 'px ' + height * magnification + "px",
          'background-image': 'url("' + src + '")',
          'width': magnifierSize,
          'height': magnifierSize
        });

        //Setting a few more...
        var magnifyOffset = +($('.magnify').width() / 2);
        var rightSide = +(imagePos.left + $(this).width());
        var bottomSide = +(imagePos.top + $(this).height());

        $(document).mousemove(function(e) {
          if (e.pageX < +(imagePos.left - magnifyOffset / 6) || e.pageX > +(rightSide + magnifyOffset / 6) || e.pageY < +(imagePos.top - magnifyOffset / 6) || e.pageY > +(bottomSide + magnifyOffset / 6)) {
            $('.magnify').hide();
            $(document).unbind('mousemove');
          }
          var backgroundPos = "" - ((e.pageX - imagePos.left) * magnification - magnifyOffset) + "px " + -((e.pageY - imagePos.top) * magnification - magnifyOffset) + "px";
          $('.magnify').css({
            'left': e.pageX - magnifyOffset,
            'top': e.pageY - magnifyOffset,
            'background-position': backgroundPos
          });
        });

      }, function() {

    });
  };

  this.init = function() {
    $('.pop').prepend('<div class="magnify"></div>');
  }

  return this.init();
}

var magnify = new magnifier();
magnify.magnifyImg('img', magnification, magnifierSize);

};

