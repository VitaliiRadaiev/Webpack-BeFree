export function promoHeaderBottomBtnHandler() {
    let localBtn = document.querySelector('.promo-header__local-icon');
    if(localBtn) {
        
        localBtn.addEventListener('click', function() {
            let map = document.querySelector('.home-map'); 
            if(map) {
                map.classList.toggle('_hide');
            }
        })
    }
}