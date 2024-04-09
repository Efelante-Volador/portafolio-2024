const toggleTheme = document.getElementById("toggle-theme");
const toggleIcon = document.getElementById("toggle-icon");
const toggleText = document.getElementById("texto-toggle");

toggleTheme.addEventListener("click", () => {
  if (toggleIcon.src.includes("moon.png")) {
    toggleIcon.src = '../img/icons/sun.png'
    toggleText.textContent = 'Light Mode';
    localStorage.setItem("toggle", "dark");
    document.body.classList.add("dark");
  } else {
    toggleIcon.src = '../img/icons/moon.png'
    toggleText.textContent = 'Dark Mode';
    localStorage.setItem("toggle", "light");
    document.body.classList.remove("dark");
  }
})

