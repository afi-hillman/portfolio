console.log("js loaded!");

// HOME
const leftCardDom = document.querySelector("#leftCard");
const cardText = document.querySelector(".intro");

leftCardDom.addEventListener("mouseover", () => {
  cardText.textContent =
    "Afi did his degree in Mechanical Engineering at University of Malaya. He thought it was his dream to do that. He later found out that it was in fact, not.";
});
leftCardDom.addEventListener("mouseout", () => {
  cardText.textContent = "This is Afi Hillman. He says hi!";
});

// COLOR CHANGE
const colorChangeBlock = document.querySelector(".color-change");
const colorExpandOptions = document.querySelectorAll(".dropdown-color");
const dropDownBlock = document.querySelector(".dropdown-content");

dropDownBlock.addEventListener("mouseover", () => {
  colorExpandOptions.forEach((option) => {
    option.setAttribute("style", "display: inline-block");
  });
});

dropDownBlock.addEventListener("mouseout", () => {
  colorExpandOptions.forEach((option) => {
    option.setAttribute("style", "display: none");
  });
});

const bodyDom = document.querySelector("body");

function changeColor(value) {
  if (value === 1) {
    bodyDom.setAttribute(
      "style",
      "background-color: var(--background-color1); color: var(--color1)"
    );
  } else if (value === 2) {
    bodyDom.setAttribute(
      "style",
      "background-color: var(--background-color2); color: var(--color2)"
    );
  } else if (value === 3) {
    bodyDom.setAttribute(
      "style",
      "background-color: var(--background-color3); color: var(--color3)"
    );
  }
}

// ABOUT
const bigCardDom = document.querySelector(".big-card");
const tempCardDom = document.querySelector(".temp-card");
const aboutTextDom = document.querySelector("#aboutText");

bigCardDom.addEventListener("mouseover", () => {
  bigCardDom.setAttribute("style", "width: 96%");
  tempCardDom.setAttribute("style", "display: none");

  aboutTextDom.textContent = `I have a flair for gaming, so half the time I am immersed in the digital realm. Maybe that's why I decided to wield the keyboard as a Software Engineer. If I am not button mashing, I am usually out with my friends (co-op mode is pretty fun too!). I also play badminton every Saturday.`;
});

bigCardDom.addEventListener("mouseout", () => {
  bigCardDom.setAttribute("style", "width: 520px");
  tempCardDom.setAttribute("style", "display: flex");

  aboutTextDom.textContent = `Zero professional experience in coding, but trying to make the most of it!`;
});

// NAV BAR
const homeNav = document.querySelector("#homeNav");
const homeSection = document.querySelector("header");

homeNav.addEventListener("click", () => {
  homeSection.scrollIntoView({ behavior: "smooth" });
});

const aboutNav = document.querySelector("#aboutNav");
const aboutSection = document.querySelector("#section2");

aboutNav.addEventListener("click", () => {
  aboutSection.scrollIntoView({ behavior: "smooth" });
});

const projectsNav = document.querySelector("#projectsNav");
const projectsSection = document.querySelector("#section3");

projectsNav.addEventListener("click", () => {
  projectsSection.scrollIntoView({ behavior: "smooth" });
});
const contactNav = document.querySelector("#contactNav");
const contactSection = document.querySelector("footer");

contactNav.addEventListener("click", () => {
  contactSection.scrollIntoView({ behavior: "smooth" });
});
