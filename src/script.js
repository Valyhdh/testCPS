

const aside = document.querySelector('.aside');
const ordercall = document.querySelector('.ordercall');
const feedback = document.querySelector('.feedback');

const asideDb = document.querySelectorAll(".aside-db");
const ordercallDb = document.querySelectorAll(".ordercall-db");
const feedbackDb = document.querySelectorAll(".feedback-db");

const ordercallDbAside = document.querySelectorAll(".aside__info-item.ordercall-db");
const feedbackDbAside = document.querySelectorAll(".aside__info-item.feedback-db");

const feedbackDisn = document.querySelector(".feedback-dn");
const ordercallDisn = document.querySelector(".ordercall-dn");
const asideDisn = document.querySelector(".aside-dn");

const mainPage = document.querySelector(".main__header");

mainPage.addEventListener('click', (e) => {
    const outsideAside = e.composedPath().includes(aside);
    const outsideOrdercall = e.composedPath().includes(ordercall);
    const outsideFeedback = e.composedPath().includes(feedback);


    if (!outsideAside) {
        aside.classList.remove('aside--show');
    };

    if (!outsideOrdercall) {
        ordercall.classList.remove('modal--show');
    };

    if (!outsideFeedback) {
        feedback.classList.remove('modal--show');
    };

});


asideDb.forEach(button => {
    button.addEventListener('click', function (eventAside) {
        eventAside._isClickAside;
        aside.classList.toggle('aside--show');
    })
});

ordercallDb.forEach(button => {
    button.addEventListener('click', function (eventOc) {
        eventOc._isClickOc;
        ordercall.classList.toggle('modal--show');

        if (ordercall.classList.contains('modal--show')) {
            feedback.classList.remove('modal--show');
            aside.classList.remove('aside--show');
        };

    })
});

feedbackDb.forEach(button => {
    button.addEventListener('click', function (eventFb) {
        eventFb._isClickFb;
        feedback.classList.toggle('modal--show');

        if (feedback.classList.contains('modal--show')) {
            ordercall.classList.remove('modal--show');
            aside.classList.remove('aside--show');
        };


    })
});


asideDisn.addEventListener('click', function () {
    aside.classList.remove('aside--show');
});

ordercallDisn.addEventListener('click', function () {
    ordercall.classList.remove('modal--show');
});

feedbackDisn.addEventListener('click', function () {
    feedback.classList.remove('modal--show');
});


window.addEventListener('DOMContentLoaded', () => {

    const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
        let swiper;

        breakpoint = window.matchMedia(breakpoint);

        const enableSwiper = function (className, settings) {
            swiper = new Swiper(className, settings);

            if (callback) {
                callback(swiper);
            }
        }

        const checker = function () {
            if (breakpoint.matches) {
                return enableSwiper(swiperClass, swiperSettings);
            } else {
                if (swiper !== undefined) swiper.destroy(true, true);
                return;
            }
        };

        breakpoint.addEventListener('change', checker);
        checker();
    }

    const someFunc = (instance) => {
        if (instance) {
            instance.lifespan('slideChange', function (e) {
                
            });
        }
    };

    resizableSwiper(
        '(max-width: 767px)',
        '.swiper__brend',
        {
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1.2,
                },
                350: {
                    slidesPerView: 1.3,
                },
                380: {
                    slidesPerView: 1.4,
                },
                410: {
                    slidesPerView: 1.5,
                },
                440: {
                    slidesPerView: 1.6,
                },
                470: {
                    slidesPerView: 1.7,
                },
                500: {
                    slidesPerView: 1.9,
                },
                530: {
                    slidesPerView: 2.0,
                },
                560: {
                    slidesPerView: 2.1,
                },
                590: {
                    slidesPerView: 2.2,
                },
                610: {
                    slidesPerView: 2.3,
                },
                640: {
                    slidesPerView: 2.4,
                },
                670: {
                    slidesPerView: 2.5,
                },
                700: {
                    slidesPerView: 2.6,
                },
                730: {
                    slidesPerView: 2.7,
                },
                760: {
                    slidesPerView: 2.8,
                },

            },
            slidesOffsetAfter: 75,
            spaceBerween: 20,
        },
        someFunc
    );
});

const mainText = document.querySelector('.content__main-text');
const mainTextDbn = document.querySelector('.content__more_text');
const brendsCard = document.querySelector('.swiper__brend');
const brendsCardDbn = document.querySelector('.content__more_brends');

mainTextDbn.addEventListener('click', function mainTextShow() {
    
    if (mainTextDbn.classList.contains('content__more_text--show'))
    {
        mainTextDbn.textContent = "Скрыть";
        mainText.classList.add("content__main-text--show")
        mainTextDbn.classList.remove("content__more_text--show")
    }
    else {
        mainTextDbn.textContent = "Читать далее";
        mainText.classList.remove("content__main-text--show")
        mainTextDbn.classList.add("content__more_text--show")
    }
});

brendsCardDbn.addEventListener('click', function brendsShow() {
    
    if (brendsCardDbn.classList.contains('content__more_brends--show'))
    {
        brendsCardDbn.textContent = "Скрыть";
        brendsCard.classList.add("swiper__brend--show");
        brendsCardDbn.classList.remove("content__more_brends--show")
    }
    else {
        brendsCardDbn.textContent = "Показать все";
        brendsCard.classList.remove("swiper__brend--show");
        brendsCardDbn.classList.add("content__more_brends--show")
    }
});
