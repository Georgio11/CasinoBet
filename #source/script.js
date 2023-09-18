var image = new Image();
image.src = 'images/clouds/1.webp';
image.onload = function () {
    var imageContainer = document.querySelector('.people .cloud');
    imageContainer.style.backgroundImage = 'url(' + image.src + ')';
};

let gamesText = document.querySelector('.games_text')
let btn1 = document.querySelector('.game_swiper-navig');
let btn2 = document.querySelector('.modes_swiper-navig');
let game = document.querySelector('.games');

if (window.innerWidth / window.innerHeight < 1) {
    game.appendChild(btn1)
} else (gamesText.appendChild(btn1));

let coins = document.querySelectorAll('.coin');

coins.forEach(coin => {
    coin.style.animationDuration = `${Math.random() * 4 + 5}s`
    coin.style.animationName = `livitation${Math.floor(Math.random() * 4 + 1)}`
})

let gradient = document.querySelector('.wrapper > .gradient');
let front = document.querySelector('.front');
let backInfo = document.querySelector('.back_info');
let back = document.querySelector('.back');
let frontInfo = document.querySelector('.front_info');
let backModes = document.querySelector('.back_modes');
let frontkModes = document.querySelector('.front_modes');

function changeHeight() {
    let frontHeight = front.getBoundingClientRect().height;
    gradient.style.height = `${frontHeight}px`;
    console.log(gradient.style.height)
    let frontInfoHeight = frontInfo.offsetHeight;
    backInfo.style.height = `${frontInfoHeight}px`;
    let frontkModesHeight = frontkModes.offsetHeight;
    backModes.style.height = `${frontkModesHeight}px`;
}

window.addEventListener('resize', changeHeight);

document.addEventListener('DOMContentLoaded', function() {
    changeHeight();
});


new Swiper('.games_swiper-container',{
    navigation: {
        nextEl: '.game_swiper-navig .swiper-button-next',
        prevEl: '.game_swiper-navig .swiper-button-prev'
    },

    breakpoints: {
        1100: {
            slidesPerView: 3,
        },

        700: {
            slidesPerView: 2,
        },

        0: {
            slidesPerView: 1.7,
        },
    },

    grabCursor: true,
    slidesPerView: 3,
    spaceBetween: 0,
});


new Swiper('.modes_swiper-container',{
    navigation: {
        nextEl: '.modes_swiper-navig .swiper-button-next',
        prevEl: '.modes_swiper-navig .swiper-button-prev'
    },

    breakpoints: {
    
        800: {
            slidesPerView: 2.3,
        },
    
        0: {
            slidesPerView: 1.5,
            spaceBetween: 50,
        },
    },

    grabCursor: true,
    slidesPerView: 2.3,
    spaceBetween: 90,
});

function adaptationElements() {
    const aspectRatio = window.innerWidth / window.innerHeight;
    const aspectClass = aspectRatio >= 1.8
        ? 'modificate1'
        : aspectRatio >= 1.6
            ? 'modificate2'
            : aspectRatio > 1
                ? 'modificate3'
                : 'modificate4';

    front.className = `front ${aspectClass}`;
    back.className = `back ${aspectClass}`;
}

adaptationElements();

window.addEventListener('resize', adaptationElements);