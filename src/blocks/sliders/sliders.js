import {
    Swiper,
    Navigation,
    Pagination,
} from 'swiper';

Swiper.use([Navigation, Pagination,]);
export let cryptoSlider;
export function cryptocurrencySliderInit() {
    let cryptocurrencySlider = document.querySelector('.cryptocurrency__slider');
    if(cryptocurrencySlider) {
            cryptoSlider = new Swiper(cryptocurrencySlider.querySelector('.swiper-container'), {
            freeMode: true,
            speed: 600,
            pagination: {
            	el: cryptocurrencySlider.querySelector('.swiper-pagination'),
            	clickable: true,
            },

            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    freeMode: false,
                },
                576: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                    freeMode: false,

                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 0,
                    freeMode: false,

                },
                992: {
                    slidesPerView: 4,
                    spaceBetween: 0,
                },
                1268: {
                    slidesPerView: 5,
                    spaceBetween: 0,
                },
            },
            
        });
        
    }
}

export function popularBrandInit() {
    let popularBrand = document.querySelector('.popular-brand');

    if(popularBrand) {
            let slider;
            slider = new Swiper(popularBrand.querySelector('.popular-brand__slider .swiper-container'), {

            slidesPerView: 1,
            spaceBetween: 40,
            speed: 800,

            pagination: {
            	el: popularBrand.querySelector('.swiper-pagination'),
            	clickable: true,
            },

            navigation: {
                nextEl: popularBrand.querySelector('.popular-brand__slider-btn_next'),
                prevEl: popularBrand.querySelector('.popular-brand__slider-btn_prev'),
            },

        });

        let windowWidth = 992;
        let numElements = 9;

        if(document.documentElement.clientWidth < 480) {
            windowWidth = 480;
            numElements = 5;
        } else if(document.documentElement.clientWidth < 768) {
            windowWidth = 768;
            numElements = 7;
        }  
        
        function transferCards(params) {
            let wrapper = popularBrand.querySelector('.swiper-wrapper');
            if(wrapper) {
                if(document.documentElement.clientWidth < windowWidth) {
                    let arr = [];

                    for(let slide of wrapper.children) {
                        if(slide.children.length > numElements) {
                            let cards = [...slide.children].slice(numElements, slide.children.length);
                            arr.push(...cards);
                        }      
                    }

                    if(arr.length > numElements) {
                        let count = Math.ceil(arr.length / numElements);
                        for(let i = 0; i < count; i++) {
                            let div = document.createElement('div');
                            div.className = 'swiper-slide';
                            div.append(...arr.slice(0, numElements));
                            arr = arr.slice(numElements, arr.length);
                            if(slider) {
                                slider.appendSlide(div);
                            }
                        }
                        
                        
                    } else {
                        let div = document.createElement('div');
                        div.className = 'swiper-slide';
                        div.append(...arr);

                        if(slider) {
                            slider.appendSlide(div);
                        }
                    }

                    
                    for(let slide of wrapper.children) {
                        for(let el of slide.children) {
                            el.classList.remove('_big-width', '_big-heigth')
                        }
                        
                         if(document.documentElement.clientWidth < 480) {
                            if(slide.children[2]) slide.children[2].classList.add('_big-width');
                            console.log('test3');
                        } else if(document.documentElement.clientWidth < 768) {
                            if(slide.children[3]) slide.children[3].classList.add('_big-width');
                            if(slide.children[4]) slide.children[4].classList.add('_big-heigth');
                            console.log('test2');
                        } else if(document.documentElement.clientWidth < 992) {
                            if(slide.children[0]) slide.children[0].classList.add('_big-heigth');
                            if(slide.children[6]) slide.children[6].classList.add('_big-heigth');
                            if(slide.children[8]) slide.children[8].classList.add('_big-width');
                            console.log('test1');
                        } 
                    }
                    
                }
            }
        }

        transferCards();

    }
}

export function sliderInfoBlockInit() {
    let slider = document.querySelector('.slider-info-block');
    if(slider) {
        let dataSlider;
             dataSlider = new Swiper(slider.querySelector('.swiper-container'), {
            slidesPerView: 1,
            spaceBetween: 10,
            speed: 600,
            loop: true,
            pagination: {
            	el: slider.querySelector('.swiper-pagination'),
            	clickable: true,
            },
            // Arrows
            navigation: {
                nextEl: slider.querySelector('.slider-info-block__btn_next'),
                prevEl: slider.querySelector('.slider-info-block__btn_prev'),
            },
        });
    }
}



export  let dataSharesSlider;
export function sharesSliderInit() {
    let sharesSlider = document.querySelector('.shares-slider');
    if(sharesSlider) {
       

        function mobileSlider() {
            if(document.documentElement.clientWidth > 991 && sharesSlider.dataset.mobile == 'false') {
                dataSharesSlider = new Swiper(sharesSlider.querySelector('.swiper-container'), {
                    slidesPerView: 2,
                    spaceBetween: 20,
                    speed: 600,
                    loop: true,
                    pagination: {
                        el: sharesSlider.querySelector('.swiper-pagination'),
                        clickable: true,
                    },
                    navigation: {
                        nextEl: sharesSlider.querySelector('.shares-slider__btn_next'),
                        prevEl: sharesSlider.querySelector('.shares-slider__btn_prev'),
                    },
                });

                sharesSlider.dataset.mobile == 'true';
            }

            if(document.documentElement.clientWidth < 992) {
				sharesSlider.dataset.mobile = 'false';

				if(sharesSlider.querySelector('.swiper-container').classList.contains('swiper-container-initialized')) {
					dataSharesSlider.destroy();
				}
			}
        } 
        
        mobileSlider();

        window.addEventListener('resize', () => {
			mobileSlider();
		})

    }
}