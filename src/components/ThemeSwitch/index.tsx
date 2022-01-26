import { h, FunctionalComponent } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import Icon from '../Icon';
import './styles.css';

type ThemeLiteral = 'light' | 'dark';

const ThemeSwitch: FunctionalComponent = () => {
  const [theme, setTheme] = useState<ThemeLiteral>();

  useEffect(() => {
    setTheme(window.localStorage.theme);
  }, []);
  const updateTheme = (colorScheme: ThemeLiteral) => {
    window.localStorage.theme = colorScheme;
    const el = document.querySelector('html');
    el!.setAttribute('data-theme', colorScheme);
    setTheme(colorScheme);
  };

  const isLight = theme === 'light';

  return (
    <button
      className="theme-button"
      onClick={() => updateTheme(isLight ? 'dark' : 'light')}
    >
      {isLight ? <Icon type="moon" /> : <Icon type="sun" />}
    </button>
  );
};

export default ThemeSwitch;
