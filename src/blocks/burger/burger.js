import $ from 'jquery';
import {_slideToggle} from '../../js/function';
// === Burger Handler =====================================================================
	function burgerBtnAnimation(e) {
		$('.burger span:nth-child(1)').toggleClass('first');
		$('.burger span:nth-child(2)').toggleClass('second');
		$('.burger span:nth-child(3)').toggleClass('third');
		$('.burger span:nth-child(4)').toggleClass('fourth');

		let classNameElem = document.querySelector('.burger').dataset.activel;
		let header = document.querySelector('.header');
		
		document.querySelector(`.${classNameElem}`).classList.toggle('open');
		_slideToggle(document.querySelector(`.${classNameElem}`));

		header.classList.toggle('isOpenMenu');
		document.body.classList.toggle('lock');
	}

	export function burger() {
		$('.burger').click((e) => burgerBtnAnimation(e));
	}
// === Burger Handler =====================================================================	