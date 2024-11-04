$(document).ready(function(){
	$('.post__creative iframe').load(function(){
		$('.post__creative').removeClass('loading');
		$('.post__creative').addClass('active');
	});
	var item,link;
	$('.post__nav--item').click(function(){
		$('.post__nav--item.active').removeClass('active');
		$('.post__item.active').removeClass('active');
		item=$(this).data('item');
		$(this).addClass('active');
		$('.post__item[data-item="'+item+'"]').addClass('active');
		$('.post__item[data-item="'+item+'"] .post__table--top .post__table--inner').scrollTop(0);
		link=$(this).data('link');
		if(link !== ''){
			$('.post__creative').addClass('loading');
			$('.post__creative').removeClass('active');
		}
		setTimeout(function(){
			$('.post__creative iframe').attr('src',link);
		},300);
	});
	var obj;
	$('.post__switch--item').click(function(){
		obj=$(this);
		post=$(this).data('post');
		$('.post__creative').addClass('loading');
		$('.post__creative').removeClass('active');
		$('.post__inner.active').removeClass('active');
		$('.post__inner[data-post="'+post+'"]').addClass('active');
		$('.post__switch--item').each(function(){
			if(!($(this).addClass('active'))){
				$(this).addClass('active');
			}
		});
		obj.removeClass('active');
		setTimeout(function(){
			$('.post__creative iframe').attr('src',obj.data('src'));
		},300);
		if($('.post__table--bottom').length<1){
			$('.post__table--bottom').hide();
		}
	});
	if($('.post__inner.active').find('.post__item').length<1){
		//$('.post__left').css('display','none');
		$('.post__nav--group p').text('Versions:');
	}
});