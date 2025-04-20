function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Dark / light mode

const btn = document.getElementById("modeToggle");
const btn2 = document.getElementById("modeToggle2");
const themeIcons = document.querySelectorAll(".icon");
let currentTheme = localStorage.getItem("theme");

// Auto-apply system theme on first visit
if (!currentTheme) {
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  currentTheme = systemPrefersDark ? "dark" : "light";
  localStorage.setItem("theme", currentTheme);
}

if (currentTheme === "dark") {
  setDarkMode();
} else {
  setLightMode();
}

btn.addEventListener("click", function () {
  setTheme();
});

btn2.addEventListener("click", function () {
  setTheme();
});

function setTheme() {
  let currentTheme = document.body.getAttribute("theme");

  if (currentTheme === "dark") {
    setLightMode();
  } else {
    setDarkMode();
  }
}

function setDarkMode() {
  document.body.setAttribute("theme", "dark");
  localStorage.setItem("theme", "dark");

  themeIcons.forEach((icon) => {
    icon.src = icon.getAttribute("src-dark");
  });
}

function setLightMode() {
  document.body.removeAttribute("theme");
  localStorage.setItem("theme", "light");

  themeIcons.forEach((icon) => {
    icon.src = icon.getAttribute("src-light");
  });
}

document.querySelectorAll(".copy-btn").forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const code = btn.closest(".code-block-wrapper").querySelector("code").innerText;
    navigator.clipboard.writeText(code);
    btn.textContent = "✅ Copied";
    setTimeout(() => btn.textContent = "📋 Copy", 1500);
  });
});

document.querySelectorAll(".download-btn").forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const code = btn.closest(".code-block-wrapper").querySelector("code").innerText;
    const blob = new Blob([code], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `exploit.py`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  });
});