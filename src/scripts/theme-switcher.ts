export const theme = {
  dark: "dark",
  light: "light",
};

export type ITheme = typeof theme;

export function loadPreferedTheme({
  shouldBeSetted = false,
}: {
  shouldBeSetted?: boolean;
}): keyof ITheme {
  const persistedPreferedTheme = window.localStorage.getItem("color-theme");

  if (persistedPreferedTheme) {
    console.log(`Using persisted prefered theme: ${persistedPreferedTheme} `);
    shouldBeSetted && setTheme(persistedPreferedTheme as keyof ITheme);
    return persistedPreferedTheme as keyof ITheme;
  }

  const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

  darkThemeMq.onchange = (e) => {
    console.log(`Prefered theme: ${e.matches ? "dark" : "light"}`);
    if (e.matches) {
      shouldBeSetted && setTheme("dark");
      return "dark";
    } else {
      return "light";
    }
  };

  return "dark";
}

export function setTheme(themeToBeSetted: keyof ITheme) {
  const bodyEl = document.body;
  const otherThemes = Object.keys(theme).filter((t) => t !== themeToBeSetted);

  window.localStorage.setItem("color-theme", themeToBeSetted);
  bodyEl.classList.add(theme[themeToBeSetted]);
  bodyEl.classList.remove(...otherThemes);
}

export function toggleTheme() {
  const currentTheme = loadPreferedTheme({
    shouldBeSetted: true,
  });

  if (currentTheme === "dark") {
    setTheme("light");
  } else {
    setTheme("dark");
  }
}
