export function scrollToFooterHandler() {
    let wrapper = document.querySelector('.wrapper.home-app');
    let btn = document.querySelector('.scroll-to-footer');
    btn.addEventListener('click', () => {
        wrapper.scrollTo({
            top: wrapper.clientHeight - 30,
            behavior: 'smooth',
        })
    })
}