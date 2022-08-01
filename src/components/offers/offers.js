import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/scss/pagination";
import "swiper/css/hash-navigation";

import "./offers.scss";
import "../offer/offer";
import "../../assets/images/arrow.svg";

import "../../assets/images/accountants.svg";
import "../../assets/images/babysitters.svg";
import "../../assets/images/programmers.svg";
import "../../assets/images/tutors.svg";

window.addEventListener("load", () => {
  const offersSwiper = document.getElementById("offers-swiper");

  const swiper = new Swiper(offersSwiper, {
    modules: [Navigation, Pagination],
    spaceBetween: 30,
    loop: false,
    speed: 400,
    lazy: true,

    navigation: {
      nextEl: offersSwiper.querySelector(".swiper-button-next"),
      prevEl: offersSwiper.querySelector(".swiper-button-prev"),
      disabledClass: "offers-slider__nav-btn_disabled",
    },

    pagination: {
      el: offersSwiper.querySelector(".swiper-pagination"),
      type: "bullets",
      bulletActiveClass: "pagination__bullet_active",
      bulletClass: "pagination__bullet",
      clickable: true,
      modifierClass: "offers-slider__pagination",
    },

    on: {
      init: () => {
        console.log("swiper succesfully initialized");
      },
    },
  });

  const visibleSlidesCount = () => {
    const windowWidth = window.innerWidth;

    if (windowWidth <= 700) return 1;
    if (windowWidth <= 1200) return 2;
    if (windowWidth > 1200) return 4;
  };
  const changeVisibleSlidesCount = (count) => {
    swiper.params.slidesPerView = count;
    swiper.params.slidesPerGroup = count;
    swiper.update();
  };
  const setVisibleSlides = () => {
    const slidesCount = visibleSlidesCount();
    changeVisibleSlidesCount(slidesCount);
  };

  setVisibleSlides();
  window.addEventListener("resize", setVisibleSlides);
});
