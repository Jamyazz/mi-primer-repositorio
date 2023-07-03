window.addEventListener('load', function(){
    new Glider(document.querySelector('.carrousel__lista'), {
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: '.carrousel__indicadores',
        arrows: {
        prev: '.flecha__anterior',
        next: '.flecha__siguiente'
        }
    });
});