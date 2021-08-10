import '../../node_modules/focus-visible/dist/focus-visible';
import $ from 'jquery';

import '../bootstrap-4.5.3-dist/js/bootstrap.bundle';

import '../scss/main.scss';

// == pages ======================
import '../index.html';
import '../contentPage.html';
import '../category-page.html';
import '../store-card.html';
import '../store-card-show-message.html';
import '../cabinet-entity.html';
import '../cabinet-profile.html';
import '../cabinet-password.html';
import '../cabinet-480.html';
import '../cabinet-entity-480.html';
import '../cabinet-profile-480.html';
import '../cabinet-password-480.html';
import '../text-page.html';
import '../page-404.html';
import '../coming-soon.html';
import '../common-page.html';

// == BeFreeApp ========================
import '../befreeApp/app.html';
import { toggleShowMobileSearch } from '../befreeApp/components/header/header';
import { asidePanelToggleGroup, toggleShowBoxHandler } from '../befreeApp/components/side-panel/side-panel';
import { resultToggleGroup } from '../befreeApp/components/result/result';
import { initRangeSlider } from '../befreeApp/components/range-filter/range-filter';
import { starsInit } from '../befreeApp/components/stars/stars';
import { initScrollBar } from '../befreeApp/scripts';
// == // BeFreeApp ========================

// == and pages ======================

// == plagins ===================
import { da } from './da';
import { convertImgToSvg } from './function';
import { inputMaskInit } from './inputmask';
import { popupInit } from '../popups/popup';
// == plagins ===================


// == blocks =================
import { mobileMenuDropdownHandler } from '../blocks/header/header';
import { burger } from '../blocks/burger/burger';
import { cookieInit } from '../blocks/cookie-message/cookie-message';
import '../blocks/home-map/home-map';
import { cryptocurrencySliderInit, popularBrandInit, sliderInfoBlockInit, sharesSliderInit } from '../blocks/sliders/sliders';
import { promoHeaderBottomBtnHandler } from '../blocks/promo-header/promo-header';
import { categoryPageTextMobileHandler } from '../blocks/category-page-text/category-page-text';
import { productsFilterHandler } from '../blocks/products-filter/products-filter';
import { ratingInit } from '../blocks/rating/rating';
import { selectsHandler } from '../blocks/selects/selects';
import { categoryHeaderMobileHandler } from '../blocks/category-header/category-header';
import { infoBLockTabletHandler } from '../blocks/info-block/info-block';
import { changeFedbackformStateInTabsBlock, tabsHandler } from '../blocks/tabs-block/tabs-block';
import { entityBlockHandler } from '../blocks/entity-block/entity-block';
import { showHidePassword } from '../blocks/forms/forms';
// == and blocks =================



var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };


$(document).ready(function () {
	document.body.classList.add('is-load');
	convertImgToSvg();
	cookieInit();
	da();
	inputMaskInit();
	popupInit();

	selectsHandler();
	mobileMenuDropdownHandler();
	cryptocurrencySliderInit();
	sliderInfoBlockInit();
	popularBrandInit();
	sharesSliderInit();
	promoHeaderBottomBtnHandler();
	categoryPageTextMobileHandler();
	productsFilterHandler();
	ratingInit();
	categoryHeaderMobileHandler();
	infoBLockTabletHandler();
	tabsHandler();
	changeFedbackformStateInTabsBlock();
	entityBlockHandler();
	showHidePassword();


	// == BeFreeApp ========================
	toggleShowMobileSearch();
	asidePanelToggleGroup();
	resultToggleGroup();
	toggleShowBoxHandler();
	initRangeSlider();
	initScrollBar();
	starsInit();
	// == // BeFreeApp ========================



	// === Проверка, поддержка браузером формата webp ==================================================================

	function testWebP(callback) {

		var webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}

	testWebP(function (support) {

		if (support == true) {
			document.querySelector('body').classList.add('webp');
		} else {
			document.querySelector('body').classList.add('no-webp');
		}
	});


	// ==== ADD PADDING-TOP ================================
	{
		let wrapper = document.querySelector('.wrapper');
		if (wrapper) {
			let header = document.querySelector('.header');
			if (header) {
				let headerHeight = header.clientHeight;
				wrapper.style.paddingTop = headerHeight + 'px';
			}

		}
	}
	// ==== AND ADD PADDING-TOP ================================

	burger();

});

