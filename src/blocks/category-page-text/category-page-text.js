import {_slideToggle} from '../../js/function';
export function categoryPageTextMobileHandler() {
    let textBlock = document.querySelector('.category-page-text');
    if(textBlock) {
        if(document.documentElement.clientWidth < 992) {
            let arr = [...textBlock.querySelectorAll('p')];
            if(arr.length > 2) {
                arr = arr.slice(2, arr.length);
                let div = document.createElement('div');
                div.className = '_toggleWrap';
                div.append(...arr);
    
                let container = textBlock.querySelector('.container')
                container.append(div);
    
                let btn = document.createElement('div');
                btn.className = "_toggleBtn";
                btn.innerText = 'Показать ещё';
    
                container.append(btn);
                
                btn.addEventListener('click', function() {
                    _slideToggle(this.previousElementSibling);
                    this.classList.toggle('_active');
    
                    if(this.classList.contains('_active')) {
                        this.innerText = "Скрыть";
                    } else {
                        this.innerText = "Показать ещё";
                    }
                })
            }
            
        }
    }
}