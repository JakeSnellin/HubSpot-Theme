const toggleMenu = () => {
  const hamburgerMenu = document.querySelector(".nav__hamburger-menu");

  const offScreenMenu = document.querySelector(".off-screen-menu");

  hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("menu-active");
    offScreenMenu.classList.toggle("menu-active");
    let expanded =
      hamburgerMenu.getAttribute("aria-expanded") === "true" || false;
    const toggledExpanded = !expanded;
    hamburgerMenu.setAttribute("aria-expanded", toggledExpanded);
    document.body.style.overflow = toggledExpanded ? "hidden" : "unset";
  });
};

export { toggleMenu };
