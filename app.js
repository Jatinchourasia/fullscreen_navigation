const burger = document.querySelector(".burger");
const h1 = document.querySelectorAll(".menu");
const h2 = document.querySelector("h2");
h1.forEach((item) => {
  item.addEventListener("click", menuclose);
  item.addEventListener("mouseover", effecton);
  item.addEventListener("mouseleave", effectoff);
});
burger.addEventListener("click", navToggle);

function navToggle(e) {
  if (!e.target.classList.contains("active")) {
    e.target.classList.add("active");
    gsap.to(".line1", 0.5, { rotateZ: "45deg", y: 10 });
    gsap.to(".line2", 0.5, { rotateZ: "-45deg", y: -10 });
    gsap.to(".navbox", 0.5, { y: "0" });
    document.body.classList.add("hide");
  } else {
    e.target.classList.remove("active");
    gsap.to(".line1", 0.5, { rotateZ: "0", y: 0, background: "white" });
    gsap.to(".line2", 0.5, { rotateZ: "0", y: 0, background: "white" });
    gsap.to(".navbox", 0.5, { y: "-100%" });

    document.body.classList.remove("hide");
  }
}

function menuclose(e) {
  burger.classList.remove("active");
  gsap.to(".line1", 0.5, { rotateZ: "0", y: 0, background: "white" });
  gsap.to(".line2", 0.5, { rotateZ: "0", y: 0, background: "white" });
  gsap.to(".navbox", 0.5, { y: "-100%" });

  document.body.classList.remove("hide");
}

function effecton(e) {
  item = e.target;
  if (item.classList.contains("l1")) {
    h2.innerText = "";
    h2.innerText = "HOME";
  }
  if (item.classList.contains("l2")) {
    h2.innerText = "";
    h2.innerText = "PORTFOLIO";
  }
  if (item.classList.contains("l3")) {
    h2.innerText = "";
    h2.innerText = "ABOUT";
  }
  if (item.classList.contains("l4")) {
    h2.innerText = "";
    h2.innerText = "SKILL";
  }
  if (item.classList.contains("l5")) {
    h2.innerText = "";
    h2.innerText = "CONTACT";
  }
}

function effectoff(e) {
  h2.innerText = "";
}
