/*!
 * Plugin Name: jQuery Littlebox for WP
 * Plugin URI: http://blog.ilooker.tk/
 * Description: Modded from Joel Vardy's lightbox
 * Version: 1.0
 * Author: Rufus
 * Author URI: http://blog.ilooker.tk/
 * Copyright 2011
 */
/* littlebox function
 * PS, I replace lightbox with littlebox, for better compatibility with lightbox clones, and made some changes to validate jshint. */
function littlebox(method, title, url) {
	if (method === 'create') {
		$('body').append('<div id="littlebox"><div id="littlebox_content"><a id="littlebox_close" href="javascript:void(0);" onclick="littlebox(\'remove\');" title="Close">X</a><img alt="' + title + '" src="' + url + '" /><h3>' + title + '</h3></div></div>');
		var littlebox_container = $('#littlebox'),
		littlebox_content = $('#littlebox_content'),
		littlebox_img = $("#littlebox_content img");
		popupStatus=1;
		littlebox_container.css({
			'background' : 'rgba(0,0,0,0.5)',
			'display' : 'none',
			'height' : $(document).height(),
			'left' : '0%',
			'margin' : '0',
			'padding' : '0',
			'position' : 'absolute',
			'top' : '0%',
			'width' : $(document).width(),
			'z-index' : '1201'
		});
		littlebox_content.css({
			'background' : '#ffffff',
			'color' : '#101010',
			'display' : 'none',
			'left' : '50%',
			'padding' : '15px 15px 10px',
			'position' : 'fixed',
			'top' : '50%',
			'border-radius': '8px'
		});
		$('#littlebox_close').css({
			'background' : '#ff8900',
			'border-radius' : '8px',
			'color' : '#ffffff',
			'display' : 'block',
			'font-size' : '16px',
			'height' : '19px',
			'padding' : '6px',
			'position' : 'absolute',
			'right' : '-7px',
			'text-align' : 'center',
			'text-decoration' : 'none',
			'top' : '-7px',
			'width' : '19px'
		});
		$('h3', littlebox_content).css({
			'color' : '#101010',
			'margin-top' : '5px'
		});
		littlebox_container.fadeIn('300');
		$('#littlebox_content img').load(function () {
			littlebox_content.css({
				'display' : 'block',
				'position' : 'absolute',
				'visibility' : 'hidden',
				'max-width' : '80%',
				'max-height' : '80%'
			});
			littlebox_img.css({
				'max-width' : '90%',
				'max-height' : '90%'
			});
			var margin_top = ((littlebox_content.outerHeight() / 2) * -1);
			var margin_left = ((littlebox_content.outerWidth() / 2) * -1);
			littlebox_content.css({
				'display' : 'none',
				'margin-top' : margin_top,
				'margin-left' : margin_left,
				'position' : 'fixed',
				'visibility' : 'visible',
				'text-align' : 'center'
			});
			littlebox_content.fadeIn('500');
		});
	} else if (method === 'remove') {
		$('#littlebox').remove();
	}
}

$(function () {
    $(".entry img:not(a>img)").live("hover", function () {
        var img_property = [this.title, this.getAttribute("alt"), document.title, "\u5168\u5c4f\u67e5\u770b", this.getAttribute("src")],
            href_title = null,
            d;
        for (d in img_property) {
			if (img_property[d]) {
				href_title = img_property[d];
				break;
			}
		}
        $(this).wrap("<a href=" + img_property[4] + ' class="littlebox" title="' + href_title + '"></a>').click(function () {
            littlebox("create", href_title, img_property[4]);
            return !1;
        });
    });
});
$(document).keypress(function(e){
	if(e.keyCode==27 && popupStatus==1){
		littlebox('remove');
	}
});