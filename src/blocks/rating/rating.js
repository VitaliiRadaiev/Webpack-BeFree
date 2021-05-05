import $ from 'jquery';

export function ratingInit() {
    //RATING
$('.rating.edit .star').hover(function () {
    var block = $(this).parents('.rating');
    let stars = block.find('.rating__line');
    var ind = $(this).index();

    for(let i = 0; i < stars.children().length; i++) {
        stars.children()[i].classList.remove('_hover');
    }
    
    for(let i = 0; i <= ind; i++) {
        stars.children()[i].classList.add('_hover');
    }
}, function () {
    var block = $(this).parents('.rating');
    let stars = block.find('.rating__line');
    var ind = $(this).index();

    for(let i = 0; i < stars.children().length; i++) {
        stars.children()[i].classList.remove('_hover');
    }
});
$('.rating.edit .star').click(function (event) {
    var block = $(this).parents('.rating');
    var re = $(this).index() + 1;
    block.find('input').val(re);
    var linew = re / block.find('.star').length * 100;
    setrating(block, linew);
});
$.each($('.rating'), function (index, val) {
    var ind = $(this).find('input').val();
    var linew = ind / $(this).parent().find('.star').length * 100;
    setrating($(this), linew);
});
function setrating(th, val) {
    th.find('.rating__activeline').css({ width: val + '%' });
}
}
