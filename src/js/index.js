import '../sass/styles.scss';
import navigation from './modules/navigation'
import slider from "./modules/slider";
import indexEffects from "./modules/indexEffects";
import gallery from "./modules/gallery";
import tabs from "./modules/tabs";
import customSelect from "./modules/customSelect";
import topSlider from "./modules/topSlider";
import aboutEffects from "./modules/aboutEffects";
import lazyLoad from "./modules/lazyLoad";
import formValidation from "./modules/formValidation";product
import product from "./modules/product";

document.addEventListener('DOMContentLoaded', function () {
    navigation();
    indexEffects();
    aboutEffects();
    slider();
    customSelect();
    topSlider();
    lazyLoad();
    formValidation();
    tabs({
        tabsNav: '.tab-nav a',
        tabsContent: '.tab',
        activeNavClass: 'active',
        activeTabClass: 'active-tab'
    });

    tabs({
        tabsNav: '.filters-nav a',
        tabsContent: '.tab-scroll',
        activeNavClass: 'active',
        activeTabClass: 'active-tab'
    });
    gallery({
        gallerySelectors: '.gallery-img'
        // isNav: true // default value
    });
    product();
});




