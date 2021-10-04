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

