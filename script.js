// Toggles dark mode and updates the icon between moon (light mode) and sun (dark mode)
function toggleDarkMode() {
  const body = document.body;
  const toggleIcon = document.getElementById("themeToggle").querySelector("i");

  body.classList.toggle("dark-mode");

  // Update the icon based on the current mode
  if (body.classList.contains("dark-mode")) {
    toggleIcon.classList.replace("fa-moon", "fa-sun"); // Sun icon for dark mode
  } else {
    toggleIcon.classList.replace("fa-sun", "fa-moon"); // Moon icon for light mode
  }
}
