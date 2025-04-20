
const btn = document.getElementById("modeToggle");
const btn2 = document.getElementById("modeToggle2");
const themeIcons = document.querySelectorAll(".icon");
const currentTheme = localStorage.getItem("theme");

// Auto-apply system theme if no preference stored
if (!currentTheme) {
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (systemPrefersDark) {
    setDarkMode();
  } else {
    setLightMode();
  }
} else if (currentTheme === "dark") {
  setDarkMode();
} else {
  setLightMode();
}

function setDarkMode() {
  document.documentElement.setAttribute("theme", "dark");
  localStorage.setItem("theme", "dark");
  themeIcons.forEach(icon => {
    icon.src = icon.getAttribute("src-dark");
  });
}

function setLightMode() {
  document.documentElement.setAttribute("theme", "light");
  localStorage.setItem("theme", "light");
  themeIcons.forEach(icon => {
    icon.src = icon.getAttribute("src-light");
  });
}

btn.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("theme");
  if (current === "dark") {
    setLightMode();
  } else {
    setDarkMode();
  }
});

btn2.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("theme");
  if (current === "dark") {
    setLightMode();
  } else {
    setDarkMode();
  }
});
