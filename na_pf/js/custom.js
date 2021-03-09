var slides = $('.slides'),
    threshold = 150,
    slideWidth = 500,
    dragStart, 
    dragEnd;

    slides.on('mousedown', function(){
      if (slides.hasClass('transition')) return;
      dragStart = event.pageX;
      $(this).on('mousemove', function(){
        dragEnd = event.pageX;
        $(this).css('transform','translateX('+ dragPos() +'px)')
      })
      $(document).on('mouseup', function(){
        if (dragPos() > threshold) { return shiftSlide(1) }
        if (dragPos() < -threshold) { return shiftSlide(-1) }
        shiftSlide(0);
      })
    });
    
    function dragPos() {
      return dragEnd - dragStart;
    }
    
    function shiftSlide(direction) {
      if (slides.hasClass('transition')) return;
      dragEnd = dragStart;
      $(document).off('mouseup')
      slides.off('mousemove')
              .addClass('transition')
              .css('transform','translateX(' + (direction * slideWidth) + 'px)'); 
      setTimeout(function(){
        if (direction === 1) {
          $('.slide:first').before($('.slide:last'));
        } else if (direction === -1) {
          $('.slide:last').after($('.slide:first'));
        }
        slides.removeClass('transition')
        slides.css('transform','translateX(0px)'); 
      },700)
    }