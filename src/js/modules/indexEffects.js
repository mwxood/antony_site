import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const indexEffects = () => {
  let isMobile = false;

  const isActiveMobile = () => {
    isMobile = window.innerWidth <= 1640 ? true : false;
  };

  const scrollEffect = () => {
    if (!isMobile) {
      const cardContainer = document.querySelector(".card-holder"),
        leftLeaf = document.querySelector(".left-leaf"),
        rightLeaf = document.querySelector(".right-leaf"),
        aboutIndexContainer = document.querySelector(".about-index-section"),
        indexProductContainer = document.querySelector(
          ".product-index-section"
        );

      const moveElements = (leftLeaf, rightLeaf) => {
        if (!leftLeaf || !rightLeaf) {
          return;
        }
        const leftSpeed = leftLeaf.getAttribute("data-speed");
        const rightSpeed = rightLeaf.getAttribute("data-speed");

        document.addEventListener("mousemove", (e) => {
          const leftX = (window.innerWidth - e.pageX * leftSpeed) / 100,
            leftY = (window.innerWidth - e.pageY * leftSpeed) / 100,
            rightX = (window.innerWidth - e.pageX * rightSpeed) / 100,
            rightY = (window.innerWidth - e.pageY * rightSpeed) / 100;

          leftLeaf.style.transform = `translateX(${leftX}px) translateY(${leftY}px)`;
          rightLeaf.style.transform = `translateX(${rightX}px) translateY(${rightY}px)`;
        });
      };

      if (!cardContainer || !aboutIndexContainer || !indexProductContainer) {
        return;
      }

      let cardHolder = gsap.timeline({
        scrollTrigger: {
          trigger: cardContainer,
          onRefresh: () => {
            moveElements(leftLeaf, rightLeaf);
          },
        },
      });

      let indexAboutSection = gsap.timeline({
        scrollTrigger: {
          trigger: aboutIndexContainer,
        },
      });

      let productIndexSection = gsap.timeline({
        scrollTrigger: {
          trigger: indexProductContainer,
        },
      });

      cardHolder.from(
        cardContainer,
        1.5,
        {
          y: 800
        },
        "-=1.5"
      );

      cardHolder.to(
        cardContainer,
        1.5,
        {
          x: 0
        },
        "-=1.5"
      );

      indexAboutSection.from(
        ".about-index-section",
        1.5,
        {
          opacity: 0,
        },
        "-=1.5"
      );

      indexAboutSection.to(
        ".about-index-section",
        1.5,
        {
          opacity: 1,
        },
        "-=1.5"
      );

      indexAboutSection.from(
        ".oil-hand",
        2,
        {
          x: 800,
        },
        "-=2"
      );

      indexAboutSection.to(
        ".oil-hand",
        2,
        {
          x: 0,
        },
        "-=2"
      );

      productIndexSection.from(
        ".index-right-col",
        1.5,
        {
          opacity: 0,
          x: 1000,
        },
        "-=1.5"
      );

      productIndexSection.to(
        ".index-right-col",
        1.5,
        {
          opacity: 0,
          x: 0,
        },
        "-=1.5"
      );

      productIndexSection.from(
        ".index-left-col",
        1.5,
        {
          opacity: 1,
          x: -1000,
        },
        "-=1.5"
      );

      productIndexSection.to(
        ".index-right-col",
        1.5,
        {
          opacity: 1,
          x: 0,
        },
        "-=1.5"
      );
    }
  };

  const resize = () => {
    let resizeTimer;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        isActiveMobile();
        scrollEffect();
      }, 250);
    });
  };

  resize();
  isActiveMobile();
  scrollEffect();
};

export default indexEffects;
