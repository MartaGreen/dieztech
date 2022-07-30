import "./header.scss";
import "./sidebar.scss";

import "../../assets/images/logo.svg";

window.onload = () => {
  const sidebar = document.getElementById("sidebar");
  const sidebarBurger = sidebar.querySelector(".sidebar__burger");
  const sidebarContent = sidebar.querySelector(".sidebar__content");
  let isOpened = false;

  const openSidebar = () => {
    sidebarBurger.classList.add("sidebar__burger_open");
    sidebarBurger.classList.remove("sidebar__burger_close");
    sidebarContent.classList.remove("sidebar__content_hidden");
  };
  const closeSidebar = () => {
    sidebarBurger.classList.remove("sidebar__burger_open");
    sidebarBurger.classList.add("sidebar__burger_close");
    sidebarContent.classList.add("sidebar__content_hidden");
  };

  sidebarBurger.onclick = () => {
    if (isOpened) closeSidebar();
    if (!isOpened) openSidebar();

    isOpened = !isOpened;
  };
};
