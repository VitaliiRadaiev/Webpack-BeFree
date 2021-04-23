import {_slideToggle} from '../../js/function';
import {cryptoSlider} from '../sliders/sliders'

export function categoryHeaderMobileHandler() {
    let headBottomBtn = document.querySelector('.category-header__bottom-btn');
    if(headBottomBtn) {
        headBottomBtn.addEventListener('click', () => {
            let headerSort = document.querySelector('.category-header .category-header__toggle-slide');
            headBottomBtn.classList.toggle('_active');
            _slideToggle(headerSort, 600);
            cryptoSlider.update();
        })
    }
}