import { _slideUp, _slideDown } from '../../scripts'

export function asidePanelToggleGroup() {
    let buttonsWrapper = document.querySelector('.side-panel__nav-toggle-group');
    let expandBtn = document.querySelector('.side-panel__nav-toggle-group-expand');
    let closeBtn = document.querySelector('.side-panel__nav-toggle-group-close');
    let groupItems = document.querySelector('.side-panel__nav-group');

    if(buttonsWrapper && expandBtn && closeBtn && groupItems) {

        expandBtn.addEventListener('click', () => {
            expandBtn.classList.remove('active');
            closeBtn.classList.add('active');
            groupItems.classList.add('open');
            buttonsWrapper.classList.add('open');
            _slideDown(groupItems);
        })

        closeBtn.addEventListener('click', () => {
            expandBtn.classList.add('active');
            closeBtn.classList.remove('active');
            groupItems.classList.remove('open');
            buttonsWrapper.classList.remove('open');
            _slideUp(groupItems);
        })
    }
}

export function toggleShowBoxHandler() {
    let triggers = Array.from(document.querySelectorAll('[data-trigger-box-by-id]'));
    let boxes = Array.from(document.querySelectorAll('[data-box-id]'));
    let sidePanel = document.querySelector('.side-panel');

    triggers.forEach(item => {
        let id = item.dataset.triggerBoxById;
        let box =  boxes.filter(box => box.dataset.boxId === id)[0];
        
        item.addEventListener('click', () => {
            item.classList.toggle('active');
            box.classList.toggle('open');
            sidePanel.classList.add('box-is-open');
            triggers.forEach(i => {
                if(i === item) return;

                let id = i.dataset.triggerBoxById;
                let box =  boxes.filter(box => box.dataset.boxId === id)[0];

                i.classList.remove('active');
                box.classList.remove('open');
            })
        })
    })

    boxes.forEach(box => {
        let btnClose = box.querySelector('.side-panel-box__close');
        if(btnClose) {
           
            let id = box.dataset.boxId;
            let trigger = triggers.filter(trigger => trigger.dataset.triggerBoxById === id)[0];

            btnClose.addEventListener('click', () => {
                box.classList.remove('open');
                trigger.classList.remove('active');
                sidePanel.classList.remove('box-is-open');
            })
        }
    })
}