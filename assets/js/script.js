// Toggle Menu Function
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  menu.classList.toggle("open");
  icon.classList.toggle("open");

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
}

// Event Listener for CTRL + R Key Press
document.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.key === "r") {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});

// Hide News Bar on Scroll
window.addEventListener("scroll", function () {
  const newsBar = document.getElementById("news-bar");
  if (newsBar) {
    newsBar.style.display = window.scrollY > 0 ? "none" : "block";
  }
});

// Filter Projects (Only on projects.html)
function filterProjects(category) {
  const projects = document.querySelectorAll(".project-card");
  const buttons = document.querySelectorAll(".project-btn");

  // Remove active class from all buttons and add to the clicked button
  buttons.forEach((btn) => btn.classList.remove("active"));
  const activeButton = document.querySelector(
    `.project-btn[onclick*="${category}"]`
  );
  if (activeButton) activeButton.classList.add("active");

  // Show or hide projects based on the category
  projects.forEach((project) => {
    project.style.display =
      category === "all" || project.dataset.category === category
        ? "block"
        : "none";
  });
}

// Popup Functions
function showPopup(id) {
  const popup = document.getElementById(id);
  if (popup) popup.style.display = "flex";
}

function closePopup(id) {
  const popup = document.getElementById(id);
  if (popup) popup.style.display = "none";
}

// Dynamic Typing Animation
const titles = ["Electrical Engineer", "AI & Robotics Enthusiast", "Developer"];
let index = 0;
let charIndex = 0;
const typingSpeed = 100;
const erasingSpeed = 50;
const delayBetweenTitles = 1500;

function type() {
  const textDisplay = document.getElementById("dynamicText");
  if (textDisplay) {
    if (charIndex < titles[index].length) {
      textDisplay.textContent += titles[index].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(erase, delayBetweenTitles);
    }
  }
}

function erase() {
  const textDisplay = document.getElementById("dynamicText");
  if (textDisplay) {
    if (charIndex > 0) {
      textDisplay.textContent = titles[index].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, erasingSpeed);
    } else {
      index = (index + 1) % titles.length;
      setTimeout(type, typingSpeed);
    }
  }
}

// Bubble Animation in Profile Section
function createBubbles() {
  const container = document.querySelector(".bubbles-container");
  const bubbleCount = 30;

  if (!container) return;

  for (let i = 0; i < bubbleCount; i++) {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");

    const size = Math.random() * 30 + 10;
    const leftPosition = Math.random() * 100;
    const delay = Math.random() * 5;
    const duration = Math.random() * 2 + 5;

    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${leftPosition}%`;
    bubble.style.animationDuration = `${duration}s`;
    bubble.style.animationDelay = `${delay}s`;

    container.appendChild(bubble);
  }
}

// Initialize Functions on Page Load
window.onload = () => {
  createBubbles();

  if (window.location.pathname.endsWith("projects.html")) {
    filterProjects("all");
  }

  if (document.getElementById("dynamicText")) {
    setTimeout(type, delayBetweenTitles);
  }
};
