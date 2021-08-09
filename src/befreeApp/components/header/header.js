import { _slideToggle } from '../../scripts'

export function toggleShowMobileSearch() {
    let searchMobileBtn = document.querySelector('.header-v2__mobile-search-trigger');
    let searchWrapper = document.querySelector('.header-v2__search');

    if (searchMobileBtn && searchWrapper) {
        searchMobileBtn.addEventListener('click', () => {
            searchMobileBtn.classList.toggle('active');
            _slideToggle(searchWrapper);
        })
    }

}
