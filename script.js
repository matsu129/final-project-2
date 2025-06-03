// nav closed
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelectorAll("header nav a");

  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      const href = link.getAttribute("href");
      const isSamePageAnchor = href && href.startsWith("./index.html#");

      if (window.innerWidth <= 1200 && isSamePageAnchor) {
        setTimeout(() => {
          menuToggle.checked = false;
        }, 200); 
      }
    });
  });
});

// characters
document.addEventListener("DOMContentLoaded", function () {
  const target = document.querySelector("#characters ul");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          target.classList.add("animate__fadeInLeft", "animate__animated", "animate__slow");
          target.style.opacity = 1;
          observer.unobserve(target);
        }
      });
    },
    {
      threshold: 0.3,
    }
  );

  observer.observe(target);
});

// dvd slider
const images = [
  "./imgs/DVD_01.png",
  "./imgs/DVD_02.png",
  "./imgs/DVD_03.png",
  "./imgs/DVD_04.png"
];
let currentIndex = 0;

const imgElement = document.getElementById("dvd-img");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

function updateImage() {
  imgElement.setAttribute("src", images[currentIndex]);
}

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
});

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
});


// back to top
const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});