const primaryNav = document.querySelector("#primary-nav")
const navButton = document.querySelector(
  ".primary-header__btn"
)
const navButtonImg = navButton.querySelector("img")

navButton.addEventListener("click", () => {
  if (navButton.getAttribute("aria-expanded") === "false") {
    navButton.setAttribute("aria-expanded", true)
    navButtonImg.src = "/assets/images/icon-menu-close.svg"
  } else {
    navButton.setAttribute("aria-expanded", false)
    navButtonImg.src = "/assets/images/icon-menu.svg"
  }

  primaryNav.toggleAttribute("data-expanded")
})
