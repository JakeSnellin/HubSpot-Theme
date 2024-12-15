const toggleAccordion = () => {
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  for (const accordionHeader of accordionHeaders) {
    accordionHeader.addEventListener("click", () => {
      accordionHeader.classList.toggle("active");
      let panel = accordionHeader.parentElement.nextElementSibling;
      let expanded =
        accordionHeader.getAttribute("aria-expanded") === "true" || false;
      accordionHeader.setAttribute("aria-expanded", !expanded);
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        panel.setAttribute("aria-hidden", true);
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        panel.setAttribute("aria-hidden", false);
      }
    });
  }
};

export { toggleAccordion };
