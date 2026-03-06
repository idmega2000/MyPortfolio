// import React from 'react';

import Toggle from './Toggle';
// import useDarkMode from 'use-dark-mode';

// const DarkModeToggle = (props) => {
//   const darkMode = useDarkMode(true);
//   React.useEffect(()=> {
//     props.updateThemeMode(darkMode.value);
//   }, [darkMode.value]);

//   return (
//     <div className="dark-mode-toggle" >
//       <button type="button" onClick={darkMode.disable}>
//         ☀
//       </button>
//       <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
//       <button type="button" onClick={darkMode.enable}>
//         ☾
//       </button>
//     </div>
//   );
// };
// const DarkModeToggle = (props) =>  {
//   const [dark, setDark] = useState(
//     window.matchMedia("(prefers-color-scheme: dark)").matches
//   );

//   useEffect(() => {
//     document.body.classList.toggle("dark", dark);
//   }, [dark]);

//   return [dark, setDark];
// }
// export default DarkModeToggle;



import { useState, useEffect } from "react";

const DarkModeToggle = (props) => {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("dark-mode");

    if (saved !== null) {
      setDarkMode(JSON.parse(saved));
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDarkMode(prefersDark);
    }

    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    localStorage.setItem("dark-mode", JSON.stringify(darkMode));

    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }

    props.updateThemeMode(darkMode);
  }, [darkMode, mounted]);

  const enable = () => setDarkMode(true);
  const disable = () => setDarkMode(false);
  const toggle = () => setDarkMode((prev) => !prev);

  if (!mounted) return null; // prevents hydration mismatch

  return (
    <div className="dark-mode-toggle">
      <button type="button" onClick={disable}>☀</button>

      <Toggle checked={darkMode} onChange={toggle} />

      <button type="button" onClick={enable}>☾</button>
    </div>
  );
};

export default DarkModeToggle;