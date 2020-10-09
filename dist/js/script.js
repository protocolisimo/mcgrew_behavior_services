function testWebP(callback) {

    let webP = new Image();

    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };

    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
    
testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});

// function dropDownMenu () {
//     let dropElement = document.querySelectorAll('.drop')

//     dropElement.forEach(element => {
//         $('.drop').hover(function() {
//             $( '.secondary-menu' ).fadeOut( 100 ),
//             $( '.secondary-menu' ).fadeIn( 500 );
//         });
//     });
// }

function burgerMenu () {
    $('.nav-burger').click( function () {
        $('.header-wrapper').toggleClass('open');
    })
}

function slickSlider () {
    $('.slick-slider').slick({
        infinite: true,
        pauseOnFocus: true,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        speed: 1000,
        dots: false,
        arrows: false
    });
}

$(document).ready(function(){
    slickSlider ();
    // dropDownMenu ();
    burgerMenu ();
});