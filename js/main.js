$(document).ready(function () {
  const TITLES = [
    "Lilo",
    "Платформы",
    "Наша сеть",
    "Контент всегда в топе",
    "Стример получает",
    "Размещение рекламы",
    "Форматы",
    "Форматы",
    "Форматы",
    "Форматы",
    "Преимущества работы с Lilo",
    "Что нужно для запуска?",
    "Запуск",
  ];

  // remove logo in head
  function hideHeader() {
    let activeSlide;

    $(".section").each(function () {
      if ($(this).context.className.includes("active")) {
        activeSlide = $(this).context;
      }
    });

    switch (activeSlide.attributes["data-slide"].value) {
      case "1":
        $(".logo__wrapper-unstable").css({ opacity: 0 });
        break;
      case "13":
        $(".logo__wrapper-unstable").css({ opacity: 0 });
        break;
      default:
        $(".logo__wrapper-unstable").css({ opacity: 1 });
        break;
    }

    chengeTitle(+activeSlide.attributes["data-slide"].value);
  }
  hideHeader();

  // Chenge title on slide
  function chengeTitle(active) {
    let title = $(".title__head")[0];
    title.textContent = TITLES[active - 1];
  }

  //Удаление активного элемента в рамках селектора
  function RemoveActive(a) {
    a.each(function () {
      $(this).removeClass("active");
    });
  }
  if ($(".loader").length > 0) {
    Pace.on("done", function () {
      $(".pace").fadeOut(600);
      $(".loader").fadeOut(600);
      load();
    });
  }

  function getBrowserInfo() {
    const userAgent = window.navigator.userAgent;
    let browserName;
    let browserVersion;
    let browserUpTo;
    if (userAgent.indexOf("Chrome") !== -1) {
      browserName = "Google Chrome";
      browserUpTo = "88.0.4324";
      browserVersion = userAgent
        .substring(userAgent.indexOf("Chrome") + 7)
        .split(" ")[0];
    } else if (userAgent.indexOf("Safari") !== -1) {
      browserName = "Safari";
      browserUpTo = "15";
      browserVersion = userAgent
        .substring(userAgent.indexOf("Version/") + 8)
        .split(" ")[0];
    }
    return {
      name: browserName,
      version: browserVersion,
      upTo: browserUpTo,
    };
  }
  const browserInfo = getBrowserInfo();
  var support1 = CSS.supports("aspect-ratio: 1 / 1"),
    support2 = CSS.supports("backdrop-filter:blur(1vw)"),
    support3 = CSS.supports("-webkit-backdrop-filter:blur(1vw)");
  if (support1 !== true || (support2 !== true && support3 !== true)) {
    $("body").append(
      '<div class="browser"><div class="browser__inner"><h3>Предупреждение</h3><p>Вы используете старую версию браузера <span class="browser__name"></span>. Для корректного отображения необходимо обновить браузер <span class="browser__name"></span> до версии <span class="browser__update-to"></span> и выше.</p></div></div><style type="text/css">.browser{position:fixed;z-index:999999;left:0;top:0;width:100%;height:100%;background:rgba(0,0,0,.3);opacity:0;transition:.4s}.browser__inner{width:35vw;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);display:-webkit-flex;display:-ms-flex;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:2vw;background:#131924}.browser svg{position:absolute;right:1vw;top:1vw;width:1.4vw;height:1.5vw;cursor:pointer}.browser.active{opacity:1}.browser__inner h3{color:#fff;font-size:4vh;font-style:normal;font-weight:700;line-height:normal;letter-spacing:.08vw;margin-bottom:2.5vh;margin-top:0}.browser__inner p{color:#fff;font-size:1.9vh;font-weight:350;letter-spacing:.04vw;line-height:2.3vh}.browser__inner a,.browser__inner a:hover{color:#fff;text-decoration:underline}</style>'
    );
    $("body").css("height", "100vh");
    setTimeout(function () {
      $(".browser__name").each(function () {
        $(this).text(browserInfo.name);
      });
      $(".browser__update-to").text(browserInfo.upTo);
      $(".browser").addClass("active");
    }, 150);
    if ($("iframe").length > 0) {
      $("iframe").each(function () {
        $(this).remove();
      });
    }
  } else {
    console.log("Your browser version is capable with the website");
  }

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
  function load() {
    if ($(".head").length > 0) {
      //moveFollowPath();
    } else {
      $(".footer").addClass("active");
      $(".header").addClass("active");
    }
    $(".menu__item").each(function () {
      $(this).addClass("distort");
    });

    const menuItems = document.querySelectorAll(".menu__item");
    let index = 0;
    const addActiveClass = () => {
      if (index >= menuItems.length) {
        clearInterval(interval);
        return;
      }
      menuItems[index].classList.add("active");
      index++;
    };
    const interval = setInterval(addActiveClass, 500);

    setTimeout(function () {
      const menuItems2 = document.querySelectorAll(".glitch");
      let currentIndex = 0;
      const activateMenuItem = () => {
        if (currentIndex >= menuItems2.length) {
          clearInterval(intervalId);
          return;
        }
        menuItems2[currentIndex].classList.remove("glitch");
        currentIndex++;
      };
      const intervalId = setInterval(activateMenuItem, 500);
    }, 1500);

    setTimeout(function () {
      $(".head").addClass("active");
    }, 300);

    setTimeout(function () {
      $(".menu__item").each(function () {
        $(this).addClass("clickable");
      });
      $(".head__path").addClass("active");
      $(".fullscreen").addClass("active");
    }, 1600);

    setTimeout(function () {
      $(".head").addClass("shown");

      $(".fullscreen__item--default .fullscreen__item--inner").addClass(
        "active"
      );
      $(".menu__item").each(function () {
        $(this).css("transition", ".4s linear");
        $(this).removeClass("distort");
      });
      $(".menu").addClass("active");
      $(".menu").mousemove(function (event) {
        var containerOffset = $(this).offset();
        var mouseX = event.pageX - containerOffset.left;
        var mouseY = event.pageY - containerOffset.top;
        $(".menu__item").each(function () {
          var translateX = (mouseX / $(this).parent().width() - 0.5) * -30;
          var translateY = (mouseY / $(this).parent().height() - 0.5) * -30;
          $(this).css(
            "transform",
            "translate(" + translateX + "px, " + translateY + "px)"
          );
        });
        $(".head.shown").each(function () {
          var translateX = (mouseX / $(this).parent().width() - 0.5) * 15;
          var translateY = (mouseY / $(this).parent().height() - 0.5) * 15;
          $(this).css(
            "transform",
            "translate(" + translateX + "px, " + translateY + "px) scale(1)"
          );
        });
      });
      if ($(".head").length > 0) {
        $(".footer").addClass("active");
        $(".header").addClass("active");
      }
    }, 2300);
  }

  function backgroundAnim() {
    $(".background__item path").each(function () {
      var rNum = Math.random().toFixed(2) * 4;
      var x = parseInt(Math.random() * 10);
      var y = parseInt(Math.random() * 10);
      var scale = Math.random().toFixed(1) * (1.05 - 0.95) + 0.95;
      $(this).css({
        transform:
          "rotate(" +
          rNum +
          "deg) translate(" +
          x +
          "px," +
          y +
          "px) scale(" +
          scale +
          ")",
      });
    });
    $(".fullscreen__item--design ellipse").each(function () {
      var rNum2 = Math.random().toFixed(2) * 4;
      var x2 = parseInt(Math.random() * 10);
      var y2 = parseInt(Math.random() * 10);
      var scale2 = Math.random().toFixed(1) * (1.05 - 0.95) + 0.95;
      $(this).css({
        transform:
          "rotate(" +
          rNum2 +
          "deg) translate(" +
          x2 +
          "px," +
          y2 +
          "px) scale(" +
          scale2 +
          ")",
      });
    });
  }
  backgroundAnim();
  setInterval(function () {
    backgroundAnim();
  }, 3500);

  var bg;
  $(".menu__item").hover(
    function () {
      bg = $(this).data("bg");
      RemoveActive($(".fullscreen__item"));
      $('.fullscreen__item[data-bg="' + bg + '"]').addClass("active");
    },
    function () {
      RemoveActive($(".fullscreen__item"));
      $('.fullscreen__item[data-bg="default"]').addClass("active");
    }
  );

  //Dev
  if ($(".dev_wrapper").length > 0) {
    function displayDev() {
      setTimeout(function () {
        $(".dev_wrapper").addClass("active");
        $(".dev-back").addClass("active");
        $(".social").addClass("dev-active");
        $(".head").removeClass("active");
        $(".menu").removeClass("active");
        $(".fullscreen").removeClass("active");
        $(".head").removeClass("shown");
        $(".head").removeClass("dev-active");
      }, 850);
    }
    let zSpacing = window.innerWidth * -0.5,
      lastPos = zSpacing / 5,
      $frames = document.getElementsByClassName("frame"),
      frames = Array.from($frames),
      zVals = [];
    function scroll3D2(scr) {
      let top = scr,
        delta = lastPos - top;
      lastPos = top;
      frames.forEach(function (n, i) {
        zVals.push(i * zSpacing + zSpacing);
        zVals[i] += delta * -5.5;
        let frame = frames[i],
          transform = `translateZ(${zVals[i]}px)`,
          opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0;
        frame.setAttribute(
          "style",
          `transform: ${transform}; opacity: ${opacity}`
        );
      });
    }
    window.onscroll = function () {
      scroll3D2(document.documentElement.scrollTop);
    };
    var devflag = 0;
    /*$('.menu__item--3').click(function(){
      if(devflag===0){
        devflag=1;
          var lazyElements = $('.lazy-load');
          var elementsLoaded = 0;
          lazyElements.each(function() {
            var $element = $(this);
            if ($element.is('img')) {
              var dataSrc = $element.attr('data-src');
              if (dataSrc) {
                $element.on('load', function() {
                  elementsLoaded++;
                  if(elementsLoaded === lazyElements.length){
                    displayDev();
                  }
                });
                $element.attr('src', dataSrc);
              }
            }
            if ($element.is('video')) {
              var dataSrc = $element.attr('data-src');
              if (dataSrc) {
                $element.on('loadedmetadata', function(){
                  elementsLoaded++;
                  if(elementsLoaded === lazyElements.length){
                    displayDev();
                  }
                });
                $element.attr('src', dataSrc);
                $element.get(0).play();
              }
            }
          });
        //});
        $('.head').addClass('dev-active');
        $('.menu').addClass('dev-active');
        $('.fullscreen').addClass('dev-active');
        $('.menu').addClass('dev');
        scroll3D2(0);
      }
    });*/
    $(".dev-back").click(function () {
      devflag = 0;
      $(".footer").addClass("active");
      $(".dev_wrapper").removeClass("active");
      $(".form").removeClass("active");
      $(".dev-back").removeClass("active");
      $(".social").removeClass("dev-active");
      $(".fullscreen__item--2").removeClass("form_active");
      $(".fullscreen__item--2").removeClass("active");
      setTimeout(function () {
        $(".head").addClass("active");
        $(".head").removeClass("dev-active");
        $(".menu").removeClass("dev-active");
        $(".fullscreen").removeClass("dev-active");
        $(".menu").addClass("active");
      }, 1000);
      setTimeout(function () {
        $(".fullscreen").addClass("active");
        $(".head").addClass("shown");
        $(".fullscreen__item--1").addClass("active");
      }, 1700);
      setTimeout(function () {
        $(".menu").removeClass("dev");
      }, 1800);
      scroll3D2(0);
    });
    /*let soundButton = document.querySelector('.soundbutton'),
        audio = document.querySelector('.audio')
    soundButton.addEventListener('click', e => {
      soundButton.classList.toggle('paused')
      audio.paused ? audio.play() : audio.pause()
    })
    window.onfocus = function() {
      soundButton.classList.contains('paused') ? audio.pause() : audio.play()
    }
    window.onblur = function(){
      audio.pause()
    }*/
  }

  const setupExample4 = () => {
    if ($(".gallery").length > 0) {
      var viewport = document.querySelector(".gallery__wrapper .wrapper"),
        content = document.querySelector(".gallery"),
        move,
        left;
      const sb = new ScrollBooster({
        viewport,
        content,
        direction: "horizontal",
        scrollMode: "transform",
        emulateScroll: true,
        friction: 0.1,
        onUpdate: (state) => {
          content.style.transform = `translate3d(${-state.position.x}px,0,0)`;
        },
      });
      var newMove, rightBorder, $block, windowWidth, blockRect, distance;
      content.addEventListener("wheel", (event) => {
        $block = $(".gallery__wrapper .wrapper");
        windowWidth = $(window).width();
        blockRect = $block[0].getBoundingClientRect();
        distance = windowWidth - blockRect.right;
        move = event.deltaY < 0 ? -400 : 400;
        left = parseInt($(".gallery").css("transform").split(",")[4]);
        newMove = left * -1 + move;
        rightBorder =
          $(".gallery .gallery__inner").width() -
          $(".gallery__wrapper").width() +
          distance * 2;
        if (newMove < 0) {
          newMove = 0;
        }
        if (rightBorder < newMove) {
          newMove = rightBorder;
        }
        sb.scrollTo({ x: newMove });
        sb.updateMetrics();
      });
      $("body").on("click", ".nav__button", function () {
        $(".nav__button.active").removeClass("active");
        $(this).addClass("active");
        var data = {
          action: "load_posts_by_ajax",
          tag: $(this).data("tag"),
          security: blog.security,
        };
        $.post(blog.ajaxurl, data, function (response) {
          if ($.trim(response) != "") {
            $(".gallery__inner").html(response);
            setTimeout(function () {
              const menuItems3 = document.querySelectorAll(".gallery__col");
              let currentIndex2 = 0;
              const activateMenuItem2 = () => {
                if (currentIndex2 >= menuItems3.length) {
                  clearInterval(intervalId2);
                  return;
                }
                menuItems3[currentIndex2].classList.add("active");
                currentIndex2++;
              };
              const intervalId2 = setInterval(activateMenuItem2, 200);
              sb.scrollTo({ x: 0 });
            }, 300);
          } else {
            $(".gallery__inner").hide();
          }
        });
      });
    }
  };
  setupExample4();
  if ($(".gallery").length > 0) {
    setTimeout(function () {
      const menuItems3 = document.querySelectorAll(".gallery__col");
      let currentIndex2 = 0;
      const activateMenuItem2 = () => {
        if (currentIndex2 >= menuItems3.length) {
          clearInterval(intervalId2);
          return;
        }
        menuItems3[currentIndex2].classList.add("active");
        currentIndex2++;
      };
      const intervalId2 = setInterval(activateMenuItem2, 200);
    }, 300);
  }
  $(".detail__gallery--bottom img").hover(
    function () {
      RemoveActive($(".detail__gallery--top img"));
      $(
        '.detail__gallery--top img[data-item="' + $(this).data("item") + '"]'
      ).addClass("active");
    },
    function () {
      RemoveActive($(".detail__gallery--top img"));
      $('.detail__gallery--top img[data-item="1"]').addClass("active");
    }
  );

  if ($(".creatives.version1").length > 0) {
    $(".creative__cat").each(function () {
      if (!$(this).hasClass("active")) {
        $(this).find(".creative__cat--list").hide();
      }
    });
    $(".creative__cat--header").click(function () {
      if ($(this).closest(".creative__cat").hasClass("active")) {
        $(this)
          .closest(".creative__cat")
          .find(".creative__cat--list")
          .slideUp();
        $(this).closest(".creative__cat").removeClass("active");
      } else {
        //$('.creative__cat.active').find('.creative__cat--list').slideUp();
        //RemoveActive($('.creative__cat'));
        $(this)
          .closest(".creative__cat")
          .find(".creative__cat--list")
          .slideDown();
        $(this).closest(".creative__cat").addClass("active");
      }
    });
    if (
      $(".creatives__display--desktop").length > 0 &&
      $(".creatives__display--mobile").length > 0
    ) {
      $(".creatives__nav--desktop").click(function () {
        if (!$(this).hasClass("active")) {
          $(".creatives__display.active").removeClass("active");
          $(".creatives__display--desktop").addClass("active");
          $(".creatives__nav--mobile").removeClass("active");
          $(this).addClass("active");
          $(".creatives__display iframe").each(function () {
            $(this).removeClass("loaded");
            $(this).attr("src", "");
          });
          $(".creatives__display--desktop iframe").attr(
            "src",
            $(".creatives__display--desktop iframe").data("src")
          );
        }
      });
      $(".creatives__nav--mobile").click(function () {
        if (!$(this).hasClass("active")) {
          $(".creatives__nav--desktop").removeClass("active");
          $(".creatives__display.active").removeClass("active");
          $(".creatives__display--mobile").addClass("active");
          $(this).addClass("active");
          $(".creatives__display iframe").each(function () {
            $(this).removeClass("loaded");
            $(this).attr("src", "");
          });
          $(".creatives__display--mobile iframe").attr(
            "src",
            $(".creatives__display--mobile iframe").data("src")
          );
        }
      });
    }
    $(".creatives__display iframe").each(function () {
      $(this).on("load", function () {
        $(this).addClass("loaded");
      });
    });
    function displayTestPage(item) {
      var desktopJs, mobileJs, id, type, srcDesc, srcMob;
      $(".creatives__display iframe").each(function () {
        $(this).data("src", "");
        $(this).attr("src", "");
        $(this).removeClass("loaded");
      });
      $(".creatives__nav--desktop").css("display", "none");
      $(".creatives__nav span").css("display", "none");
      $(".creatives__nav--mobile").css("display", "none");
      RemoveActive($(".creatives__nav--right div"));
      RemoveActive($(".creatives__display"));
      type = item.data("type");
      desktopJs = item.data("desktop");
      mobileJs = item.data("mobile");
      id = item.data("id");
      srcDesc =
        "/test-page/?script=" + desktopJs + "&id=" + id + "&type=" + type;
      srcMob = "/test-page/?script=" + mobileJs + "&id=" + id + "&type=" + type;
      if (desktopJs !== "" && mobileJs !== "") {
        $(".creatives__display--desktop iframe").data("src", srcDesc);
        $(".creatives__display--mobile iframe").data("src", srcMob);
        $(".creatives__display--desktop iframe").attr("src", srcDesc);
        $(".creatives__nav--desktop").css("display", "block");
        $(".creatives__nav--desktop").addClass("active");
        $(".creatives__nav span").css("display", "block");
        $(".creatives__nav--mobile").css("display", "block");
        $(".creatives__display--desktop").addClass("active");
      } else if (desktopJs !== "") {
        $(".creatives__nav--desktop").css("display", "block");
        $(".creatives__nav--desktop").addClass("active");
        $(".creatives__nav span").css("display", "none");
        $(".creatives__nav--mobile").css("display", "none");
        $(".creatives__display--desktop iframe").attr("src", srcDesc);
        $(".creatives__display--desktop").addClass("active");
      } else if (mobileJs !== "") {
        $(".creatives__nav--desktop").css("display", "none");
        $(".creatives__nav span").css("display", "none");
        $(".creatives__nav--mobile").css("display", "block");
        $(".creatives__nav--mobile").addClass("active");
        $(".creatives__display--mobile iframe").attr("src", srcMob);
        $(".creatives__display--mobile").addClass("active");
      }
    }
    displayTestPage($(".creative__cat--item.active"));
    $(".creative__cat--item").click(function () {
      if (!$(this).hasClass("active")) {
        RemoveActive($(".creative__cat--item"));
        $(this).addClass("active");
        displayTestPage($(this));
      }
    });
  }

  if ($(".creatives.version2").length > 0) {
    $(".creative__cat").each(function () {
      if (!$(this).hasClass("active")) {
        $(this).find(".creative__cat--list").hide();
      }
    });
    $(".creative__cat--header").click(function () {
      if ($(this).closest(".creative__cat").hasClass("active")) {
        $(this)
          .closest(".creative__cat")
          .find(".creative__cat--list")
          .slideUp();
        $(this).closest(".creative__cat").removeClass("active");
      } else {
        $(this)
          .closest(".creative__cat")
          .find(".creative__cat--list")
          .slideDown();
        $(this).closest(".creative__cat").addClass("active");
      }
    });
    $(".creatives__display iframe").each(function () {
      $(this).on("load", function () {
        if ($(this).attr("src") !== "") {
          $(this).addClass("loaded");
        }
        var urlParams = new URLSearchParams($(this).attr("src"));
        var wowParam = urlParams.get("wow");
        if (wowParam == "Y" && $(this).attr("src") !== "") {
          $(".creatives__display").addClass("extra");
        }
        if (wowParam !== "Y" && $(this).attr("src") !== "") {
          $(".creatives__display").removeClass("extra");
        }
      });
    });

    if (
      $(".creatives__display--desktop").length > 0 &&
      $(".creatives__display--mobile").length > 0
    ) {
      $(".creatives__nav--desktop").click(function () {
        if (!$(this).hasClass("active")) {
          $(".creatives__display.active").removeClass("active");
          $(".creatives__display--desktop").addClass("active");
          $(".creatives__nav--mobile").removeClass("active");
          $(this).addClass("active");
          $(".creatives__display iframe").each(function () {
            $(this).removeClass("loaded");
            $(this).attr("src", "");
          });
          $(".creatives__display--desktop iframe").attr(
            "src",
            $(".creatives__display--desktop iframe").data("src")
          );
        }
      });
      $(".creatives__nav--mobile").click(function () {
        if (!$(this).hasClass("active")) {
          $(".creatives__nav--desktop").removeClass("active");
          $(".creatives__display.active").removeClass("active");
          $(".creatives__display--mobile").addClass("active");
          $(this).addClass("active");
          $(".creatives__display iframe").each(function () {
            $(this).removeClass("loaded");
            $(this).attr("src", "");
          });
          $(".creatives__display--mobile iframe").attr(
            "src",
            $(".creatives__display--mobile iframe").data("src")
          );
        }
      });
    }
    function displayTestPage(item) {
      var desktopJs, mobileJs, type, srcDesc, srcMob, wow;
      $(".creatives__display iframe").each(function () {
        $(this).data("src", "");
        $(this).attr("src", "");
        $(this).removeClass("loaded");
      });
      setTimeout(function () {
        $(".creatives__nav--desktop").css("display", "none");
        $(".creatives__nav span").css("display", "none");
        $(".creatives__nav--mobile").css("display", "none");
        RemoveActive($(".creatives__nav--right div"));
        RemoveActive($(".creatives__display"));
        type = item.attr("data-type");
        desktopJs = item.attr("data-desktop");
        mobileJs = item.attr("data-mobile");
        wow = item.attr("data-wow");
        console.log(wow);
        srcDesc =
          "/test-page/?script=" + desktopJs + "&type=" + type + "&wow=" + wow;
        srcMob =
          "/test-page/?script=" + mobileJs + "&type=" + type + "&wow=" + wow;
        console.log(desktopJs);
        if (desktopJs !== "" && mobileJs !== "") {
          $(".creatives__display--desktop iframe").data("src", srcDesc);
          $(".creatives__display--mobile iframe").data("src", srcMob);
          $(".creatives__display--desktop iframe").attr("src", srcDesc);
          $(".creatives__nav--desktop").css("display", "block");
          $(".creatives__nav--desktop").addClass("active");
          $(".creatives__nav span").css("display", "block");
          $(".creatives__nav--mobile").css("display", "block");
          $(".creatives__display--desktop").addClass("active");
        } else if (desktopJs !== "") {
          $(".creatives__nav--desktop").css("display", "block");
          $(".creatives__nav--desktop").addClass("active");
          $(".creatives__nav span").css("display", "none");
          $(".creatives__nav--mobile").css("display", "none");
          $(".creatives__display--desktop iframe").attr("src", srcDesc);
          $(".creatives__display--desktop").addClass("active");
        } else if (mobileJs !== "") {
          $(".creatives__nav--desktop").css("display", "none");
          $(".creatives__nav span").css("display", "none");
          $(".creatives__nav--mobile").css("display", "block");
          $(".creatives__nav--mobile").addClass("active");
          $(".creatives__display--mobile iframe").attr("src", srcMob);
          $(".creatives__display--mobile").addClass("active");
        }
      }, 300);
    }
    function prepareClient(client) {
      //if(!(client.hasClass('active'))){
      var clientName = client.attr("data-client");
      var clientType = client.attr("data-type");
      RemoveActive($(".creative__cat--item"));
      client.addClass("active");
      $(".creatives__list--inner").html("");
      $(".creatives__data--item").each(function () {
        if (
          clientName == $(this).data("client") &&
          clientType == $(this).data("type")
        ) {
          $(".creatives__list--inner").append(
            '<div class="creatives__item" data-wow="' +
              $(this).data("wow") +
              '" data-desktop="' +
              $(this).data("desktop") +
              '" data-mobile="' +
              $(this).data("mobile") +
              '" data-type="' +
              $(this).data("type") +
              '"><p>' +
              $(this).data("name") +
              "</p><span>" +
              $(this).data("feature") +
              "</span></div>"
          );
        }
      });
      if ($(".creatives__item").length > 0) {
        $(".creatives__item").first().addClass("active");
        displayTestPage($(".creatives__item").first());
      }
      //}
    }
    $("body").on("click", ".creatives__item", function () {
      RemoveActive($(".creatives__item"));
      $(this).addClass("active");
      displayTestPage($(this));
    });
    $(".creative__cat--item").click(function () {
      prepareClient($(this));
    });
    prepareClient($(".creative__cat--item.active"));
    var clientsName, clientsCol;
    $(".creatives__data--item").each(function () {
      clientsName = $(this).data("client");
      clientsCol = $(
        '.creatives__data--item[data-client="' + clientsName + '"]'
      ).length;
      if (clientsCol < 2) {
        $('.creative__cat--item[data-client="' + clientsName + '"]')
          .find(".projects__name")
          .text("PROJECT");
      } else {
        $('.creative__cat--item[data-client="' + clientsName + '"]')
          .find(".projects__name")
          .text("PROJECTS");
      }
      $('.creative__cat--item[data-client="' + clientsName + '"]')
        .find(".projects__col")
        .text(clientsCol);
    });
  }

  if ($(".form").length > 0) {
    function Validator() {
      var allFieldsFilled = true;
      $(".form [required]").each(function () {
        if ($(this).val() === "") {
          allFieldsFilled = false;
          return false;
        }
      });
      if (allFieldsFilled === true) {
        $(".form__submit").removeClass("disabled");
      } else {
        $(".form__submit").addClass("disabled");
      }
    }
    $(".menu__item--5").click(function () {
      $(".head").addClass("dev-active");
      $(".menu").addClass("dev-active");
      setTimeout(function () {
        $(".fullscreen__item.active").removeClass("active");
      }, 300);
      $(".footer").removeClass("active");
      setTimeout(function () {
        $(".fullscreen__item--2").addClass("active");
        $(".fullscreen__item--2").addClass("form_active");
        $(".form").addClass("active");
        $(".dev-back").addClass("active");
        $(".social").addClass("dev-active");
        $(".head").removeClass("active");
        $(".menu").removeClass("active");
        $(".head").removeClass("shown");
        $(".head").removeClass("dev-active");
      }, 850);
    });
    function curItem() {
      var themecur = $(".theme__header").data("item");
      $(".theme__list--item").each(function () {
        if ($(this).data("item") == themecur) {
          $(this).css("display", "none");
        } else {
          $(this).css("display", "flex");
        }
      });
    }
    curItem();
    function setActiveTheme(obj3) {
      //$('.theme__header').click(function(){
      if (obj3.closest(".theme").hasClass("active")) {
        obj3.closest(".theme").find(".theme__list").slideUp();
        obj3.closest(".theme").removeClass("active");
      } else {
        $(".theme.active").find(".theme__list").slideUp();
        RemoveActive($(".theme"));
        obj3.closest(".theme").find(".theme__list").slideDown();
        obj3.closest(".theme").addClass("active");
      }
      //});
    }
    $(".theme__header").click(function () {
      setActiveTheme($(this));
    });
    $(".theme__list--item").click(function () {
      $(".theme__header").data("item", $(this).data("item"));
      $(".theme__header--text").text($(this).find("p").text());
      $(".theme").find(".theme__list").slideUp();
      $(".theme").removeClass("active");
      $(".theme__input").val($(this).find("p").text());
      curItem();
      if ($(this).data("item") == "tender") {
        $(".form__tender").slideDown();
        $(".form__tender--input").attr("required", "");
        Validator();
      } else {
        $(".form__tender--input").val("");
        $(".form__tender").slideUp();
        $(".form__tender--input").removeAttr("required");
        Validator();
      }
    });
    $(".form__services--item").click(function () {
      if (!$(this).hasClass("active")) {
        $(".form__services--item.active").removeClass("active");
        $(this).addClass("active");
        $(
          '.form__services input[data-radio="' + $(this).data("radio") + '"]'
        ).prop("checked", true);
      }
    });
    //Внешний вид для инпутов формы
    $(".form__label--inner input")
      .focus(function () {
        $(this).closest(".form__label--inner").addClass("focus");
        $(this).closest(".form__label--inner").find("span").addClass("focus");
      })
      .blur(function () {
        $(this).closest(".form__label--inner").removeClass("focus");
        if (!$(this).val()) {
          $(this)
            .closest(".form__label--inner")
            .find("span")
            .removeClass("focus");
        }
      });
    $(".form__bottom--item").click(function () {
      if (!$(this).hasClass("active")) {
        $(".form__label--changing input").each(function () {
          $(this).removeAttr("required");
          Validator();
        });
        $(
          '.form__label--changing [data-field="' +
            $(this).data("field") +
            '"] input'
        ).attr("required", "");
        $(".form__bottom--item.active").removeClass("active");
        $(this).addClass("active");
        $(".form__label--changing .form__label--inner.active").removeClass(
          "active"
        );
        $(
          '.form__label--changing .form__label--inner[data-field="' +
            $(this).data("field") +
            '"]'
        ).addClass("active");
        Validator();
      }
    });
    $(".form__submit").click(function () {
      $(".wrong").removeClass("wrong");
      if ($('.form__label--inner.active[data-field="1"]').length > 0) {
        var email = $('[name="email"]').val();
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(email)) {
          $(".form__real-submit").trigger("click");
        } else {
          $('.form__label--inner[data-field="1"]').addClass("wrong");
        }
      } else if ($('.form__label--inner.active[data-field="2"]').length > 0) {
        var phone = $('[name="phone"]').val();
        var result = phone.replace(/_/g, "");
        if (result.length >= 17) {
          $(".form__real-submit").trigger("click");
        } else {
          $('.form__label--inner[data-field="2"]').addClass("wrong");
        }
      } else {
        $(".form__real-submit").trigger("click");
      }
    });
    document.addEventListener(
      "wpcf7submit",
      function (event) {
        $(".form__label--inner").each(function () {
          $(this).find("span").removeClass("focus");
        });
      },
      false
    );
    $(".form :input").on("input", function () {
      Validator();
    });
    //$("[name='email']").inputmask('email');
    $('[name="phone"]').inputmask("+7 (999) 999-99-99");
    $('[name="username"]').inputmask("@***************************", {
      placeholder: "",
    });
    /*$(".form__submit").click(function(e) {
        e.preventDefault(); // Prevent form submission
        var allFieldsFilled = true;
        $(".form [required]").each(function() {
          if ($(this).val() === '') {
            allFieldsFilled = false;
            return false; // Exit the loop if a required field is empty
          }
        });
        if(allFieldsFilled){
          $('.form').submit();
        }else{
          alert("Please fill in all required fields!");
        }
      });*/
  }
  if ($(".copy").length > 0) {
    $(".copy").each(function () {
      $(this).click(function () {
        $(".copy.active").removeClass("active");
        $(this).addClass("active");
        var textToCopy = $(this)
          .parent(".req__table--right")
          .find("span")
          .text();
        var tempTextarea = $("<textarea>");
        $("body").append(tempTextarea);
        tempTextarea.val(textToCopy).select();
        document.execCommand("copy");
        tempTextarea.remove();
      });
    });
  }
  if ($(".presentation").length > 0) {
    function setCreative(item) {
      RemoveActive($(".desktop_video--bottom__item"));
      $('.desktop_video--bottom__item[data-item="' + item + '"]').addClass(
        "active"
      );
      $(".desktop_video--frame").removeClass("active");
      setTimeout(function () {
        $(".desktop_video--frame").attr("src", "");
        var creativeSrc = $(
          '.desktop_video--slider__item[data-item="' + item + '"]'
        ).data("src");
        if (creativeSrc) {
          $(".desktop_video--frame").attr("src", creativeSrc);
        }
      }, 300);
    }
    function setCreative2(item) {
      RemoveActive($(".mobile_video--bottom__item"));
      $('.mobile_video--bottom__item[data-item="' + item + '"]').addClass(
        "active"
      );
      $(".mobile_video--frame").removeClass("active");
      setTimeout(function () {
        $(".mobile_video--frame").attr("src", "");
        var creativeSrc = $(
          '.mobile_video--slider__item[data-item="' + item + '"]'
        ).data("src");
        if (creativeSrc) {
          $(".mobile_video--frame").attr("src", creativeSrc);
        }
      }, 300);
    }
    $(".p-nav__number").click(function () {
      $(".p-nav__list").addClass("active");
    });
    $(document).mouseup(function (e) {
      var container = $(".p-nav__list");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.removeClass("active");
      }
    });
    $(".p-nav__right").click(function () {
      var slide = parseInt($(".section.active").data("slide"));
      var nextSlide = slide + 1;
      $(".section.active").removeClass("active");
      if ($('.section[data-slide="' + nextSlide + '"]').length > 0) {
        $('.section[data-slide="' + nextSlide + '"]').addClass("active");
      } else {
        $(".section_0").addClass("active");
      }
      change();
    });
    $(".p-nav__left").click(function () {
      var slide = parseInt($(".section.active").data("slide"));
      var prevSlide = slide - 1;
      $(".section.active").removeClass("active");
      if ($('.section[data-slide="' + prevSlide + '"]').length > 0) {
        $('.section[data-slide="' + prevSlide + '"]').addClass("active");
      } else {
        $('.section[data-slide="' + $(".section").length + '"]').addClass(
          "active"
        );
      }
      change();
    });
    $(".p-nav__item").click(function () {
      window.scrollTo(0, 1);
      RemoveActive($(".section"));
      $('.section[data-slide="' + $(this).data("slide") + '"]').addClass(
        "active"
      );
      $(".p-nav__list").removeClass("active");
      change();
    });

    let zSpacing = window.innerWidth * -0.5,
      lastPos = zSpacing / 5,
      $frames = document.getElementsByClassName("frame"),
      frames = Array.from($frames),
      zVals = [];
    const coeffs = [1, 1.3, 1.1, 1.2, 1.1, 1.2, 1.13, 1.2, 1.13, 1.2];
    function scroll3D(scr) {
      let top = scr * 0.45,
        delta = lastPos - top;
      lastPos = top;
      if (scr > 150) {
        $(".scrolling").removeClass("active");
      } else {
        $(".scrolling").addClass("active");
      }
      frames.forEach(function (n, i) {
        zVals.push(i * zSpacing * coeffs[i] + zSpacing * coeffs[i]);
        zVals[i] += delta * -5.5;
        let frame = frames[i],
          transform = `translate3d(0,0,${parseInt(zVals[i])}px)`,
          opacity = zVals[i] < Math.abs(zSpacing) / 1.3 ? 1 : 0,
          active = zVals[i] < Math.abs(zSpacing) * -1.1 ? "Y" : "N";
        frame.setAttribute(
          "style",
          `transform: ${transform}; opacity: ${opacity}`
        );
        frame.setAttribute("data-active", `${active}`);
      });
    }
    setTimeout(function () {
      scroll3D(0);
    }, 200);
    window.onscroll = function () {
      scroll3D(document.documentElement.scrollTop);
    };
    function change() {
      setTimeout(function () {
        scroll3D(0);
        window.scrollTo(0, 0);
        $(".p-nav__number").text($(".section.active").data("slide"));
        RemoveActive($(".p-nav__item"));
        $(
          '.p-nav__item[data-slide="' +
            $(".section.active").data("slide") +
            '"]'
        ).addClass("active");
        if ($(".section.active").find(".desktop_video--frame").length > 0) {
          $(".desktop_video--top").addClass("loading");
          setCreative(1);
        } else {
          $(".desktop_video--top").addClass("loading");
          setCreative(999);
          $(".desktop_video--slider__inner").slick("slickGoTo", 0);
        }
        if ($(".section.active").find(".mobile_video--frame").length > 0) {
          $(".mobile_video--top").addClass("loading");
          setCreative2(1);
        } else {
          $(".mobile_video--top").addClass("loading");
          setCreative2(999);
        }
        if ($(".section.active").find(".optimization").length > 0) {
          $(".optimization__creative").addClass("loading");
          $(".optimization__creative").removeClass("active");
          $(".optimization__frame").removeClass("active");
          $(".optimization__frame").attr(
            "src",
            $(".optimization__frame").data("src")
          );
        } else {
          $(".optimization__creative").addClass("loading");
          $(".optimization__creative").removeClass("active");
          $(".optimization__frame").removeClass("active");
          setTimeout(function () {
            $(".optimization__frame").attr("src", "");
          }, 300);
          if ($(".optimization__item.active").length > 0) {
            $(".optimization__item.active").removeClass("active");
          }
        }
        if ($(".section.active").find(".brand").length > 0) {
          $(".brand__right").addClass("loading");
          $(".brand__over").addClass("active");
          $(".brand__iframe").removeClass("active");
          $(".brand__iframe").attr("src", $(".brand__iframe").data("src"));
        } else {
          $(".brand__right").addClass("loading");
          $(".brand__over").removeClass("active");
          $(".brand__iframe").removeClass("active");
          setTimeout(function () {
            $(".brand__iframe").attr("src", "");
          }, 300);
        }
        if ($(".section.active").find(".stats").length > 0) {
          $(".stats__tab--creative").addClass("loading");
          $(".stats__iframe").removeClass("active");
          $(".stats__iframe").attr("src", $(".stats__iframe").data("src"));
        } else {
          $(".stats__tab--creative").addClass("loading");
          $(".stats__iframe").removeClass("active");
          setTimeout(function () {
            $(".stats__iframe").attr("src", "");
          }, 300);
        }
        if ($(".section.active").find(".eye").length > 0) {
          $(".eye__creative").addClass("loading");
          $(".eye__tracker").attr("src", "");
          $(".eye__creative--iframe").removeClass("active");
          $(".eye__creative--iframe").attr(
            "src",
            $(".eye__creative--iframe").data("src")
          );
        } else {
          $(".eye__creative").addClass("loading");
          $(".eye__creative--iframe").removeClass("active");
          $(".eye__tracker").attr("src", "");
          setTimeout(function () {
            $(".eye__creative--iframe").attr("src", "");
          }, 300);
        }
        if ($(".section.active").find(".feed").length > 0) {
          $(".feed__creative").addClass("loading");
          $(".feed__right").addClass("change");
          $(".feed__frame").removeClass("active");
          $(".feed__frame").attr("src", $(".feed__frame").data("src"));
        } else {
          $(".feed__creative").addClass("loading");
          $(".feed__item--selected").each(function () {
            $(this).remove();
          });
          $(".feed__selected").append(
            '<div class="feed__item feed__item--selected active" data-number="1" data-slide="1"><img src="/wp-content/themes/foxdigital/img/p1.png" alt=""><p>Комбуча</p></div><div class="feed__item feed__item--selected active" data-number="2" data-slide="2"><img src="/wp-content/themes/foxdigital/img/p2.png" alt=""><p>Гель для душа</p></div>'
          );
          $(".feed__item--list").each(function () {
            $(this).removeClass("active");
          });
          $(".feed__item--list").each(function () {
            $(this).removeClass("d-none");
          });
          $('.feed__item--list[data-number="1"]').addClass("d-none");
          $('.feed__item--list[data-number="2"]').addClass("d-none");
          $('.feed__item--list[data-number="3"]').addClass("active");
          $('.feed__item--list[data-number="4"]').addClass("active");
          $('.feed__item--list[data-number="5"]').addClass("active");
          $('.feed__item--list[data-number="6"]').addClass("active");
          $('.feed__item--list[data-number="7"]').addClass("active");
          $('.feed__item--list[data-number="8"]').addClass("active");
          $('.feed__item--list[data-number="9"]').addClass("active");
          $('.feed__item--list[data-number="10"]').addClass("active");
          $('.feed__item--list[data-number="11"]').addClass("active");
          $(".feed__right").addClass("change");
          $(".feed__frame").removeClass("active");
          $(".feed__frame").attr("src", "");
        }
        hideHeader();
      }, 50);
    }

    var slides = $(".desktop_video--slider__item").length;
    $(".desktop_video--slider__inner").slick({
      slidesToScroll: 1,
      slidesToShow: 3,
      arrows: false,
      accessibility: false,
      draggable: false,
      autoplay: false,
      speed: 1000,
      vertical: true,
      verticalScrolling: true,
      centerMode: true,
    });
    $(".desktop_video--frame").load(function () {
      $(".desktop_video--top").removeClass("loading");
      $(this).addClass("active");
    });
    function pointer() {
      $(".desktop_video--right").css("pointer-events", "none");
      setTimeout(function () {
        $(".desktop_video--right").css("pointer-events", "all");
      }, 1100);
    }
    $(".desktop_video--arrow__top").click(function (e) {
      $(".desktop_video--top").addClass("loading");
      e.preventDefault();
      var slide2 =
        parseInt(
          $(".desktop_video--slider__inner .slick-current").data("item")
        ) - 1;
      $(".desktop_video--slider__inner").slick("slickPrev");
      if (
        $('.desktop_video--slider__item[data-item="' + slide2 + '"]').length < 1
      ) {
        slide2 = slides;
      }
      setCreative(slide2);
      pointer();
      return false;
    });
    $(".desktop_video--arrow__bottom").click(function (e) {
      $(".desktop_video--top").addClass("loading");
      e.preventDefault();
      var slide2 =
        parseInt(
          $(".desktop_video--slider__inner .slick-current").data("item")
        ) + 1;
      $(".desktop_video--slider__inner").slick("slickNext");
      if (
        $('.desktop_video--slider__item[data-item="' + slide2 + '"]').length < 1
      ) {
        slide2 = 1;
      }
      setCreative(slide2);
      pointer();
      return false;
    });
    var item;
    $(".desktop_video--slider__item").click(function () {
      $(".desktop_video--slider__item").each(function () {
        $(this).removeClass("active");
      });
      $(this).addClass("active");
      $(".desktop_video--top").addClass("loading");
      item = $(this).data("item");
      $(".desktop_video--slider__inner").slick(
        "slickGoTo",
        $(this).data("slick-index")
      );
      pointer();
      setCreative(item);
    });
    $(".mobile_video--frame").load(function () {
      $(".mobile_video--top").removeClass("loading");
      $(this).addClass("active");
    });
    var item2;
    $(".mobile_video--slider__item").click(function () {
      $(".mobile_video--top").addClass("loading");
      RemoveActive($(".mobile_video--slider__item"));
      $(this).addClass("active");
      item2 = $(this).data("item");
      setCreative2(item2);
    });
    $(".optimization__frame").load(function () {
      $(".optimization__creative").removeClass("loading");
      $(this).addClass("active");
      $(".optimization__creative").addClass("active");
    });

    // window.addEventListener("message", function (e) {
    //   if (e.data.includes("change-slide")) {
    //     if ($(".optimization__item.active").length > 0) {
    //       $(".optimization__item.active").removeClass("active");
    //     }
    //   }
    //   if (e.data.includes("click")) {
    //     var click = parseInt(e.data.split("-")[1]);
    //     $(".optimization__item--" + click).addClass("active");
    //   }
    // });

    $(".brand__iframe").load(function () {
      $(".brand__right").removeClass("loading");
      $(this).addClass("active");
    });
    $(".eye__creative--iframe").load(function () {
      $(".eye__creative").removeClass("loading");
      $(this).addClass("active");
      $(".eye__tracker").attr("src", $(".eye__tracker").data("src"));
    });
    $(".brand__over").click(function () {
      $(this).removeClass("active");
    });

    const minNumber = 0;
    const maxNumber = 70;
    const excludedStart = 20;
    const excludedEnd = 45;

    function getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function generateNumberWithExclusion(
      min,
      max,
      excludedRangeStart,
      excludedRangeEnd
    ) {
      let randomNumber;
      do {
        randomNumber = getRandomNumber(min, max);
      } while (
        randomNumber >= excludedRangeStart &&
        randomNumber <= excludedRangeEnd
      );
      return randomNumber;
    }

    function animateImages() {
      $(".eye__img").each(function () {
        var $img = $(this);
        setTimeout(function () {
          $img.removeClass("active");
          setTimeout(function () {
            var randomLeft =
              generateNumberWithExclusion(
                minNumber,
                maxNumber,
                excludedStart,
                excludedEnd
              ) + "%";
            var randomTop =
              generateNumberWithExclusion(
                minNumber,
                maxNumber,
                excludedStart,
                excludedEnd
              ) + "%";
            var randomScale = Math.random() * 0.35 + 0.8;
            $img.css({
              left: randomLeft,
              top: randomTop,
              transform: "scale(" + randomScale + ")",
            });
          }, 400);
          setTimeout(function () {
            $img.addClass("active");
          }, 800);
        }, Math.floor(Math.random() * 4000) + 2000);
      });
    }
    //setTimeout(function(){
    setInterval(animateImages, 6000);
    //},2000);

    const typingElements = $(".printing");
    const typingSpeed = 50;
    const backspaceSpeed = 40;
    const pauseDuration = 2000;

    function animateText(typingElement, textToType, currentIndex, direction) {
      function typeText() {
        typingElement.text(textToType.slice(0, currentIndex));
        currentIndex += direction;

        if (currentIndex === textToType.length + 1) {
          direction = -1;
          setTimeout(backspaceText, pauseDuration);
        } else {
          setTimeout(typeText, typingSpeed);
        }
      }

      function backspaceText() {
        typingElement.text(textToType.slice(0, currentIndex));
        currentIndex += direction;

        if (currentIndex === -1) {
          direction = 1;
          setTimeout(function () {
            animateText(typingElement, textToType, currentIndex, direction);
          }, pauseDuration);
        } else {
          setTimeout(backspaceText, backspaceSpeed);
        }
      }

      typeText();
    }

    typingElements.each(function () {
      const typingElement = $(this);
      const textToType = typingElement.data("text");
      let currentIndex = 0;
      let direction = 1;

      animateText(typingElement, textToType, currentIndex, direction);
    });
    if ($(".stats").length > 0) {
      $(".stats__iframe").load(function () {
        $(".stats__tab--creative").removeClass("loading");
        $(this).addClass("active");
      });
      $(".stats__tab--btn--get").click(function () {
        $(".stats__tab--1").removeClass("active");
        $(".stats__tab--2").addClass("active");
        $('.stats__tab--graph[data-graph="1"]').addClass("active");
        $('.graph__item[data-graph="1"]').addClass("active");
        $(".stats__desc--1").removeClass("active");
        $(".stats__desc--2").addClass("active");
      });
      $(".stats__tab--btn--back").click(function () {
        $(".stats__tab--2").removeClass("active");
        $(".stats__tab--1").addClass("active");
        $(".stats__tab--graph.active").removeClass("active");
        $(".graph__item.active").removeClass("active");
        $(".stats__desc--2").removeClass("active");
        $(".stats__desc--1").addClass("active");
      });
      $(".graph__item").click(function () {
        var graph;
        graph = $(this).data("graph");
        $(".stats__tab--graph.active").removeClass("active");
        $(".graph__item.active").removeClass("active");
        $(this).addClass("active");
        $('.stats__tab--graph[data-graph="' + graph + '"]').addClass("active");
      });
    }
    if ($(".feed").length > 0) {
      var obj4;
      $(".feed__frame").load(function () {
        $(".feed__creative").removeClass("loading");
        $(this).addClass("active");
        $(".feed__right").removeClass("change");
      });
      function rebuldList() {
        var k = 1;
        $(".feed__item--selected").each(function () {
          $(this).attr("data-slide", k);
          k++;
        });
      }
      $("body").on("click", ".feed__item--list", function () {
        obj4 = $(this);
        if (
          $(
            '.feed__item--selected[data-number="' +
              obj4.attr("data-number") +
              '"]'
          ).length < 1
        ) {
          if ($(".feed__item--selected").length > 3) {
            var randomNumber = $('.feed__item--selected[data-slide="1"]').attr(
              "data-number"
            );
            $(
              '.feed__item--selected[data-number="' + randomNumber + '"]'
            ).remove();
            document
              .querySelector(".feed__frame")
              .contentWindow.postMessage("remove-" + randomNumber, "*");
            setTimeout(function () {
              rebuldList();
            }, 200);
            setTimeout(function () {
              $(
                '.feed__item--list[data-number="' + randomNumber + '"]'
              ).removeClass("d-none");
            }, 400);
            setTimeout(function () {
              $(
                '.feed__item--list[data-number="' + randomNumber + '"]'
              ).addClass("active");
            }, 500);
          }
          obj4.removeClass("active");
          $(".feed__selected").append(
            '<div class="feed__item feed__item--selected" data-number="' +
              obj4.attr("data-number") +
              '"><img src="' +
              obj4.find("img").attr("src") +
              '" alt=""><p>' +
              obj4.find("p").html() +
              "</p></div>"
          );
          $(".feed__right").addClass("change");
          document
            .querySelector(".feed__frame")
            .contentWindow.postMessage("add-" + obj4.attr("data-number"), "*");
          setTimeout(function () {
            $(
              '.feed__item.feed__item--selected[data-number="' +
                obj4.attr("data-number") +
                '"]'
            ).addClass("active");
          }, 150);
          setTimeout(function () {
            obj4.addClass("d-none");
          }, 400);
          setTimeout(function () {
            $(".feed__right").removeClass("change");
          }, 500);
        }
      });
      $("body").on("click", ".feed__item--selected", function () {
        if ($(".feed__item--selected").length > 2) {
          obj4 = $(this);
          $(
            '.feed__item--list[data-number="' + obj4.attr("data-number") + '"]'
          ).removeClass("d-none");
          obj4.removeClass("active");
          $(".feed__right").addClass("change");
          document
            .querySelector(".feed__frame")
            .contentWindow.postMessage(
              "remove-" + obj4.attr("data-number"),
              "*"
            );
          setTimeout(function () {
            rebuldList();
          }, 200);
          setTimeout(function () {
            $(
              '.feed__item--list[data-number="' +
                obj4.attr("data-number") +
                '"]'
            ).addClass("active");
          }, 100);
          setTimeout(function () {
            $(".feed__right").removeClass("change");
            obj4.remove();
          }, 500);
        }
      });
      if ($(".feed__tabs").length > 0) {
        function feedAnim() {
          setTimeout(function () {
            $(".feed__tabs--item--1").addClass("active");
            var time = 300;
            $(".ball__1 span").each(function () {
              var obj5 = $(this);
              setTimeout(function () {
                if (obj5.prev().length > 0) {
                  obj5.prev().removeClass("active");
                }
                obj5.addClass("active");
              }, time);
              time += 300;
            });
          }, 300);
          setTimeout(function () {
            $(".ball__1 span.active").removeClass("active");
            $(".feed__tabs--item--1").removeClass("active");
            $(".feed__tabs--item--2").addClass("active");
            var time = 300;
            $(".ball__2 span").each(function () {
              var obj5 = $(this);
              setTimeout(function () {
                if (obj5.prev().length > 0) {
                  obj5.prev().removeClass("active");
                }
                obj5.addClass("active");
              }, time);
              time += 300;
            });
          }, 2700);
          setTimeout(function () {
            $(".ball__2 span.active").removeClass("active");
            $(".feed__tabs--item--2").removeClass("active");
            $(".feed__tabs--item--3").addClass("active");
          }, 5100);
        }
        function feedAnimReverse() {
          setTimeout(function () {
            $(".feed__tabs--item--3").addClass("active");
            var time2 = 2100;
            $(".ball__2 span").each(function () {
              var obj5 = $(this);
              setTimeout(function () {
                if (obj5.next().length > 0) {
                  obj5.next().removeClass("active");
                }
                obj5.addClass("active");
              }, time2);
              time2 -= 300;
            });
          }, 300);
          setTimeout(function () {
            $(".ball__2 span.active").removeClass("active");
            $(".feed__tabs--item--3").removeClass("active");
            $(".feed__tabs--item--2").addClass("active");
            var time2 = 2100;
            $(".ball__1 span").each(function () {
              var obj5 = $(this);
              setTimeout(function () {
                if (obj5.next().length > 0) {
                  obj5.next().removeClass("active");
                }
                obj5.addClass("active");
              }, time2);
              time2 -= 300;
            });
          }, 2700);
          setTimeout(function () {
            $(".ball__1 span.active").removeClass("active");
            $(".feed__tabs--item--2").removeClass("active");
            $(".feed__tabs--item--1").addClass("active");
          }, 5100);
        }
        feedAnim();
        setTimeout(function () {
          feedAnimReverse();
        }, 5500);
        var feedinterval = setInterval(function () {
          feedAnim();
          setTimeout(function () {
            feedAnimReverse();
          }, 5500);
        }, 11000);
      }
    }
  }
});
