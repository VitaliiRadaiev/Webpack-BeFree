export function infoBLockTabletHandler() {
    let infoBlockBody = document.querySelector('.info-block__body');
    if(infoBlockBody) {
        if(document.documentElement.clientWidth < 992 && document.documentElement.clientWidth > 767) {
            let div = document.createElement('div');
            div.className = 'info-block__column-3';

            let textBLock = infoBlockBody.querySelector('.info-block__row-2');
            if(textBLock) {
                div.append(textBLock)
            }

            infoBlockBody.append(div);
        }
    }
}