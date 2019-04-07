(function ($) {

	var $window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$banner = $('#banner');
		$con = $('#con')

	// Breakpoints.
	breakpoints({
		wide: ['1281px', '1680px'],
		normal: ['981px', '1280px'],
		narrow: ['841px', '980px'],
		narrower: ['737px', '840px'],
		mobile: [null, '736px']
	});

	// Play initial animations on page load.
	$window.on('load', function () {
		window.setTimeout(function () {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Scrolly.
	$('.scrolly').scrolly({
		speed: 1000,
		offset: function () {
			return $header.height() + 10;
		}
	});

	// Dropdowns.
	$('#nav > ul').dropotron({
		mode: 'fade',
		noOpenerFade: true,
		expandMode: (browser.mobile ? 'click' : 'hover')
	});

	// Nav Panel.

	// Button.
	$(
			'<div id="navButton">' +
			'<a href="#navPanel"><i class="fa fa-bars"></i></a>' +
			'</div>'
		)
		.appendTo($body);

	// Panel.
	$(
			'<div id="navPanel">' +
			'<nav>' +
			$('#nav').navList() +
			'</nav>' +
			`<ul>` +
			`<li><a href="https://github.com/flaszuu"><i class="fa fa-github"></i></a></li>` +
			`<li><a href="https://www.instagram.com/bartekprofic/"><i class="fa fa-instagram"></i></a></li>` +
			`<li><a href="#popup"><i class="fa fa-facebook-square"></i></a></li>` +
			`<li><a href="https://discord.gg/FbCpvZx"><i class="fa fa-discord-alt"></i></a></li>` +
			`</ul>` +
			'</div>'
		)
		.appendTo($body)
		.panel({
			delay: 500,
			hideOnClick: true,
			hideOnSwipe: true,
			resetScroll: true,
			resetForms: true,
			side: 'left',
			target: $body,
			visibleClass: 'navPanel-visible'
		});

	// Fix: Remove navPanel transitions on WP<10 (poor/buggy performance).
	if (browser.os == 'wp' && browser.osVersion < 10)
		$('#navButton, #navPanel, #page-wrapper')
		.css('transition', 'none');

	// Header.
	if (!browser.mobile &&
		$header.hasClass('alt') &&
		$banner.length > 0) {

		$('#open').scrollex({
			terminate: function () {
				$con.addClass('backed');
			},
			enter: function () {
				$con.removeClass('backed');
			},
			leave: function () {
				$con.addClass('backed');
			}
		});

		$window.on('load', function () {

			$banner.scrollex({
				bottom: $header.outerHeight(),
				terminate: function () {
					$header.removeClass('alt');
				},
				enter: function () {
					$header.addClass('alt reveal');
				},
				leave: function () {
					$header.removeClass('alt');
				}
			});

		});

	}

})(jQuery);

TweenMax.staggerFrom(".icons li", 1, {
	delay: 2,
	opacity: 0,
	y: 40,
	ease: Expo.easeInOut
}, 0.2);
TweenMax.from("#header", 1.6, {
	delay: 1.5,
	opacity: 0,
	y: 30,
	ease: Expo.easeInOut
});
TweenMax.from("#banner", 1.6, {
	delay: 2.5,
	opacity: 0,
	ease: Expo.easeInOut
});
TweenMax.from("#banner", 1, {
	delay: 3,
	rotation: -360,
	ease: Expo.easeInOut
});
TweenMax.from(".bottom", 1.6, {
	delay: 1.5,
	opacity: 0,
	y: 30,
	ease: Expo.easeInOut
});

function goBack() {
	window.history.back();
}

var rellax = new Rellax('.rellax');