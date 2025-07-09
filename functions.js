const useracc = document.querySelector(".useracc");
const login = document.querySelector(".login");
const signup = document.querySelector(".signup");
const burger = document.querySelector(".burger");
const indexbody = document.querySelector(".indexbody");

const sidecontainer = document.querySelector(".sidecontainer");
const body = document.body;

useracc.addEventListener("click", function () {
  login.classList.add("activate");
});

body.addEventListener("click", function (event) {
  console.log(event.target);
  if (!login.contains(event.target) && !useracc.contains(event.target)) {
    login.classList.remove("activate");
  }
});

burger.addEventListener("click", function () {
  sidecontainer.classList.toggle("display");
  if (!indexbody.classList.contains("dim")) {
    2;
    indexbody.classList.add("dim");
  } else {
    indexbody.classList.remove("dim");
  }
  body.addEventListener("click", function (event) {
    if (
      !burger.contains(event.target) &&
      !sidecontainer.contains(event.target)
    ) {
      indexbody.classList.remove("dim");
      sidecontainer.classList.remove("display");
    }
  });
});
