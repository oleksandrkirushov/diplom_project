import $ from 'jquery';

function animateScroll(arg) {

    const elementClick = $(arg).attr("href");
    const destination = $(elementClick).offset().top;
    $('html').animate({
        scrollTop: destination
    }, 1500);
    return false;
}

export default animateScroll;
