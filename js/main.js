$(function(){

	$('.form').find('input, textarea').on('keyup blur focus', function (e) {

		var $this = $(this),
		label = $this.prev('label');

		if (e.type === 'keyup') {
			if ($this.val() === '') {
				label.removeClass('active highlight');
			} else {
				label.addClass('active highlight');
			}
		} else if (e.type === 'blur') {
			if( $this.val() === '' ) {
				label.removeClass('active highlight');
			} else {
				label.removeClass('highlight');
			}
		} else if (e.type === 'focus') {

			if( $this.val() === '' ) {
				label.removeClass('highlight');
			}
			else if( $this.val() !== '' ) {
				label.addClass('highlight');
			}
		}

	});

	$('.tab a').on('click', function (e) {

		e.preventDefault();

		$(this).parent().addClass('active');
		$(this).parent().siblings().removeClass('active');

		target = $(this).attr('href');

		$('.tab-content > div').not(target).hide();

		$(target).fadeIn(400);

	});


	$('.about-vine__main-slider').slick({
		fade: true,
		nextArrow: '<button class="slider-btnnext"><img src="images/arrow-right.svg" alt=""></button>',
		dots: true,
		responsive: [
		{
			breakpoint: 521,
			settings: {
				dots: false
			}
		}
		]
	});
});

const animItems = document.querySelectorAll('.anim-items');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;

			let animItemPoint = window.innerHeight;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight;
			}


			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('active');
			} else {
				if (!animItem.classList.contains('anim-one-play')) {
					animItem.classList.remove('active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
		scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
		scrollTop = window.pageXOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	setTimeout(() => {
		animOnScroll();
	}, 300);
}
