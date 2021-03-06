import {_slideUp, _slideToggle} from '../../js/function';
export function productsFilterHandler() {
    let prductsFilter = document.querySelector('.products-filter');
    if(prductsFilter) {
        prductsFilter.addEventListener('click', () => {
            if(document.documentElement.clientWidth < 1024) {
                prductsFilter.classList.toggle('active');
                let list = prductsFilter.querySelector('.products-filter__list');
                _slideToggle(list, 600);
            }
        })

        document.body.addEventListener('click', (e) => {
            if(document.documentElement.clientWidth < 1024) {
                if(!e.target.closest('.products-filter')) {
                    let list = prductsFilter.querySelector('.products-filter__list');
                    _slideUp(list, 600);
                }
            }
        })
    }
}