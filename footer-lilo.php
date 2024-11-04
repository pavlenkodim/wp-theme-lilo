  <div class="footer">
    <div class="wrapper">
      <div class="bottom-menu">
        <a href="/requisites/" class="link">Requisites</a>
        <a href="/sitemap/" class="link" style="pointer-events:none">Site map </a>
        <a href="#" class="link">Confidentiality</a>
      </div>
      <p>Foxible © 2021–<?=date('Y')?></p>
    </div>
  </div>
</div>
<script type="text/javascript" src="<?php echo get_stylesheet_directory_uri(); ?>/js/jquery-2.1.1.min.js"></script>
<script type="text/javascript" src="<?php echo get_stylesheet_directory_uri(); ?>/js/scrollbooster.min.js"></script>
<script type="text/javascript" src="<?php echo get_stylesheet_directory_uri(); ?>/js/jquery.inputmask.min.js"></script>
<script type="text/javascript" src="<?php echo get_stylesheet_directory_uri(); ?>/js/slick.min.js"></script>
<? wp_footer() ?>
<script type="text/javascript" src="<?php echo get_stylesheet_directory_uri(); ?>/lilo/js/main.js?v=38"></script>
<?
$current_url = $_SERVER['REQUEST_URI'];
  if(!(strpos($current_url, '/postcampaign') === false)){
    ?>
    <script type="text/javascript" src="<?php echo get_stylesheet_directory_uri(); ?>/js/stats.js?v=7"></script>
    <?
  }
?>
</body>
</html>
