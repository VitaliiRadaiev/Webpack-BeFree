import $ from 'jquery';

//SlideToggle
export function _slideUp(target, duration = 500) {
	target.style.transitionProperty = 'height, margin, padding';
	target.style.transitionDuration = duration + 'ms';
	target.style.height = target.offsetHeight + 'px';
	target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	window.setTimeout(() => {
		target.style.display = 'none';
		target.style.removeProperty('height');
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
export function _slideDown(target, duration = 500) {
	target.style.removeProperty('display');
	let display = window.getComputedStyle(target).display;
	if (display === 'none')
		display = 'block';

	target.style.display = display;
	let height = target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	target.offsetHeight;
	target.style.transitionProperty = "height, margin, padding";
	target.style.transitionDuration = duration + 'ms';
	target.style.height = height + 'px';
	target.style.removeProperty('padding-top');
	target.style.removeProperty('padding-bottom');
	target.style.removeProperty('margin-top');
	target.style.removeProperty('margin-bottom');
	window.setTimeout(() => {
		target.style.removeProperty('height');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
export function _slideToggle (target, duration = 500) {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		if (window.getComputedStyle(target).display === 'none') {
			return _slideDown(target, duration);
		} else {
			return _slideUp(target, duration);
		}
	}
}
//========================================




export function convertImgToSvg() {
    $('img.img-svg').each(function(){
        var $img = $(this);
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
        $.get(imgURL, function(data) {
          var $svg = $(data).find('svg');
          if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
          }
          $svg = $svg.removeAttr('xmlns:a');
          if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
          }
          $img.replaceWith($svg);
        }, 'xml');
      });
}





//Spollers
export function spollerInit() {
	let spollers = document.querySelectorAll("._spoller");
	if (spollers.length > 0) {
		for (let index = 0; index < spollers.length; index++) {
			const spoller = spollers[index];
			spoller.addEventListener("click", function (e) {
				e.preventDefault();
				if (spoller.classList.contains('_spoller-992') && window.innerWidth > 992) {
					return false;
				}
				if (spoller.classList.contains('_spoller-768') && window.innerWidth > 768) {
					return false;
				}
				if (spoller.closest('._spollers').classList.contains('_one')) {
					let curent_spollers = spoller.closest('._spollers').querySelectorAll('._spoller');
					for (let i = 0; i < curent_spollers.length; i++) {
						let el = curent_spollers[i];
						if (el != spoller) {
							el.classList.remove('_active');
							el.parentElement.classList.remove('_active');
							_slideUp(el.nextElementSibling);
						}
					}
				}
				spoller.classList.toggle('_active');
				console.log(spoller.parentElement);
				
				if(spoller.classList.contains('_active')) {
					spoller.parentElement.classList.add('_active');
				} else {
					spoller.parentElement.classList.remove('_active');
				}
				_slideToggle(spoller.nextElementSibling);
			});
		}
	}
}
// === // Spollers ==================================================================

