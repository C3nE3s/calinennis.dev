import { h, FunctionalComponent } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import Icon from '../Icon';

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

  const buttonStyles = {
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    height: '100%',
    width: '100%',
    color: 'var(--neutral-12)',
    fontSize: 'var(--font-size-1)',
  };

  return (
    <button
      style={buttonStyles}
      onClick={() => updateTheme(isLight ? 'dark' : 'light')}
    >
      {isLight ? <Icon type="moon" /> : <Icon type="sun" />}
    </button>
  );
};

export default ThemeSwitch;
