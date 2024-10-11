// components/ThemeProvider.js
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect } from "react";

const ThemeProvider = ({ children }) => {
  useEffect(() => {

    // change of theme
    const root = window.document.documentElement;
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
      root.classList.add(currentTheme);
    } else {
      root.classList.add("light"); 
    }
  }, []);

  return (
    <NextThemesProvider attribute="class" defaultTheme="light" enableSystem>
      {children}
    </NextThemesProvider>
  );
};

export default ThemeProvider;
