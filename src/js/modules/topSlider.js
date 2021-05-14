const topSlider = ()  => {
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

    }).mount();
};

export default topSlider;