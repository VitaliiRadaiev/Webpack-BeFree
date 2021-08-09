import noUiSlider from "nouislider";

export function initRangeSlider() {
    let rangeSlider = document.querySelector('.range-filter__slider');
    if (rangeSlider) {
        noUiSlider.create(rangeSlider, {
            tooltips: [true],
            connect: [true, false],
            start: [2.3],
            range: {
                'min': [0],
                'max': [8]
            }
        });
    }
}
