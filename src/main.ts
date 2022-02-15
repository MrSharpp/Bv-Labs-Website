import "./style.css";

let isNavOpen = false;

const navList = document.querySelector("#navUl");
const navToggleButton: HTMLButtonElement | null =
  document.querySelector("#navToggleButton");

const galleryToggleButtons = document.querySelectorAll(".gallery-toggle");

// let galleryfilter = 'all'

navToggleButton?.addEventListener("click", () => {
  if (isNavOpen) {
    isNavOpen = false;
    (navList as HTMLUListElement).style.display = "none";
    navToggleButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> <path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" /></svg>`;
  } else {
    isNavOpen = true;
    (navList as HTMLUListElement).style.display = "flex";
    navToggleButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg>`;
  }
});

window.addEventListener("resize", (e) => {
  /** @ts-ignore */
  if (e.currentTarget?.outerWidth < 640) {
    isNavOpen = false;
    (navList as HTMLUListElement).style.display = "none";
    (
      navToggleButton as HTMLButtonElement
    ).innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> <path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" /></svg>`;
  } else {
    isNavOpen = true;
    (navList as HTMLUListElement).style.display = "flex";
  }
});

galleryToggleButtons.forEach((btn) => {
  (btn as HTMLSpanElement).addEventListener("click", ({ target: button }) => {
    galleryToggleButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    (button as HTMLSpanElement).classList.add("active");

    galleryFilter((button as HTMLSpanElement).id);
  });
});

const galleryFilter = (filter: string) => {
  const images: NodeListOf<HTMLImageElement> =
    document.querySelectorAll(`.gallery img`);

  // @ts-ignore
  images.forEach((img) => {
    if (filter === "all") {
      return (img.style.display = "inline-block");
    }

    if (img.id !== filter) {
      img.style.display = "none";
    } else {
      img.style.display = "inline-block";
    }
  });
};

// check element is visible or not
function isElementInViewport(el: Element | null) {
  let rect = (el as Element).getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.top <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

const anchors = document.querySelectorAll("#navUl li a[href^='#']");

const AboutEl = document.querySelector("#about");
const HeroEl = document.querySelector("#hero");
const PortfolioEl = document.querySelector("#portfolio");
const ContactEl = document.querySelector("#contact");

window.addEventListener("scroll", () => {
  if (isElementInViewport(HeroEl)) {
    anchors.forEach((a) => a.classList.remove("active"));
    anchors[0].classList.add("active");
  }
  if (isElementInViewport(AboutEl)) {
    anchors.forEach((a) => a.classList.remove("active"));
    anchors[1].classList.add("active");
  }

  if (isElementInViewport(PortfolioEl)) {
    anchors.forEach((a) => a.classList.remove("active"));
    anchors[2].classList.add("active");
  }

  if (isElementInViewport(ContactEl)) {
    anchors.forEach((a) => a.classList.remove("active"));
    anchors[3].classList.add("active");
  }
});
