;(function($, window, document, undefined) {
	var $win = $(window);
	var $doc = $(document);

	$doc.ready(function() {
		// Slider
		$('.slider .slides').carouFredSel({
			auto: false,
			responsive: true,
			pagination: {
				container: '.slider-paging'
			},
			prev: {
				button: ".slider-actions .slider-prev",
				key: "left"
			},
			next: {
				button: ".slider-actions .slider-next",
				key: "right"
			},
			swipe: {
				onMouse: true,
				onTouch: true
         	},
			onCreate: function () {
			    $(window).on('resize', function () {
					$('.slider .slides').parent().add($('.slider .slides')).height($('.slider .slides').children().first().height());
			    }).trigger('resize');
			}
		});

		// Proportional image resize
		$('.slide-image img').fullscreener();

		// Mobile navigation
		$('.nav-btn').on('click', function(e) {
			$(this).toggleClass('active');

			$('.nav').stop(true, true).slideToggle(200);

			e.preventDefault();
		});

		if ($win.width() > 767) {
			$('.nav').addClass('visible');
		} else {
			$('.nav').removeClass('visible');
		};

		$win.resize(function() {
			if ($win.width() > 767) {
				$('.nav').addClass('visible');
			} else {
				$('.nav').removeClass('visible');
			};
		});
	});
})(jQuery, window, document);
