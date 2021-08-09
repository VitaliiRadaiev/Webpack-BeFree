
export function resultToggleGroup() {
    let btn = document.querySelector('.result__toggle-show');
    let resultGroup = document.querySelector('.result__group');
    let list = document.querySelector('.result__list');
    if (btn && resultGroup) {
        let groupWidth = 0;
        btn.addEventListener('click', () => {
            groupWidth = resultGroup.scrollWidth;
            if (!resultGroup.classList.contains('hide')) {
                new Promise((res, rej) => {
                    resultGroup.style.width = resultGroup.scrollWidth + 'px';
                    list.style.minWidth = list.clientWidth + 7 + 'px';
                    console.log(list);
                    setTimeout(() => {
                        res();
                    }, 10)
                }).then(data => {
                    resultGroup.classList.add('hide');
                    resultGroup.style.width = '0px';
                    btn.classList.add('_close');
                })

            } else {
                resultGroup.style.width = groupWidth + 7 + 'px';
                resultGroup.classList.remove('hide');
                btn.classList.remove('_close');
                setTimeout(() => {
                    resultGroup.style.width = 'auto';
                    list.style.minWidth = 'auto';
                }, 300)

            }
        })
    }
}