import {_slideUp, _slideToggle} from '../../js/function';

export function entityBlockHandler() {
    let entityList = document.querySelector('.entity-list');
    if(entityList) {
        let entityItems = entityList.querySelectorAll('.entity-list__triggers');
        entityItems.forEach((item) => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                if(document.documentElement.clientWidth > 991) {
                    
                    const id = e.target.getAttribute('href').replace('#','');
        
                    entityList.querySelectorAll('.entity-list__triggers').forEach((child) => {
                        child.classList.remove('active');
                    });
        
                    document.querySelectorAll('.entity-form').forEach((child) => {
                        child.classList.remove('active');
                    });
        
                    item.classList.add('active');
                    document.getElementById(id).classList.add('active');
                } else {
                    
                    this.classList.toggle('active');

                    if(this.nextElementSibling) {
                        _slideToggle(this.nextElementSibling);
                    }
                   
                    entityItems.forEach(item => {
                        if(this == item) {
                            return;
                        }

                        item.classList.remove('active');

                        if(item.nextElementSibling) {
                            _slideUp(item.nextElementSibling);
                        }

                    })
                }
    
            });
        });
    }


    function moveFormToTriggers() {
        let entityList = document.querySelector('.entity-list');
        let triggers = document.querySelectorAll('.entity-list__triggers');
        let forms = document.querySelectorAll('.entity-form');

        if(entityList) {
            if(document.documentElement.clientWidth < 992) {
                if(!entityList.querySelector('.entity-form')) {
                    triggers.forEach((item, i) => {
                        item.after(forms[i]);
                        
                    })
                }
            }
        }

    }

    moveFormToTriggers();

    window.addEventListener('resize', moveFormToTriggers);


    let forms = document.querySelectorAll('.entity-form');
    if(forms.length) {
        forms.forEach(form => {
                let scheduleBlockItems = form.querySelectorAll('.schedule-block__item');
                scheduleBlockItems.forEach(item => {
                    let checkBox = item.querySelector('input[type="checkbox"]');
                    let wrap = item.querySelector('.checkbox-wrap');
                    let inner = item.querySelector('.schedule-block__item-inner');
        
                    if(checkBox.checked) {
                        wrap.classList.add('_active');
                        inner.classList.add('_active');
                    } else {
                        wrap.classList.remove('_active');
                        inner.classList.remove('_active');
                    }
    
                    checkBox.addEventListener('input', function() {
                        
                        if(this.checked) {
                            wrap.classList.add('_active');
                            inner.classList.add('_active');
                        } else {
                            wrap.classList.remove('_active');
                            inner.classList.remove('_active');
                        }
                        
                    });
    
                })

                form.addEventListener('reset', () => {
                    setTimeout(() => {
                        scheduleBlockItems.forEach(item => {
                            let checkBox = item.querySelector('input[type="checkbox"]');
                            let wrap = item.querySelector('.checkbox-wrap');
                            let inner = item.querySelector('.schedule-block__item-inner');

                            if(checkBox.checked) {
                                wrap.classList.add('_active');
                                inner.classList.add('_active');
                            } else {
                                wrap.classList.remove('_active');
                                inner.classList.remove('_active');
                            }
                        })
                    })
                })

                let loadBtn = form.querySelector('.entity-form__photo-list .load-btn');
                let photoBLock = form.querySelector('.entity-form__photo');
                if(document.documentElement.clientWidth < 768) {
                    photoBLock.append(loadBtn);
                }
        })
    }


    let btnReset = document.querySelector('.entity-form__reset');
    if(btnReset) {
        btnReset.addEventListener('reset', () => {

            scheduleBlockItems.forEach(item => {
                let checkBox = item.querySelector('input[type="checkbox"]');
                console.log(checkBox.checked);
                
                let wrap = item.querySelector('.checkbox-wrap');
                let inner = item.querySelector('.schedule-block__item-inner');
    
                if(checkBox.checked) {
                    wrap.classList.add('_active');
                    inner.classList.add('_active');
                } else {
                    wrap.classList.remove('_active');
                    inner.classList.remove('_active');
                }

            })
        })
    }
}