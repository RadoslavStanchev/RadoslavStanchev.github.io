$(document).ready(function () {
    $('.menu-toggler').on('click', function () {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function () {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    $('nav a[href*="#"]').on('click', function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 2000);
    });

    $('#up').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
    });

    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true
    })
});

const info = ['Web Developer', 'and', 'Web Designer'];
let counter = 0;
let index = 0;
let currentText = '';
let letter = '';

(function typing() {
    if(counter === info.length) {
        counter = 0;
    }
    currentText = info[counter];
    letter = currentText.slice(0, ++index)

    document.querySelector('.type').textContent = letter;

    if(letter.length === currentText.length) {
        counter++;
        index = 0;
    }

    setTimeout(typing, 300)
}())