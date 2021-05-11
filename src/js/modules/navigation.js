import { gsap, TimelineLite, TimelineMax, Back } from "gsap/all";
const navigation = () => {
    let isMobile = false;
    const navHolder = document.querySelector('.navigation-holder');

    const mobileNavigation = () => {
        const navTrigger = document.querySelector('.mobile-btn-trigger');
        let tl = gsap.timeline({defaults: {duration: 1.5, ease: Back.easeOut.config(1)}})

        tl.paused(true);
        tl.to('.navigation-holder', {clipPath: 'circle(100%)'});

        navTrigger.addEventListener('click', () => {
            if(!document.body.classList.contains('nav-active')) {
                document.body.classList.add('nav-active');
                tl.play();
            } else {
                document.body.classList.remove('nav-active');
                tl.reverse(.7);
            }
        });
    }

    const isActiveMobile = () => {
        if(window.innerWidth <= 1024) {
            isMobile = true;
        } else {
            isMobile = false;
        }
    }

    const resize = () => {
        let resizeTimer;
        window.addEventListener('resize', () =>{
            clearTimeout(resizeTimer);

            resizeTimer = setTimeout(function() {
                isActiveMobile();
             }, 250);
        });
    }


    resize();
    mobileNavigation();
}

export default navigation;