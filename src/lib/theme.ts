function themeInitialization(): void {
  const savedTheme = localStorage.theme;

  const theme = savedTheme === "dark" ? "dark" : "custom-light";

  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

function themeChange(): void {
  const newTheme = localStorage.theme === "dark" ? "custom-light" : "dark";

  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
}

export { themeInitialization, themeChange };
