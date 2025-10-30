// import { createContext, useState, useEffect } from "react";

// export const themeContext = createContext();

// export function ThemeProvider({ children }) {
//   const [theme, setTheme] = useState("light");

//   const toggleTheme = () => {
//     setTheme((prev) => (prev === "dark" ? "light" : "dark"));
//   };

//   useEffect(() => {
//     document.body.className = theme;
//   }, [theme]);

//   return (
//     <themeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </themeContext.Provider>
//   );
// }
