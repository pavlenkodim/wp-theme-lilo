<!DOCTYPE html>
<html lang="ru" translate="no" style="margin-top:0 !important">
<head>
  <script src="<?php echo get_stylesheet_directory_uri(); ?>/js/pace.min.js" data-pace-options='{"eventLag": false,"restartOnRequestAfter": false}'></script>
  <?php
  // Регистрирую стили
  $current_url = $_SERVER['REQUEST_URI'];
  wp_register_style('normalize', get_template_directory_uri() . '/css/normalize.css', array(), '1.0', 'screen');
  wp_register_style('pace', get_template_directory_uri() . '/css/pace-theme-default.min.css', array(), '1.0', 'screen');
  wp_register_style('style', get_template_directory_uri() . '/css/style.css?v=71', array(), '1.0', 'screen'); 
  wp_register_style('background', get_template_directory_uri() . '/css/background.css?', array(), '1.0', 'screen');  

  // Подключаю стили
  wp_enqueue_style('normalize');
  wp_enqueue_style('pace');
  wp_enqueue_style('background');
  wp_enqueue_style('main');
  wp_enqueue_style('style');
  ?>
  
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="icon" href="<?php echo get_stylesheet_directory_uri(); ?>/favicon.ico" type="image/x-icon" />
  <script type="module" src="<?php echo get_stylesheet_directory_uri(); ?>/js/smoke.js"></script>
  <?php wp_head() ?>
</head>
<body>
	<div class="loader">
		<img src="<?php echo get_stylesheet_directory_uri(); ?>/img/logo-lilo.svg" alt="" class="loader__logo">
	</div>
  <div class="warning">
    <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/logo-lilo.svg" alt="" class="warning__logo">
    <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/desktop2.svg" alt="" class="warning__turn">
    <p>Сайт доступен<br>только на десктопной<br>версии</p>
  </div>
	<div class="page">
		<div class="header">
			<div class="wrapper">
        <div class="logo__wrapper-unstable">
				  <a class="logo__wrapper" href="/">
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/logo-lilo.svg" alt="LILO" class="logo">
          </a>
          <img class="dots" src="<?php echo get_stylesheet_directory_uri(); ?>/img/dots-white.svg" alt="">
          <h1 class="title__head">Платформы</h1>
        </div>
        <a class="dev-back link active" href="/">back to main <img src="<?php echo get_stylesheet_directory_uri(); ?>/img/close.svg" alt=""></a>			</div>
		</div>
