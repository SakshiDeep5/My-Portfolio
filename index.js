const themeToggle = document.querySelector("#themeToggle");
const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");

const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme === "light") {
  document.documentElement.dataset.theme = "light";
  themeToggle.textContent = "☾";
  themeToggle.setAttribute("aria-label", "Switch to dark mode");
}

themeToggle.addEventListener("click", () => {
  const isLight = document.documentElement.dataset.theme === "light";
  document.documentElement.dataset.theme = isLight ? "dark" : "light";
  localStorage.setItem("portfolio-theme", isLight ? "dark" : "light");
  themeToggle.textContent = isLight ? "☼" : "☾";
  themeToggle.setAttribute("aria-label", isLight ? "Switch to light mode" : "Switch to dark mode");
});

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "Close" : "Menu";
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "Menu";
  });
});
