// Apply stored theme on load
window.onload = function () {
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme) {
    document.body.className = storedTheme;
    document.getElementById("themeSelector").value = storedTheme;
  }
};

// Save theme preference and apply
document
  .getElementById("themeSelector")
  .addEventListener("change", function () {
    const selectedTheme = this.value;
    document.body.className = selectedTheme;
    localStorage.setItem("theme", selectedTheme);
  });

// Trigger animation on box
document.getElementById("animateBtn").addEventListener("click", function () {
  const box = document.getElementById("box");
  box.classList.remove("animate"); // reset animation
  void box.offsetWidth; // trigger reflow
  box.classList.add("animate");
});
