import 'focus-visible';
import $ from 'jquery';

import '@site/bootstrap-4.5.3-dist/js/bootstrap.bundle';

import '@site/scss/main.scss';

// == pages ======================
import '@site/index.html';
import '@site/contentPage.html';
import '@site/category-page.html';
import '@site/store-card.html';
import '@site/store-card-show-message.html';
import '@site/cabinet-entity.html';
import '@site/cabinet-profile.html';
import '@site/cabinet-password.html';
import '@site/cabinet-480.html';
import '@site/cabinet-entity-480.html';
import '@site/cabinet-profile-480.html';
import '@site/cabinet-password-480.html';
import '@site/text-page.html';
import '@site/page-404.html';
import '@site/coming-soon.html';
import '@site/common-page.html';

// == BeFreeApp ========================
import '@site/befreeApp/app.html';
import { toggleShowMobileSearch } from '@site/befreeApp/components/header/header';
import { asidePanelToggleGroup, toggleShowBoxHandler } from '@site/befreeApp/components/side-panel/side-panel';
import { resultToggleGroup } from '@site/befreeApp/components/result/result';
import { initRangeSlider } from '@site/befreeApp/components/range-filter/range-filter';
import { starsInit } from '@site/befreeApp/components/stars/stars';
import { scrollToFooterHandler } from '@site/befreeApp/components/scroll-to-footer/scroll-to-footer';
import { selectsAppInit } from '@site/befreeApp/components/selects/selects';
import { initScrollBar } from '@site/befreeApp/scripts';
// == // BeFreeApp ========================

// == and pages ======================

// == plagins ===================
import { da } from '@site/js/da';
import { convertImgToSvg } from '@site/js/function';
import { inputMaskInit } from '@site/js/inputmask';
import { popupInit } from '@site/popups/popup';
// == plagins ===================


// == blocks =================
import { mobileMenuDropdownHandler } from '@site/blocks/header/header';
import { burger } from '@site/blocks/burger/burger';
import { cookieInit } from '@site/blocks/cookie-message/cookie-message';
import '@site/blocks/home-map/home-map';
import { cryptocurrencySliderInit, popularBrandInit, sliderInfoBlockInit, sharesSliderInit } from '@site/blocks/sliders/sliders';
import { promoHeaderBottomBtnHandler, promoHeaderShowHideFilterHandler	 } from '@site/blocks/promo-header/promo-header';
import { categoryPageTextMobileHandler } from '@site/blocks/category-page-text/category-page-text';
import { productsFilterHandler } from '@site/blocks/products-filter/products-filter';
import { ratingInit } from '@site/blocks/rating/rating';
import { selectsHandler } from '@site/blocks/selects/selects';
import { categoryHeaderMobileHandler } from '@site/blocks/category-header/category-header';
import { infoBLockTabletHandler } from '@site/blocks/info-block/info-block';
import { changeFedbackformStateInTabsBlock, tabsHandler } from '@site/blocks/tabs-block/tabs-block';
import { entityBlockHandler } from '@site/blocks/entity-block/entity-block';
import { showHidePassword } from '@site/blocks/forms/forms';
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
	window.homeMap = promoHeaderBottomBtnHandler();
	promoHeaderShowHideFilterHandler(homeMap);
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
	scrollToFooterHandler();
	selectsAppInit();
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
				const setPedding = () => wrapper.style.paddingTop = header.clientHeight + 'px';
				setPedding();
				let id = setInterval(setPedding, 200);
				setTimeout(() => {
					clearInterval(id);
				},1000)
				window.addEventListener('resize', setPedding);
			}
		}
	}
	// ==== AND ADD PADDING-TOP ================================

	burger();

});

