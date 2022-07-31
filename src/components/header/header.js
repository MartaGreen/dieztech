import "./header.scss";
import "./burger.scss";

import "../../assets/images/logo.svg";
import "../../assets/images/btn-icon.svg";

window.onload = () => {
  const burger = document.getElementById("burger-menu");
  const bodyInner = document.querySelector(".body__inner");
  let isOpened = false;

  const openSidebar = () => {
    burger.classList.add("burger_open");
    burger.classList.remove("burger_close");
    bodyInner.style.transform = "translateX(-280px)";
  };
  const closeSidebar = () => {
    burger.classList.remove("burger_open");
    burger.classList.add("burger_close");
    bodyInner.style.transform = "translateX(0)";
  };

  burger.onclick = () => {
    if (isOpened) closeSidebar();
    if (!isOpened) openSidebar();

    isOpened = !isOpened;
  };

  const bodyContent = document.querySelector(".body__content");
  bodyContent.onclick = (e) => {
    const clickedElem = e.target;

    if (burger.contains(clickedElem)) return;
    closeSidebar();
    isOpened = false;
  };
};
