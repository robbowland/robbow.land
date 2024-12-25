// Render Feather icons initially
feather.replace();

// Function to apply the theme based on saved preference
function applySavedTheme() {
  const body = document.body;
  const toggleButton = document.getElementById("themeToggle");

  // Check localStorage for the user's theme preference
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    toggleButton.innerHTML = `<i data-feather="sun"></i>`;
  } else {
    body.classList.remove("dark-mode");
    toggleButton.innerHTML = `<i data-feather="moon"></i>`;
  }

  // Render Feather icons
  feather.replace();
}

// Function to toggle theme and save preference
function toggleDarkMode() {
  const body = document.body;
  const toggleButton = document.getElementById("themeToggle");

  // Toggle the dark-mode class
  const isDarkMode = body.classList.toggle("dark-mode");

  // Update the toggle button icon
  toggleButton.innerHTML = `<i data-feather="${isDarkMode ? "sun" : "moon"}"></i>`;

  // Save the user's preference in localStorage
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");

  // Re-render Feather icons
  feather.replace();
}

// Apply the saved theme when the page loads
applySavedTheme();

// Add animation to move the dot
setTimeout(() => {
  const title = document.getElementById("title");
  const dot = title.querySelector(".dot");

  // Replace the title after the animation ends
  dot.addEventListener("animationend", () => {
    title.innerHTML = "robbowland."; // Final text after animation
  });
}, 500); // Delay to allow initial rendering
