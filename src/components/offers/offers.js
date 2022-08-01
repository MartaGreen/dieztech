import Swiper, { Navigation, Pagination, Keyboard } from "swiper";
import "swiper/css";
import "swiper/scss/pagination";
import "swiper/css/hash-navigation";
import "swiper/css/keyboard";

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
    modules: [Navigation, Pagination, Keyboard],
    spaceBetween: 30,
    loop: false,
    speed: 400,
    lazy: true,
    watchSlidesProgress: true,
    slideVisibleClass: "offers-slider__slide_visible",

    breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      700: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      1200: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
    },

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

    keyboard: {
      enabled: false,
      pageUpDown: true,
    },

    on: {
      init: () => {
        console.log("swiper succesfully initialized");
      },
    },
  });

  offersSwiper.addEventListener("focus", () => {
    swiper.keyboard.enable();
  });
  offersSwiper.addEventListener("focusout", () => {
    swiper.keyboard.disable();
  });
});
