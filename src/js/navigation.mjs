function mainMenuHandler(ev) {
    // toggle the show class on the global-nav
    document.querySelector(".global-nav").classList.toggle("show");
    // check to see if target is the button or something inside the button

    // check to see if we just opened or closed the menu
    if (document.querySelector(".global-nav").classList.contains("show")) {
        // if we opened it then set the aria-expanded attribute on the button to true
        ev.target.setAttribute('aria-expanded', true);
    } else {
        // if we closed it then set the aria-expanded attribute on the button to false
        ev.target.setAttribute('aria-expanded', false);
    };
}

function subMenuHandler(ev) {
    const submenu = ev.currentTarget.closest('li').querySelector('.global-nav__submenu');
    submenu.classList.toggle('show');
    ev.currentTarget.querySelector(".icon").classList.toggle("rotate");
}

export function enableNavigation() {
  // use a querySelector to get the menu buttons
  const menuButton = document.querySelector("#global-nav-toggle");
  const subMenuButton = document.querySelectorAll(".global-nav__split-button__toggle");
  // when the main menu button is clicked:
  menuButton.addEventListener("click", mainMenuHandler);
  subMenuButton.forEach((button) => {
    button.addEventListener("click", subMenuHandler);
  });
}