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

// youtube
  document.querySelectorAll('.yt-placeholder').forEach(div => {
    const id = div.dataset.id;
    const thumbnail = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

    div.style.position = 'relative';
    div.style.cursor = 'pointer';
    div.style.paddingTop = '56.25%'; // 16:9
    div.style.backgroundImage = `url(${thumbnail})`;
    div.style.backgroundSize = 'cover';
    div.style.backgroundPosition = 'center';

    const playButton = document.createElement('div');
    playButton.style.position = 'absolute';
    playButton.style.top = '50%';
    playButton.style.left = '50%';
    playButton.style.transform = 'translate(-50%, -50%)';
    playButton.style.width = '64px';
    playButton.style.height = '64px';
    playButton.style.background = 'rgba(0, 0, 0, 0.6)';
    playButton.style.borderRadius = '50%';
    playButton.style.boxShadow = '0 0 10px rgba(0,0,0,0.3)';
    playButton.style.display = 'flex';
    playButton.style.justifyContent = 'center';
    playButton.style.alignItems = 'center';
    playButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="36" height="36"><path d="M8 5v14l11-7z"/></svg>`;
    div.appendChild(playButton);

    div.addEventListener('click', () => {
      const iframe = document.createElement('iframe');
      iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1`;
      iframe.title = 'YouTube video player';
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      iframe.allowFullscreen = true;
      iframe.referrerPolicy = 'strict-origin-when-cross-origin';
      iframe.style.position = 'absolute';
      iframe.style.top = 0;
      iframe.style.left = 0;
      iframe.style.width = '100%';
      iframe.style.height = '100%';
      div.innerHTML = ''; 
      div.appendChild(iframe);
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