import { createContext, useState, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";

const ThemeContext = createContext();

const lightTheme = {
  colors: {
    primary: "#007bff",
    background: "#fff",
  },
};

const darkTheme = {
  colors: {
    primary: "#343a40",
    background: "#121212",
  },
};

const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem("theme") === "dark" ? darkTheme : lightTheme
  );

  const toggleTheme = () => {
    setCurrentTheme((prevTheme) =>
      prevTheme === lightTheme ? darkTheme : lightTheme
    );
  };

  useEffect(() => {
    localStorage.setItem(
      "theme",
      currentTheme === darkTheme ? "dark" : "light"
    );
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme: toggleTheme }}>
      <ChakraProvider theme={currentTheme}>{children}</ChakraProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
