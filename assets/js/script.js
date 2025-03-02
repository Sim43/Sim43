function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  menu.classList.toggle("open");
  icon.classList.toggle("open");

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
}

// event listener for CTRL + R key press
document.addEventListener('keydown', (event) => {
  if (event.ctrlKey && event.key === 'r') {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});

window.addEventListener('scroll', function() {
  var newsBar = document.getElementById('news-bar');
  if (window.scrollY > 0) {
    newsBar.style.display = 'none';
  } else {
    newsBar.style.display = 'block';
  }
});

function filterProjects(category) {
  const projects = document.querySelectorAll(".project-card");
  const buttons = document.querySelectorAll(".project-btn");

  // Remove active class from all buttons and add to the clicked button
  buttons.forEach((btn) => btn.classList.remove("active"));
  document
    .querySelector(`.project-btn[onclick*="${category}"]`)
    .classList.add("active");

  // Show or hide projects based on the category
  projects.forEach((project) => {
    if (category === "all" || project.dataset.category === category) {
      project.style.display = "block"; // Show matching projects
    } else {
      project.style.display = "none"; // Hide non-matching projects
    }
  });
}

function showPopup(id) {
  document.getElementById(id).style.display = "flex";
}

function closePopup(id) {
  document.getElementById(id).style.display = "none";
}

const titles = ["Electrical Engineer", "AI & Robotics Enthusiast", "Developer"];
let index = 0;
let charIndex = 0;
const typingSpeed = 100; // Typing speed in milliseconds
const erasingSpeed = 50; // Erasing speed in milliseconds
const delayBetweenTitles = 1500; // Delay between titles in milliseconds

function type() {
    const textDisplay = document.getElementById("dynamicText");
    if (charIndex < titles[index].length) {
        textDisplay.textContent += titles[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, delayBetweenTitles);
    }
}

function erase() {
    const textDisplay = document.getElementById("dynamicText");
    if (charIndex > 0) {
        textDisplay.textContent = titles[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingSpeed);
    } else {
        index = (index + 1) % titles.length;
        setTimeout(type, typingSpeed);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, delayBetweenTitles);
});

// JavaScript to dynamically create bubbles in the profile section
function createBubbles() {
  const container = document.querySelector(".bubbles-container");
  const bubbleCount = 30; // Adjust the number of bubbles

  // Check if the container exists
  if (!container) {
    console.error("Bubbles container not found!");
    return;
  }

  for (let i = 0; i < bubbleCount; i++) {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");

    // Randomize the size and position of the bubbles
    const size = Math.random() * 30 + 10; // Random size between 10px and 40px
    const leftPosition = Math.random() * 100; // Random horizontal position
    const delay = Math.random() * 5; // Random delay to stagger the animation
    const duration = Math.random() * (7 - 5) + 5; // Random duration between 5s and 7s for each bubble

    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${leftPosition}%`;
    bubble.style.animationDuration = `${duration}s`; // Apply random animation duration
    bubble.style.animationDelay = `${delay}s`; // Apply random delay

    // Append the bubble to the container
    container.appendChild(bubble);
  }
}

// Call the createBubbles function when the page loads
window.onload = () => {
  createBubbles();
  filterProjects("all");
};