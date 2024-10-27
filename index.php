<?php
/*
Template Name: Ads
Template Post Type: page
*/?>
<?php get_header();?>
<div class="ads">
  <div id="smoke-container"></div>

  <div class="presentation">
    <section class="section section_0 active dev_wrapper" data-slide="1">
      <div class="wrapper lilo__wrapper">
        <div class="content__lilo">
          <img class="logo__big" src="<?php echo get_stylesheet_directory_uri(); ?>/img/logo-lilo-big.svg" alt="LILO">
          <img class="dots__purp" src="<?php echo get_stylesheet_directory_uri(); ?>/img/dots-purp.svg" alt="...">
          <div class="content__lilo__text">
            <p>
              <b>
                Lilo - уникальная сеть для быстрого и качественного вывода в топ
                стримеров на популярных платформах.
              </b>
            </p>
            <p>
              Продвижение происходит за счет <span id="follow_new_client">привлечения целевой аудитории</span> 
              со внешних площадок и прироста органического онлайна с
              использованием заметных креативов.
            </p>
            <p>
              Наша платформа <span id="cooperate_with_sreemers">сотрудничает со стримерами всех уровней</span>, от новичков до опытных профессионалов.
            </p>
          </div>
        </div>
        <img
          class="background-img woman_vr_blure"
          src="<?php echo get_stylesheet_directory_uri(); ?>/img/woman_vr_blure.png"
          alt="blure"
        />
        <img
          class="background-img woman_vr"
          src="<?php echo get_stylesheet_directory_uri(); ?>/img/woman_vr.png"
          alt="woman wearing vr glasses gaming"
        />
        <div class="background">
        </div>
        <div class="background_smoke">
          <img id="shadow_purp" style="opacity: 0.1;" src="<?php echo get_stylesheet_directory_uri(); ?>/img/shadow_purp.svg" alt="" />
          <img id="shadow_blue" style="opacity: 0.1;" src="<?php echo get_stylesheet_directory_uri(); ?>/img/shadow_blue.svg" alt="" />
        </div>
      </div>
    </section>
    <section class="section section_2" data-slide="2">
      <div class="wrapper">
        <div class="container-columns">
          <div class="section2__column section2__column-twitch">
              <img class="shadow-purp" src="<?php echo get_stylesheet_directory_uri(); ?>/img/bg/slide_2/shadow purp.png" alt="" />
              <img class="twitch-bg-plaseholder twitch-opacity" src="<?php echo get_stylesheet_directory_uri(); ?>/img/twitch-bg.png" alt="">
              <img
                class="twitch_logo streem_logo twitch-opacity"
                src="<?php echo get_stylesheet_directory_uri(); ?>/img/twitch_logo.png"
                alt="twitch"
              />
              <img class="dust-purp-twitch twitch-opacity" src="<?php echo get_stylesheet_directory_uri(); ?>/img/bg/dust-purp-twitch.png" alt="">
              <div class="blure_container twitch twitch-opacity">
                <div class="blure_container_content-s2">
                  <h3>20 тысяч</h3>
                  <p>Прямых трансляций</p>
                  <h3>1 миллион</h3>
                  <p>Активных зрителей</p>
                </div>
              </div>
              <div class="blure_container_btn twitch-opacity">
                <button class="look_btn" id="look-twitch">Посмотреть формат</button>
              </div>
            </div>
            <div class="section2__column section2__column-vkplay">
              <img class="shadow-blue" src="<?php echo get_stylesheet_directory_uri(); ?>/img/bg/slide_2/shadow blue.png" alt="" />
              <img class="vklay-bg-plaseholder vkplay-opacity" src="<?php echo get_stylesheet_directory_uri(); ?>/img/vkplay-bg.png" alt="">
              <img
                class="vkplay_logo streem_logo vkplay-opacity"
                src="<?php echo get_stylesheet_directory_uri(); ?>/img/logo-vkplay1.svg"
                alt="vkplay"
              />
              <img class="dust-purp-vkplay vkplay-opacity" src="<?php echo get_stylesheet_directory_uri(); ?>/img/bg/dust-blue-vkplay.png" alt="">
              <div class="blure_container vkplay vkplay-opacity">
                <div class="blure_container_content-s2">
                  <h3>2 тысячи</h3>
                  <p>Прямых трансляций</p>
                  <h3>170 тысяч</h3>
                  <p>Активных зрителей</p>
                </div>
              </div>
              <div class="blure_container_btn vkplay-opacity">
                <button class="look_btn" id="look-vkplay">Посмотреть формат</button>
              </div>
            </div>
            <div class="descriptoin_slide">Средние значения в день*</div>
        </div>
        <img class="woman_vr2" src="<?php echo get_stylesheet_directory_uri(); ?>/img/pict_girl.png" alt="girl"/>
        <div class="background"></div>
        <div class="background_smoke">
        </div>
      </div>
    </section>
    <section class="section section_3" data-slide="3">
      <div class="wrapper our_network__wrapper">
        <div class="section_3__info">
          <div class="flame__descript">
            Стримеры подключаются к сети для <b>быстрого старта</b>
          </div>
          <div class="section_3__blocks">
            <div class="block3__wrapper">
              <h4>
                33 млн+
              </h4>
              <p>
                охват
              </p>
            </div>
            <div class="block3__wrapper">
              <h4>МЖ 20-55+</h4>
              <p>
                аудитория
              </p>
            </div>
            <div class="block3__wrapper">
              <h4>500+</h4>
              <p>
                паблишеров
              </p>
            </div>
          </div>
        </div>
        <div class="views-in-streem animate-views">
          <div class="cirkl-animated left-cirkl">
            <div class="cirkl-out one"></div>
            <div class="cirkl-mid one"></div>
            <div class="cirkl-in one"></div>
            <div class="cirkl-out two"></div>
            <div class="cirkl-mid two"></div>
            <div class="cirkl-in two"></div>
          </div>
          <div class="cirkl-animated right-cirkl">
            <div class="cirkl-out one"></div>
            <div class="cirkl-mid one"></div>
            <div class="cirkl-in one"></div>
            <div class="cirkl-out two"></div>
            <div class="cirkl-mid two"></div>
            <div class="cirkl-in two"></div>
          </div>
          <div class="views-count">
            <span class="views-count-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="#ff8e81" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22" stroke="#ff8e81" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
            <div class="user-counter-wrapper">
              <div class="user-counter">
                <div class="digit">1</div>
                <!-- <div class="digit">2</div>
                <div class="digit">3</div> -->
              </div>
            </div>
          </div>
          <div class="live-streem">
            <svg width="91" height="26" viewBox="0 0 91 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.414551" y="0.207031" width="89.8723" height="25.3757" rx="5.2866" fill="#EB0400"/>
              <path d="M13.6386 13.9439H10.574L10.5575 12.4322H13.2338C13.6854 12.4322 14.0681 12.3661 14.382 12.234C14.7014 12.0963 14.9437 11.9008 15.1089 11.6475C15.2741 11.3887 15.3567 11.0775 15.3567 10.7141C15.3567 10.3121 15.2796 9.98441 15.1255 9.7311C14.9713 9.47778 14.7345 9.2933 14.4151 9.17766C14.1012 9.06201 13.6992 9.00419 13.2091 9.00419H11.2018V19.3792H9.12846V7.35213H13.2091C13.8699 7.35213 14.4591 7.41546 14.9768 7.54211C15.4999 7.66877 15.9432 7.86702 16.3067 8.13686C16.6756 8.40119 16.9537 8.73711 17.141 9.14462C17.3337 9.55212 17.4301 10.0367 17.4301 10.5984C17.4301 11.0941 17.3117 11.5484 17.0749 11.9614C16.8381 12.3689 16.4884 12.7021 16.0258 12.9609C15.5633 13.2197 14.9878 13.3739 14.2994 13.4235L13.6386 13.9439ZM13.5477 19.3792H9.92146L10.8549 17.7353H13.5477C14.0158 17.7353 14.4068 17.6583 14.7207 17.5041C15.0346 17.3444 15.2686 17.1268 15.4228 16.8515C15.5825 16.5706 15.6624 16.243 15.6624 15.8685C15.6624 15.4775 15.5935 15.1389 15.4559 14.8525C15.3182 14.5606 15.1007 14.3376 14.8033 14.1834C14.5059 14.0237 14.1177 13.9439 13.6386 13.9439H11.3092L11.3257 12.4322H14.3572L14.8281 13.0022C15.4889 13.0242 16.0313 13.1701 16.4554 13.44C16.8849 13.7098 17.2043 14.0595 17.4136 14.489C17.6228 14.9186 17.7275 15.3812 17.7275 15.8768C17.7275 16.6422 17.5595 17.2838 17.2236 17.8014C16.8932 18.3191 16.4168 18.7128 15.7945 18.9827C15.1723 19.247 14.4233 19.3792 13.5477 19.3792ZM32.942 12.5479V14.1999H27.9114V12.5479H32.942ZM24.6486 15.4638H26.7137C26.7743 15.9924 26.8982 16.4385 27.0854 16.8019C27.2781 17.1654 27.5562 17.4407 27.9197 17.628C28.2887 17.8152 28.7705 17.9088 29.3653 17.9088C29.8444 17.9088 30.2574 17.8124 30.6043 17.6197C30.9567 17.427 31.2459 17.1544 31.4716 16.8019C31.6974 16.444 31.8654 16.02 31.9755 15.5298C32.0857 15.0342 32.1407 14.4808 32.1407 13.8695V12.8618C32.1407 12.3496 32.1022 11.8843 32.0251 11.4658C31.948 11.0417 31.8296 10.6673 31.6699 10.3424C31.5157 10.0175 31.323 9.74486 31.0917 9.52459C30.8659 9.29881 30.6016 9.12809 30.2987 9.01245C29.9958 8.89681 29.6571 8.83898 29.2827 8.83898C28.7044 8.83898 28.2363 8.93811 27.8784 9.13635C27.5205 9.3291 27.2506 9.6127 27.0689 9.98717C26.8872 10.3561 26.766 10.8022 26.7054 11.3253H24.6404C24.723 10.5158 24.9487 9.79993 25.3177 9.17766C25.6867 8.55538 26.1988 8.06802 26.8541 7.71558C27.5149 7.36314 28.3245 7.18692 29.2827 7.18692C30.0371 7.18692 30.7144 7.32184 31.3147 7.59168C31.9204 7.85601 32.4381 8.23873 32.8676 8.73986C33.2972 9.23548 33.6248 9.83298 33.8506 10.5323C34.0819 11.2317 34.1975 12.0137 34.1975 12.8783V13.8695C34.1975 14.7341 34.0847 15.5161 33.8589 16.2154C33.6386 16.9148 33.3164 17.5123 32.8924 18.0079C32.4684 18.5036 31.959 18.8835 31.3643 19.1479C30.7695 19.4122 30.1032 19.5444 29.3653 19.5444C28.3905 19.5444 27.5645 19.3709 26.8872 19.024C26.2153 18.6715 25.6922 18.1869 25.3177 17.5701C24.9432 16.9534 24.7202 16.2512 24.6486 15.4638ZM41.082 8.48379H43.4445C44.1549 8.48379 44.8074 8.60219 45.4022 8.83898C46.0024 9.07578 46.5256 9.4117 46.9716 9.84674C47.4177 10.2763 47.7646 10.7939 48.0124 11.3997C48.2602 11.9999 48.3841 12.669 48.3841 13.4069C48.3841 14.1338 48.2602 14.7974 48.0124 15.3977C47.7646 15.9979 47.4177 16.5156 46.9716 16.9506C46.5256 17.3802 46.0024 17.7106 45.4022 17.9419C44.8074 18.1731 44.1549 18.2888 43.4445 18.2888H41.082C40.3771 18.2888 39.7246 18.1731 39.1243 17.9419C38.5241 17.7106 37.9982 17.3802 37.5466 16.9506C37.1005 16.5211 36.7536 16.0089 36.5058 15.4142C36.2635 14.8139 36.1424 14.1504 36.1424 13.4235C36.1424 12.6855 36.2635 12.0165 36.5058 11.4162C36.7536 10.8104 37.1005 10.29 37.5466 9.855C37.9982 9.41445 38.5241 9.07578 39.1243 8.83898C39.7246 8.60219 40.3771 8.48379 41.082 8.48379ZM41.082 10.1359C40.4653 10.1359 39.9338 10.268 39.4878 10.5323C39.0417 10.7912 38.6975 11.1656 38.4552 11.6558C38.2184 12.1459 38.1 12.7351 38.1 13.4235C38.1 13.9301 38.1689 14.3817 38.3066 14.7782C38.4442 15.1746 38.6425 15.5106 38.9013 15.7859C39.1601 16.0613 39.474 16.2733 39.843 16.422C40.2119 16.5706 40.625 16.645 41.082 16.645H43.461C44.0723 16.645 44.5982 16.5156 45.0387 16.2567C45.4793 15.9924 45.8179 15.618 46.0547 15.1333C46.297 14.6487 46.4182 14.0733 46.4182 13.4069C46.4182 12.8948 46.3494 12.4377 46.2117 12.0357C46.0795 11.6282 45.884 11.284 45.6252 11.0032C45.3719 10.7223 45.0635 10.5076 44.7 10.3589C44.3366 10.2102 43.9236 10.1359 43.461 10.1359H41.082ZM43.2627 6.85651V19.8748H41.272V6.85651H43.2627ZM52.7575 16.0007L58.0937 7.35213H60.167V19.3792H58.0937V10.7223L52.7575 19.3792H50.6924V7.35213H52.7575V16.0007ZM67.7288 14.8938H64.5982V13.25H67.7288C68.274 13.25 68.7146 13.1619 69.0505 12.9857C69.3864 12.8094 69.6314 12.5671 69.7856 12.2588C69.9453 11.9449 70.0252 11.5869 70.0252 11.1849C70.0252 10.8049 69.9453 10.4497 69.7856 10.1193C69.6314 9.78341 69.3864 9.51358 69.0505 9.30982C68.7146 9.10607 68.274 9.00419 67.7288 9.00419H65.2342V19.3792H63.1609V7.35213H67.7288C68.6595 7.35213 69.4497 7.51733 70.0995 7.84775C70.7548 8.17265 71.2532 8.62422 71.5946 9.20244C71.9361 9.77515 72.1068 10.4305 72.1068 11.1684C72.1068 11.9449 71.9361 12.6112 71.5946 13.1674C71.2532 13.7236 70.7548 14.1504 70.0995 14.4477C69.4497 14.7451 68.6595 14.8938 67.7288 14.8938ZM82.345 17.7353V19.3792H75.9597V17.7353H82.345ZM76.5462 7.35213V19.3792H74.4729V7.35213H76.5462ZM81.5107 12.3744V13.9934H75.9597V12.3744H81.5107ZM82.3037 7.35213V9.00419H75.9597V7.35213H82.3037Z" fill="white"/>
            </svg>
          </div>
        </div>
        <div>
          <video class="streem streem_3" autoplay muted loop src="<?php echo get_stylesheet_directory_uri(); ?>/img/streem_s3.mp4" > </video>
        </div>
      </div>
      <img class="girl_streem" src="<?php echo get_stylesheet_directory_uri(); ?>/img/streem_woman.png" alt="">
      <div class="background">
      </div>
      <div class="background_smoke">
        <img class="bg" style="opacity: 0.3;" src="<?php echo get_stylesheet_directory_uri(); ?>/img/bg/slide_3/shadow blue.png" alt="">
        <img class="bg bg-sky" style="z-index: -1;" src="<?php echo get_stylesheet_directory_uri(); ?>/img/bg-sky.png" alt="">
        </div>
    </section>
    <section class="section section_4 custom-bg" data-slide="4">
      <div class="wrapper">
        <div class="section_4-streem">
          <video class="streem streem_4" autoplay muted loop src="<?php echo get_stylesheet_directory_uri(); ?>/img/streem_s4.mp4" > </video>
          <div class="section4__info__wrapper">
            <div class="slide_title__right">
              <h2 class="section4__title">Пребывание в топе</h2>
              <p class="section4__description">Повышенное внимание со стороны зрителей</p>
            </div>
            <div class="section4__card">
              <div class="big_title">
                80% <span>зрителей</span>
              </div>
              <div class="card_subtitle">
                Выбирают трансляцию <br> которая находится в топе
              </div>
            </div>
            <img class="bg-section-card section-4-card-1" src="<?php echo get_stylesheet_directory_uri(); ?>/img/bg-blure-card.png" alt="">
            <div class="section4__card">
              <div class="big_title">
                1% <span>зрителей</span>
              </div>
              <div class="card_subtitle">
                Совершают переход с рекламного креатива на продукт
              </div>
            </div>
            <img class="bg-section-card section-4-card-2" src="<?php echo get_stylesheet_directory_uri(); ?>/img/bg-blure-card.png" alt="">
          </div>

        </div>
        <div class="background_smoke">
          <img class="bg" style="opacity: 0.3;" src="<?php echo get_stylesheet_directory_uri(); ?>/img/bg/slide_4/shadow blue.png" alt="" />
          <img class="bg" style="opacity: 0.3;" src="<?php echo get_stylesheet_directory_uri(); ?>/img/bg/slide_4/shadow purp.png" alt="" />
        </div>
      </div>
    </section>
    <section class="section section_5" data-slide="5">
      <div class="wrapper section_5-cards">
        <div class="section_5__wrapper__left">
          <div class="blure_container section_5_blure__left purp-left">
            <div class="blure_container_content">
              <h2>Быстрый прирост зрителей</h2>
              <p> Стримеры, подключенные к нашей сети, получают поддержку для увеличения аудитории, что увеличивает охват вашей рекламы за короткий срок.</p>
            </div>
          </div>
          <img class="bg-blure-container section-5-card-1" src="<?php echo get_stylesheet_directory_uri(); ?>/img/bg/dust purp-bg-2.png" alt="">
          <div class="blure_container section_5_blure__left purp-left">
            <div class="blure_container_content">
              <h2>Осознанная и целевая аудитория</h2>
              <p>Подключение стримеров к нашей сети обеспечивает видимость на основных платформах, что гарантирует попадание их трансляций в топ и   большой рекламный потенциал.</p>
            </div>
          </div>
          <img class="bg-blure-container section-5-card-2" src="<?php echo get_stylesheet_directory_uri(); ?>/img/bg/dust purp-bg-2.png" alt="">
        </div>
        <div class="blure_container section_5_blure__right purp-right">
          <div class="blure_container_content">
            <h2>Гарантированный вывод в топ категорий</h2>
            <p>Благодаря продвинутым возможностям таргетирования и органическому росту целевой аудитории, реклама будет показана <b>заинтересованным пользователям</b></p>
          </div>
        </div>
        <img class="bg-blure-container section-5-card-3" src="<?php echo get_stylesheet_directory_uri(); ?>/img/bg/dust purp-bg-2.png" alt="">
      </div>
      <img class="girl__6" src="<?php echo get_stylesheet_directory_uri(); ?>/img/girl_6.png" alt="">
      <div class="background">
      </div>
      <div class="background_smoke">
        <img class="bg" style="opacity: 0.3;" src="<?php echo get_stylesheet_directory_uri(); ?>/img/bg/slide_5/shadow blue.png" alt="" />
        <img class="bg" style="opacity: 0.3;" src="<?php echo get_stylesheet_directory_uri(); ?>/img/bg/slide_5/shadow purp.png" alt="" />
      </div>
    </section>
    <section class="section section_6 " data-slide="6">
      <div class="wrapper section__ads">
        <div class="section__ads">
          <div class="ads_info">
            <h2 class="ads_info__title">Разнообразие форматов для усиления эффекта</h2>
            <div class="ads_info__descript flame__descript">Запуск кампании сразу в нескольких форматах — это <b>гарантия увеличения охвата и вовлечённости.</b> Каждый формат привлекает внимание своей уникальной механикой, что помогает донести ваше сообщение до широкой аудитории и повысить его запоминаемость.</div>
            <div class="ads_info__cards_container">
              <div class="ads_info__card block3__wrapper" data-format="in-stream">
                <h2>In-Stream <br> Pre-Roll</h2>
                <img class="ads_info_cards_arrow" src="<?php echo get_stylesheet_directory_uri(); ?>/img/arrow-up.svg" alt=">">
              </div>
              <div class="ads_info__card block3__wrapper" data-format="interactive-bar">
                <h2>Interactive Bar</h2>
                <img class="ads_info_cards_arrow" src="<?php echo get_stylesheet_directory_uri(); ?>/img/arrow-up.svg" alt=">">
              </div>
              <div class="ads_info__card block3__wrapper" data-format="overlay-banner">
                <h2>Overlay banner</h2>
                <img class="ads_info_cards_arrow" src="<?php echo get_stylesheet_directory_uri(); ?>/img/arrow-up.svg" alt=">">
              </div>
              <div class="ads_info__card block3__wrapper" data-format="banner">
                <h2>Banner</h2>
                <img class="ads_info_cards_arrow" src="<?php echo get_stylesheet_directory_uri(); ?>/img/arrow-up.svg" alt=">">
              </div>
            </div>
          </div>
          <img class="line-to-left" src="<?php echo get_stylesheet_directory_uri(); ?>/img/line-to-left.svg" alt="">
          <img class="dust-up for-video" src="<?php echo get_stylesheet_directory_uri(); ?>/img/bg/dust up.png" alt="">
          <img class="dust-down for-video" src="<?php echo get_stylesheet_directory_uri(); ?>/img/bg/dust down.png" alt="">
        </div>
        <div class="ads_carusel__vertical">
            <div class="video-border">
              <video class="streem streem_6" autoplay muted loop src="<?php echo get_stylesheet_directory_uri(); ?>/img/lilo_anim.mp4" > </video>
            </div>
            <div class="video-border">
              <video class="streem streem_6" autoplay muted loop src="<?php echo get_stylesheet_directory_uri(); ?>/img/streem_s4.mp4" > </video>
            </div>
            <div class="video-border">
              <video class="streem streem_6" autoplay muted loop src="<?php echo get_stylesheet_directory_uri(); ?>/img/streem_s3.mp4" > </video>
            </div>
          </div>
        <div class="background_smoke">
          <img id="shadow_purp" style="opacity: 0.3;" src="<?php echo get_stylesheet_directory_uri(); ?>/img/shadow_purp.svg" alt="" />
          <img id="shadow_blue" style="opacity: 0.3;" src="<?php echo get_stylesheet_directory_uri(); ?>/img/shadow_blue.svg" alt="" />
        </div>
      </div>
    </section>
    <section class="section section_7" data-slide="7">
      <div class="wrapper">
        <div class="section_7-streem">
          <img class="line-to-right" src="<?php echo get_stylesheet_directory_uri(); ?>/img/line-to-right.svg" alt="">
          <div class="video-border">
            <video class="streem streem_7" autoplay muted loop src="<?php echo get_stylesheet_directory_uri(); ?>/img/streem_s4.mp4" > </video>
          </div>
          <div class="section4__info__wrapper">
            <div class="slide_title__right">
              <h2 class="section4__title">In-Stream Pre-Roll</h2>
              <p class="section4__description">Широкий охват аудитории </p>
              <p>Первый шаг в стратегии продвижения бренда для максимального охвата и привлечения внимания целевой аудитории</p>
            </div>
            <div class="section4__card">
              <div class="big_title">
                0,8% - <span>CTR</span>
              </div>
            </div>
            <img class="bg-section-card section-7-card-1" src="<?php echo get_stylesheet_directory_uri(); ?>/img/bg-blure-card.png" alt="">
            <div class="section4__card">
              <div class="big_title">
                80% - <span>VTR</span>
              </div>
            </div>
            <img class="bg-section-card section-7-card-2" src="<?php echo get_stylesheet_directory_uri(); ?>/img/bg-blure-card.png" alt="">
            <div class="section4__card">
              <div class="big_title">
                80% - <span>Viewability</span>
              </div>
            </div>
            <img class="bg-section-card section-7-card-3" src="<?php echo get_stylesheet_directory_uri(); ?>/img/bg-blure-card.png" alt="">
            <button class="look_format">Посмотреть формат</button>
          </div>

        </div>
        <div class="background_smoke">
          <img class="bg" style="opacity: 0.3;" src="<?php echo get_stylesheet_directory_uri(); ?>/img/bg/slide_4/shadow blue.png" alt="" />
          <img class="bg" style="opacity: 0.3;" src="<?php echo get_stylesheet_directory_uri(); ?>/img/bg/slide_4/shadow purp.png" alt="" />
        </div>
      </div>
    </section>
    <section class="section section_8 custom-bg" data-slide="8">
      <div class="wrapper eye__wrapper">
        <div class="section_7-streem">
          <img class="line-to-right" src="<?php echo get_stylesheet_directory_uri(); ?>/img/line-to-right.svg" alt="">
          <div class="video-border">
            <video class="streem streem_8" autoplay muted loop src="<?php echo get_stylesheet_directory_uri(); ?>/img/streem_s4.mp4" > </video>
          </div>
          <div class="section4__info__wrapper">
            <div class="slide_title__right">
              <h2 class="section4__title">Interactive Bar</h2>
              <p class="section4__description">Гибкие настройки таргетинга </p>
              <p>Может быть адаптирован под разные форматы видеоплатформ и каналов.</p>
            </div>
            <div class="section4__card">
              <div class="big_title">
                1,2% - <span>CTR</span>
              </div>
              <div class="card_subtitle">
                Переходы на стрим
              </div>
            </div>
            <img class="bg-section-card section-8-card-1" src="<?php echo get_stylesheet_directory_uri(); ?>/img/bg-blure-card.png" alt="">
            <div class="section4__card">
              <div class="big_title">
                100% - <span>Viewability</span>
              </div>
              <div class="card_subtitle">
                Видимость креатива
              </div>
            </div>
            <img class="bg-section-card section-8-card-2" src="<?php echo get_stylesheet_directory_uri(); ?>/img/bg-blure-card.png" alt="">
            <button class="look_format">Посмотреть формат</button>
          </div>
        </div>
        <div class="background_smoke">
          <img class="bg" style="opacity: 0.3;" src="<?php echo get_stylesheet_directory_uri(); ?>/img/bg/slide_4/shadow blue.png" alt="" />
          <img class="bg" style="opacity: 0.3;" src="<?php echo get_stylesheet_directory_uri(); ?>/img/bg/slide_4/shadow purp.png" alt="" />
        </div>
      </div>
    </section>
    <section class="section section_9 custom-bg" data-slide="9">
      <div class="wrapper">
        <div class="section_7-streem">
          <img class="line-to-right" src="<?php echo get_stylesheet_directory_uri(); ?>/img/line-to-right.svg" alt="">
          <div class="video-border">
            <video class="streem streem_8" autoplay muted loop src="<?php echo get_stylesheet_directory_uri(); ?>/img/streem_s3.mp4" > </video>
          </div>
          <div class="section4__info__wrapper">
            <div class="slide_title__right">
              <h2 class="section4__title">Overlay banner</h2>
              <p class="section4__description">
                Высокая видимость
              </p>
              <p>
                <b>Возможность анимированной
                визуализации</b> для привлечения внимания
                на фоне основного контента стрима
              </p>
              <h3>
                Запоминаемость
              </h3>
              <p>Повышает вероятность того, что <b>зрители запомнят бренд</b> и его продукт.</p>
            </div>
            <div class="section4__card">
              <div class="big_title">
                100% - <span>Viewability</span>
              </div>
              <div class="card_subtitle">
                Видимость креатива
              </div>
            </div>
            <img class="bg-section-card section-9-card-1" src="<?php echo get_stylesheet_directory_uri(); ?>/img/bg-blure-card.png" alt="">
            <button class="look_format">Посмотреть формат</button>
          </div>

        </div>
        <div class="background_smoke">
          <img class="bg" style="opacity: 0.3;" src="<?php echo get_stylesheet_directory_uri(); ?>/img/bg/slide_4/shadow blue.png" alt="" />
          <img class="bg" style="opacity: 0.3;" src="<?php echo get_stylesheet_directory_uri(); ?>/img/bg/slide_4/shadow purp.png" alt="" />
        </div>
      </div>
    </section>
    <section class="section section_10 custom-bg" data-slide="10">
      <div class="wrapper sales__wrapper">
        <div class="section_7-streem">
          <img class="line-to-right" src="<?php echo get_stylesheet_directory_uri(); ?>/img/line-to-right.svg" alt="">
          <div class="video-border">
            <video class="streem streem_8" autoplay muted loop src="<?php echo get_stylesheet_directory_uri(); ?>/img/streem_s4.mp4" > </video>
          </div>
          <div class="section4__info__wrapper">
            <div class="slide_title__right">
              <h2 class="section4__title">Banner</h2>
              <p class="section4__description">Повышение конверсии аудитории</p>
              <p>Уникальные УТП позволяют повысить уровень конверсии, а так же расширяют возможности аналитики для оптимизации рекламного бюджета.</p>
            </div>
            <div class="section4__card">
              <div class="big_title">
                1% - <span>CTR</span>
              </div>
              <div class="card_subtitle">
                Переходы со стрима <br> на страницу продукта
              </div>
            </div>
            <img class="bg-section-card section-10-card-1" src="<?php echo get_stylesheet_directory_uri(); ?>/img/bg-blure-card.png" alt="">
            <div class="section4__card">
              <div class="big_title">
                70% - <span>Viewability</span>
              </div>
              <div class="card_subtitle">
                Видимость креатива
              </div>
            </div>
            <img class="bg-section-card section-10-card-2" src="<?php echo get_stylesheet_directory_uri(); ?>/img/bg-blure-card.png" alt="">
          </div>

        </div>
        <div class="background_smoke">
          <img class="bg" style="opacity: 0.3;" src="<?php echo get_stylesheet_directory_uri(); ?>/img/bg/slide_4/shadow blue.png" alt="" />
          <img class="bg" style="opacity: 0.3;" src="<?php echo get_stylesheet_directory_uri(); ?>/img/bg/slide_4/shadow purp.png" alt="" />
        </div>
      </div>
    </section>

    <section class="section section_11" data-slide="11">
      <div class="wrapper">
        <div>
          <div class="flame_block_with_img_outline top__left">
            <img class="img__outline_planet" src="<?php echo get_stylesheet_directory_uri(); ?>/img/cyber_planet.png" alt="">
            <div class="text_flame_block">
              <h2 class="flame__title">Работа сразу с большой сетью</h2>
              <p class="flame__descript">Подключение к сети позволяет существенно экономить собственные ресурсы и оптимизировать временные затраты на всех этапах сотрудничества благодаря общению с персональным менеджером.</p>
            </div>
          </div>
          <div class="flame_block_with_img_outline center__right">
            <img class="img__outline" src="<?php echo get_stylesheet_directory_uri(); ?>/img/locked.png" alt="">
            <div class="text_flame_block">
              <h2 class="flame__title">Модерация и качество контента</h2>
              <p class="flame__descript">Стримеры проходят строгий отбор и обучение, что гарантирует создание безопасного для бренда контента. Ваша реклама появляется в модерируемом окружении.</p>
            </div>
          </div>
          <div class="flame_block_with_img_outline bottom_left">
            <img class="img__outline" src="<?php echo get_stylesheet_directory_uri(); ?>/img/coins.png" alt="">
            <div class="text_flame_block">
              <h2 class="flame__title">Конкурентоспособная стоимость</h2>
              <p class="flame__descript">
                Мы всегда готовы предложить наиболее выгодные
                условия сотрудничества, гарантируя сохранение качества
                предоставления наших услуг.
              </p>
            </div>
          </div>
        </div>
        
        <div class="background">
        </div>
        <div class="background_smoke">
          <img class="bg" style="opacity: 0.3;" src="<?php echo get_stylesheet_directory_uri(); ?>/img/bg/slide_11/shadow blue.png" alt="" />
          <img class="bg" style="opacity: 0.3;" src="<?php echo get_stylesheet_directory_uri(); ?>/img/bg/slide_11/shadow purp.png" alt="" />
        </div>
      </div>
    </section>

    <section class="section section_12" data-slide="12">
      <div class="wrapper needed_section">
        <div class="needed_col__wrapper">
          <div class="needed_col reserv_col">
            <img class="needed__image shild" src="<?php echo get_stylesheet_directory_uri(); ?>/img/cyber_shild.png" alt="shild">
            <h2 class="needed_col__title">Бронирование медиаплана</h2>
            <p class="needed_col__descr"> <b>Первый шаг — это бронирование медиаплана.</b> На этом этапе важно определить целевую аудиторию, выбрать платформы и форматы рекламы, а также установить бюджет и график кампании.</p>
          </div>
          <img class="bg-needed_col__image shild" src="<?php echo get_stylesheet_directory_uri(); ?>/img/bg/dust-purp-12.png" alt="bg-dust-purp-12">
          <div class="needed_col create_col">
            <img class="needed__image figma" src="<?php echo get_stylesheet_directory_uri(); ?>/img/figma_purp.png" alt="figma">
            <h2 class="needed_col__title">Создание рекламных материалов</h2>
            <p class="needed_col__descr"> Следующим шагом является <b>создание качественных рекламных материалов.</b> <br> <b>Это включает в себя</b> разработку, баннеров, текстовых объявлений и других креативных элементов.</p>
          </div>
          <img class="bg-needed_col__image figma" src="<?php echo get_stylesheet_directory_uri(); ?>/img/bg/dust-purp-12.png" alt="bg-dust-purp-12">
          <div class="needed_col start_col">
            <img class="needed__image roket" src="<?php echo get_stylesheet_directory_uri(); ?>/img/roket.png" alt="roket">
            <h2 class="needed_col__title">Запуск и реализация</h2>
            <p class="needed_col__descr"> После бронирования медиаплана и создания рекламных материалов наступает <b>этап запуска и реализации кампании.</b> <br>
              Успешная реализация включает в себя <b>постоянную поддержку и обратную связь</b>, чтобы обеспечить достижение поставленных целей и максимальную отдачу от вложений.
          </div>
          <img class="bg-needed_col__image roket" src="<?php echo get_stylesheet_directory_uri(); ?>/img/bg/dust-purp-12.png" alt="bg-dust-purp-12">
        </div>
        <a class="btn__blue" href="/">СМОТРЕТЬ ТТ</a>
        <div class="background">
        </div>
        <div class="background_smoke">
          <img class="bg" style="opacity: 0.3;" src="<?php echo get_stylesheet_directory_uri(); ?>/img/bg/slide_4/shadow blue.png" alt="" />
          <img class="bg" style="opacity: 0.3;" src="<?php echo get_stylesheet_directory_uri(); ?>/img/bg/slide_4/shadow purp.png" alt="" />
        </div>
      </div>
    </section>

    <section class="section section_13" data-slide="13">
      <div class="wrapper lilo__wrapper">
        <div class="content__lilo">
          <img class="logo__big" src="<?php echo get_stylesheet_directory_uri(); ?>/img/logo-lilo-big.svg" alt="LILO">
          <img class="dots__purp" src="<?php echo get_stylesheet_directory_uri(); ?>/img/dots-purp.svg" alt="...">
          <div class="content__lilo__text">
            <p>
              <b>
                Мы уверены, что будем полезны вам в продвижении вашего бренда!
              </b>
            </p>
            <p>
              Наша команда сэкономит ваше время: от планирования и создания рекламных материалов до запуска и оптимизации кампаний.
            </p>
            <p>
              Мы всегда готовы предоставить дополнительную информацию и помочь вам настроить успешную рекламную кампанию.
            </p>
          </div>
        </div>
        <a class="btn__blue btn__blue_sreemers_list" href="/">СПИСОК СТРИМЕРОВ</a>
        <img
          class="background-img woman_vr"
          src="<?php echo get_stylesheet_directory_uri(); ?>/img/girl_witcher.png"
          alt="woman wearing vr glasses gaming"
        />
        <div class="background">
        </div>
        <div class="background_smoke">
          <img id="shadow_purp" style="opacity: 0.3;" src="<?php echo get_stylesheet_directory_uri(); ?>/img/shadow_purp.svg" alt="" />
          <img id="shadow_blue" style="opacity: 0.3;" src="<?php echo get_stylesheet_directory_uri(); ?>/img/shadow_blue.svg" alt="" />
        </div>
      </div>
    </section>

  </div>
