"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "cyber-saffron-light" | "cyber-saffron-dark";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "cyber-saffron-light",
  toggleTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("cyber-saffron-light");

  // Load saved theme on mount
  useEffect(() => {
    const saved = localStorage.getItem("bharatstay-theme") as Theme | null;
    const initial = saved ?? "cyber-saffron-light";
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  function toggleTheme() {
    const next: Theme =
      theme === "cyber-saffron-light" ? "cyber-saffron-dark" : "cyber-saffron-light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("bharatstay-theme", next);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
