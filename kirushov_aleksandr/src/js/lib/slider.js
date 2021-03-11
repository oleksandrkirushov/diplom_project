import $ from 'jquery';
import 'slick-carousel';
import search from './search';

function slickHome() {
    search('gifs', 1, 0, 'home__gifs', 0, 8);

    function slickInit() {
        $('.home__gifs').slick({
            slidesToShow: 4,

            responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3
                    }
                }, {
                    breakpoint: 993,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 577,
                    settings: {
                        slidesToShow: 1
                    }
                },
            ]
        })
    }
    setTimeout(slickInit, 500);
}

export default slickHome;
