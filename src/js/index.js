import '../sass/styles.scss';
import navigation from './modules/navigation'
import slider from "./modules/slider";
import scrollEffects from "./modules/scrollEffects";
import gallery from "./modules/gallery";

document.addEventListener('DOMContentLoaded', function () {
    navigation();
    scrollEffects();
    slider();
    gallery({
        gallerySelectors: '.gallery-img'
        // isNav: true // default value
    });
});




