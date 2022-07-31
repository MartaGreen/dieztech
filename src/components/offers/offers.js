import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/scss/pagination";
import "swiper/css/hash-navigation";

import "./offers.scss";
import "../offer/offer";
import "../../assets/images/arrow.svg";

window.addEventListener("load", () => {
  const offersSwiper = document.getElementById("offers-swiper");

  new Swiper(offersSwiper, {
    modules: [Navigation, Pagination],
    spaceBetween: 30,
    loop: false,
    speed: 400,
    slidesPerView: 4,
    slidesPerGroup: 4,

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
});
