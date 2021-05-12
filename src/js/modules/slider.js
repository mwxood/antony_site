const slider = () => {
    const topSlider = document.querySelector('#product-slider');
    const slideCount =  document.querySelector('.slide-count');
    const currentSlide =  document.querySelector('.current-slide');

    if(!topSlider) {return;}

    let splide = new Splide(topSlider, {
        type         : 'loop',
        perPage      : 1,
        autoplay     : true,
        interval     : 15000,
        pagination: true,
        navigation: true,
        classes: {
            pagination: 'pagination',
            page      : 'splide__pagination__page pagination-btn', // each button
        }
    });

    splide.on('pagination:updated', function(data) {
        slideCount.innerHTML = data.items.length;
        currentSlide.textContent = splide.index + 1;
    }).mount();
};

export default slider;