</div>
<div class="p-nav">
  <div class="p-nav__list">
    <div class="p-nav__item active" data-slide="1">
      <p class="p-nav__item--title">Lilo</p>
    </div>
    <div class="p-nav__item" data-slide="2">
      <p class="p-nav__item--title">Платформы</p>
    </div>
    <div class="p-nav__item" data-slide="3">
      <p class="p-nav__item--title">Наша сеть</p>
    </div>
    <div class="p-nav__item" data-slide="4">
      <p class="p-nav__item--title">Контент всегда в топе</p>
    </div>
    <div class="p-nav__item" data-slide="5">
      <p class="p-nav__item--title">Стример получает</p>
    </div>
    <div class="p-nav__item" data-slide="7">
      <p class="p-nav__item--title">Форматы (Bar in video)</p>
    </div>
    <div class="p-nav__item" data-slide="8">
      <p class="p-nav__item--title">Форматы (Overlay banner)</p>
    </div>
    <div class="p-nav__item" data-slide="9">
      <p class="p-nav__item--title">Форматы (Banner)</p>
    </div>
    <div class="p-nav__item" data-slide="11">
      <p class="p-nav__item--title">Преимущества работы с лило</p>
    </div>
    <div class="p-nav__item" data-slide="12">
      <p class="p-nav__item--title">Что нужно для запуска?</p>
    </div>
    <div class="p-nav__item" data-slide="13">
      <p class="p-nav__item--title">Запуск</p>
    </div>
   
    <!--<div class="p-nav__item" data-slide="9">
      <p class="p-nav__item--title">Formats</p>
    </div>-->
  </div>
  <div class="p-nav__panel">
    <div class="p-nav__left"><img src="<?php echo get_stylesheet_directory_uri(); ?>/img/angle.svg" alt=""></div>
    <div class="p-nav__number">1</div>
    <div class="p-nav__right"><img src="<?php echo get_stylesheet_directory_uri(); ?>/img/angle.svg" alt=""></div>
  </div>
</div>
<?php get_footer();?>