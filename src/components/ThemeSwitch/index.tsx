import type { FunctionalComponent } from 'preact';
import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import Icon from '../Icon';
import './style.css';

type ThemeLiteral = 'light' | 'dark';

const ThemeSwitch: FunctionalComponent = () => {
  const [theme, setTheme] = useState<ThemeLiteral>();

  useEffect(() => {
    setTheme(window.localStorage.theme);
  }, []);
  const updateTheme = (colorScheme: ThemeLiteral) => {
    window.localStorage.theme = colorScheme;
    const root = document.documentElement;
    root.setAttribute('data-theme', colorScheme);
    setTheme(colorScheme);
  };

  const isLight = theme === 'light';

  return (
    <button onClick={() => updateTheme(isLight ? 'dark' : 'light')}>
      {isLight ? <Icon type="moon" /> : <Icon type="sun" />}
    </button>
  );
};

export default ThemeSwitch;
