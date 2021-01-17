import React from 'react';

import Toggle from './Toggle';
import useDarkMode from 'use-dark-mode';

const DarkModeToggle = (props) => {
  const darkMode = useDarkMode(true);
  React.useEffect(()=> {
    props.updateThemeMode(darkMode.value);
  }, [darkMode.value]);

  return (
    <div className="dark-mode-toggle" >
      <button type="button" onClick={darkMode.disable}>
        ☀
      </button>
      <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
      <button type="button" onClick={darkMode.enable}>
        ☾
      </button>
    </div>
  );
};

export default DarkModeToggle;
