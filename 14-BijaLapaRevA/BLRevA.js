const navbarMenu = document.querySelector(".navbar--menu");
const navbarToggle = document.querySelector(".navbar--toggle");

navbarToggle.addEventListener("click", () => {
  let visibleMenu = navbarMenu.getAttribute("data-visible");
  let toggleState = visibleMenu;
  
  if (visibleMenu === "false") {
    visibleMenu = navbarMenu.setAttribute("data-visible", "true");
    toggleState = navbarToggle.setAttribute("data-visible", "true");
    
} else {
    visibleMenu = navbarMenu.setAttribute("data-visible", "false");
    toggleState = navbarToggle.setAttribute("data-visible", "false");
  }
});
