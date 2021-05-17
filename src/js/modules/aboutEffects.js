import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const about = () => {
  const leftLeaf = document.querySelector(".about-left-leaf");
  const rightLeaf = document.querySelector(".about-right-leaf");
  const cardHeadiing = document.querySelector(".inner-about-section");
  const brandContainer = document.querySelector(".brand-holder");
  const handOil = document.querySelector(".brand-hand-oil");
  const historyHolder = document.querySelector(".history-holder");
  const tabContent = document.querySelector(".tab-content");
  let isMobile = false;

  const isActiveMobile = () => {
    isMobile = window.innerWidth <= 1640 ? true : false;
  };

  const scrollEffect = () => {
    if (!isMobile) {
      if (!leftLeaf || !rightLeaf || !handOil || !historyHolder || !tabContent) {
        return;
      }
      const moveElements = (leftLeaf, rightLeaf) => {
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

      let sceneLeaf = gsap.timeline({
        scrollTrigger: {
          trigger: cardHeadiing,
          onUpdate: () => {
            moveElements(leftLeaf, rightLeaf);
          },
        },
      });

      let sceneBrand = gsap.timeline({
        scrollTrigger: {
          trigger: brandContainer,
        },
      });

      let sceneHistory = gsap.timeline({
        scrollTrigger: {
          trigger: historyHolder,
        },
      });

      sceneLeaf.from(
        cardHeadiing,
        1.5,
        {
          opacity: 0,
        },
        "-=1.5"
      );

      sceneLeaf.to(
        cardHeadiing,
        1.5,
        {
          opacity: 1,
        },
        "-=1.5"
      );

      sceneBrand.from(
        brandContainer,
        1.5,
        {
          opacity: 0,
        },
        "-=1.5"
      );

      sceneBrand.to(
        brandContainer,
        1.5,
        {
          opacity: 1,
        },
        "-=1.5"
      );

      sceneBrand.from(
        handOil,
        1.5,
        {
          x: -400,
        },
        "-=1.5"
      );

      sceneBrand.to(
        handOil,
        1.5,
        {
          x: 0,
        },
        "-=1.5"
      );

      sceneHistory.from(
        historyHolder,
        1.5,
        {
          opacity: 0,
        },
        "-=1.5"
      );

      sceneHistory.to(
        historyHolder,
        1.5,
        {
          opacity: 1,
        },
        "-=1.5"
      );

      sceneHistory.from(
        tabContent,
        2,
        {
          y: 500,
        },
        "-=2"
      );

      sceneHistory.to(
        tabContent,
        2,
        {
          y: 0,
        },
        "-=2"
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
  scrollEffect();
  isActiveMobile();
  resize();
};

export default about;
