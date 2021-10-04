export function scrollToFooterHandler() {
    let wrapper = document.querySelector('.wrapper.home-app');
    if(wrapper) {
        let btn = document.querySelector('.scroll-to-footer');
        if(btn) {
            btn.addEventListener('click', () => {
                wrapper.scrollTo({
                    top: wrapper.clientHeight - 30,
                    behavior: 'smooth',
                })
            })
        }
    
    }
}