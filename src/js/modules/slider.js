const slider = () => {
    const topSlider = document.querySelector('#top-slider');

    if(!topSlider) {return;}

    new Splide(topSlider, {
        type         : 'loop',
        perPage      : 1,
        autoplay     : true,
        interval     : 15000,
        resetProgress: false,
        pagination: false,
        navigation: false,
        // classes: {
        //     arrows: 'splide__arrows splide-nav-holder',
        //     arrow : 'splide__arrow',
        //     prev  : 'splide__arrow--prev slide-prev',
        //     next  : 'splide__arrow--next slide-next',
        // },
    }).mount();
}

export default slider;