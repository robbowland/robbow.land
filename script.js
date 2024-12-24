// Render Feather icons initially
feather.replace();

function toggleDarkMode() {
  const body = document.body;
  const toggleButton = document.getElementById("themeToggle");

  // Toggle dark mode class
  body.classList.toggle("dark-mode");

  // Determine the new icon name based on the mode
  const newIconName = body.classList.contains("dark-mode") ? "sun" : "moon";

  // Update the innerHTML of the toggle button with a new <i> element
  toggleButton.innerHTML = `<i data-feather="${newIconName}"></i>`;

  // Re-render Feather icons to apply the new icon
  feather.replace();
}
