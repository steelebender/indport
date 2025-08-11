const useracc = document.querySelector(".useracc");
const signup = document.querySelector(".signup");
const burger = document.querySelector(".burger");
const indexbody = document.querySelector(".indexbody");
const menucontainer = document.querySelector(".menucontainer");
const dbody = document.body;

dbody.addEventListener("click", (e) => {
  console.log(e.target);
});

window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight) {
    menucontainer.classList.add("scrolled"); // scroll past first page → dark bg
  } else {
    menucontainer.classList.remove("scrolled"); // top of page → transparent bg
  }
});

const sidecontainer = document.querySelector(".sidecontainer");
const body = document.body;

// Toggle login menu on user icon click

// Track side menu open state
let sideMenuOpen = false;

burger.addEventListener("click", function (e) {
  e.stopPropagation(); // prevent immediate closing by body click
  sidecontainer.classList.toggle("display");
  sideMenuOpen = sidecontainer.classList.contains("display");

  if (sideMenuOpen) {
    indexbody.classList.add("dim");
  } else {
    indexbody.classList.remove("dim");
  }
});

// Close side menu if clicking outside
body.addEventListener("click", function (event) {
  if (
    sideMenuOpen &&
    !burger.contains(event.target) &&
    !sidecontainer.contains(event.target)
  ) {
    sidecontainer.classList.remove("display");
    indexbody.classList.remove("dim");
    sideMenuOpen = false;
  }
});
