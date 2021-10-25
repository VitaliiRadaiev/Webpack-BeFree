import {_slideUp, _slideDown, _slideToggle} from '../../js/function';

export function promoHeaderBottomBtnHandler() {
    let localBtn = document.querySelector('.promo-header__local-icon');
    if (localBtn) {
        let map = document.querySelector('.home-map');

        localBtn.addEventListener('click', function () {
            if (map) {
                map.classList.toggle('_hide');
            }
        })

        return {
            show() {
                if (map) {
                    map.classList.remove('_hide');
                }
            },
            hide() {
                if (map) {
                    map.classList.add('_hide');
                }
            }
        }
    }
}

export function promoHeaderShowHideFilterHandler(homeMap) {
    let promoHeader = document.querySelector('.promo-header');
    if(promoHeader) {
        let searchInput = promoHeader.querySelector('.promo-header-search__input');
        let headerSortBlock = promoHeader.querySelector('.header-sort-wrap');

        searchInput.addEventListener('focus', () => {
            if(!headerSortBlock.classList.contains('open')) {
                _slideDown(headerSortBlock);
                homeMap.show();
                headerSortBlock.classList.add('open');
            }
        })

        searchInput.addEventListener('blur', (e) => {
            if(!e.target.value.trim()) {
                _slideUp(headerSortBlock);
                homeMap.hide();
                headerSortBlock.classList.remove('open');
            }
        })
    }
}

