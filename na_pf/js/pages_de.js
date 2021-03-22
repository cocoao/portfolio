$(function(){
  
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

  // cardnews slider
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

  $(document).ready(function(){
    $('#fullpage').fullpage({
      autoScrolling:true,
      scrollHorizontally:true,
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

