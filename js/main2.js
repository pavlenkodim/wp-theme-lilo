$(document).ready(function(){

  //Удаление активного элемента в рамках селектора
  function RemoveActive(a){
    a.each(function(){
      $(this).removeClass('active');
    });
  }

  Pace.on('done', function(){
    $('.pace').fadeOut(600);
    $('.loader').fadeOut(600);
    load();
  });

  /*function moveFollowPath(){
    var path = anime.path('#myPath');
    var easings = ['linear', 'easeInCubic', 'easeOutCubic', 'easeInOutCubic'];
    var motionPath = anime({
      targets: '.head__lighter',
      translateX: path('x'),
      translateY: path('y'),
      rotate: path('angle'),
      easing: function (el, i) {
        return easings[i];
      },
      duration: 10000,
      loop: true
    });
  }*/
  function load(){
    if($('.head').length>0){
      //moveFollowPath();
    }else{
      $('.footer').addClass('active');
      $('.header').addClass('active');
    }
    $(".menu__item").each(function() {
      $(this).addClass('distort');
    });

    const menuItems = document.querySelectorAll('.menu__item');
    let index = 0;
    const addActiveClass = () => {
      if (index >= menuItems.length) {
        clearInterval(interval);
        return;
      }
      menuItems[index].classList.add('active');
      index++;
    };
    const interval = setInterval(addActiveClass, 500);

    setTimeout(function(){
      const menuItems2 = document.querySelectorAll('.glitch');
      let currentIndex = 0;
      const activateMenuItem = () => {
        if (currentIndex >= menuItems2.length) {
          clearInterval(intervalId);
          return;
        }
        menuItems2[currentIndex].classList.remove('glitch');
        currentIndex++;
      };
      const intervalId = setInterval(activateMenuItem, 500);
    },1500);

    setTimeout(function(){
      $('.head').addClass('active');
    },300);

    setTimeout(function(){
      $('.head__path').addClass('active');
      $('.fullscreen').addClass('active');
    },1600);

    setTimeout(function(){
      $('.head').addClass('shown');


      $('.fullscreen__item--default .fullscreen__item--inner').addClass('active');
      $(".menu__item").each(function() {
        $(this).css("transition", ".4s linear");
        $(this).removeClass('distort');
      });
      $('.menu').addClass('active');
      $(".menu").mousemove(function(event){
         var containerOffset = $(this).offset();
         var mouseX = event.pageX - containerOffset.left;
         var mouseY = event.pageY - containerOffset.top;
         $(".menu__item").each(function() {
           var translateX = (mouseX / $(this).parent().width() - 0.5) * -30;
           var translateY = (mouseY / $(this).parent().height() - 0.5) * -30;
           $(this).css("transform", "translate(" + translateX + "px, " + translateY + "px)");
         });
          $(".head.shown").each(function(){
           var translateX = (mouseX / $(this).parent().width() - 0.5) * 15;
           var translateY = (mouseY / $(this).parent().height() - 0.5) * 15;
           $(this).css("transform", "translate(" + translateX + "px, " + translateY + "px) scale(1)");
         });

       });
       if($('.head').length>0){
         $('.footer').addClass('active');
         $('.header').addClass('active');
       }
    },2300);
  }

  function backgroundAnim(){
    $(".background__item path").each(function(){
      var rNum = Math.random().toFixed(2)*8;
        var x = parseInt(Math.random()*12);
        var y = parseInt(Math.random()*12);
        var scale= Math.random().toFixed(1) * (1.15 - 0.9) + 0.9;
        $(this).css({
          'transform': 'rotate('+rNum+'2deg) translate('+x+'px,'+y+'px) scale('+scale+')'
        });
    });
  }
  backgroundAnim();
  setInterval(function(){
    backgroundAnim();
  },3500);

  var bg;
  $(".menu__item").hover(function(){
    bg=$(this).data('bg');
    RemoveActive($('.fullscreen__item'));
    $('.fullscreen__item[data-bg="'+bg+'"]').addClass('active');
  },function(){
    RemoveActive($('.fullscreen__item'));
    $('.fullscreen__item[data-bg="default"]').addClass('active');
  });
  if($('.scroll').length>0){
    const scrollContainer = document.querySelector(".scroll");
    var left,move,block,windowWidth,blockRect,distance;
    block = document.querySelector('.gallery__wrapper .wrapper');
    if(scrollContainer){
      scrollContainer.addEventListener('wheel', (event) => {
        windowWidth = window.innerWidth;
        blockRect = block.getBoundingClientRect();
        distance = windowWidth - blockRect.right;
        left = $(".scroll .gallery__inner").css("left");
        event.preventDefault();
        move=(event.deltaY < 0 ? -350 : 350)*-1;
        if(parseInt(left) + move > 10){
          left=0;
          move=0;
        }
        console.log($(".gallery .gallery__inner").width() + parseInt(left) - $(".gallery__wrapper").width());
        if(0 > $(".gallery .gallery__inner").width() + parseInt(left) + move - $(".gallery__wrapper").width()){
          left=($(".gallery .gallery__inner").width() - $(".gallery__wrapper").width() + distance+4)*-1;
          move=0;
        }
        $(".scroll .gallery__inner").css("left",parseInt(left)+move+'px');
      });
      $(".scroll").on("touchstart", function(e){
        var startingY = e.originalEvent.touches[0].pageY;
        $(".scroll").on("touchmove", function(e) {
            currentY = e.originalEvent.touches[0].pageY;
            var delta = currentY - startingY;
            windowWidth = window.innerWidth;
            blockRect = block.getBoundingClientRect();
            distance = windowWidth - blockRect.right;
            left = $(".scroll .gallery__inner").css("left");
            event.preventDefault();

            move=(delta < 0 ? -350 : 350)*-1;
            if(parseInt(left) + move > 10){
              left=0;
              move=0;
            }
            console.log($(".gallery .gallery__inner").width() + parseInt(left) - $(".gallery__wrapper").width());
            if(0 > $(".gallery .gallery__inner").width() + parseInt(left) + move - $(".gallery__wrapper").width()){
              left=($(".gallery .gallery__inner").width() - $(".gallery__wrapper").width() + distance+4)*-1;
              move=0;
            }
            $(".scroll .gallery__inner").css("left",parseInt(left)+move+'px');
        });
      });
    }
  }
  if($('.gallery').length>0){

    setTimeout(function(){
      const menuItems3 = document.querySelectorAll('.gallery__col');
      let currentIndex2 = 0;
      const activateMenuItem2 = () => {
        if (currentIndex2 >= menuItems3.length) {
          clearInterval(intervalId2);
          return;
        }
        menuItems3[currentIndex2].classList.add('active');
        currentIndex2++;
      };
      const intervalId2 = setInterval(activateMenuItem2, 200);
    },300);
  }

  $(".detail__gallery--bottom img").hover(function(){
    RemoveActive($('.detail__gallery--top img'));
    $('.detail__gallery--top img[data-item="'+$(this).data('item')+'"]').addClass('active');
  });
});
