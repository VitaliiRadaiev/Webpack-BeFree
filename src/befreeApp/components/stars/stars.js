export function starsInit() {
    let starsItems = document.querySelectorAll('.stars');
    if(starsItems.length) {
        starsItems.forEach(stars => {
            let value = stars.dataset.value || 0;
            let line = stars.querySelector('.stars__line-2');
            line.style.width = (value / 5 * 100)  + '%';
        })
    }
}