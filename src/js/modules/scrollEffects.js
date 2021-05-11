import { TimelineLite, TimelineMax } from "gsap/all";

const scrollEffects = () => {
    let isMobile = false;

    const isActiveMobile = () => {
        isMobile = (window.innerWidth <= 1640) ? true : false;
    }

    const scrollEffect = () => {
        if(!isMobile) {

            const tl = new TimelineLite();

            // tl.from('.card-holder', 1, {
            //     y: 200,
            //     stagger: .6,
            //     opacity: 0,
            //     ease: 'Power2.easeInOut'
            // });
            //
            // tl.to('.card-holder', 1, {
            //     y: 0,
            //     duration: 1.8,
            //     opacity: 1
            // })


            // tl.from('.right-leaf', 3, {
            //     transform: 'translateX(200px)',
            //     opacity: 0
            // });
            //
            // tl.from('.left-leaf', 3, {
            //     transform: 'translateX(-200px)',
            //     opacity: 0
            // });
            //
            // // .card-holder
            //
            // tl.to('.right-leaf', 1, {
            //     transform: 'translateX(0)',
            //     opacity: 1
            // });
            //
            // tl.to('.left-leaf', 1, {
            //     transform: 'translateX(0)',
            //     opacity: 1
            // });

            // tl.play();

            const ctrl = new ScrollMagic.Controller();

            new ScrollMagic.Scene({
                triggerElement: ".card-holder",
                duration: 100
            }).setTween(tl).addTo(ctrl);



        }
    }

    const resize = () => {
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function () {
                isActiveMobile();
                scrollEffect();
            }, 250);
        });
    }

    resize();
    isActiveMobile();
    scrollEffect();

}

export default scrollEffects;