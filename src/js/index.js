import '../sass/styles.scss';
import navigation from './modules/navigation'
import slider from "./modules/slider";
import scrollEffects from "./modules/scrollEffects";
import gallery from "./modules/gallery";
import tabs from "./modules/tabs";

document.addEventListener('DOMContentLoaded', function () {
    navigation();
    scrollEffects();
    slider();
    tabs({
        tabsNav: '.tab-nav a',
        tabsContent: '.tab',
        activeNavClass: 'active',
        activeTabClass: 'active-tab'
    });
    gallery({
        gallerySelectors: '.gallery-img'
        // isNav: true // default value
    });
});




