import noUiSlider from "nouislider";


export function initRangeSlider() {
    let rangeSlider = document.querySelector('.range-filter__slider');
    if (rangeSlider) {
        let input = document.querySelectorAll('.range-filter__input')


        noUiSlider.create(rangeSlider, {
            tooltips: [true],
            connect: [true, false],
            start: [rangeSlider.dataset.start || 0],
            range: {
                'min': [+rangeSlider.dataset.min || 0],
                'max': [+rangeSlider.dataset.max || 10]
            }
        });

        rangeSlider.noUiSlider.on('update', function (values, handle) {
            let value = values[handle];
            input.value = value
        });
    }
}


