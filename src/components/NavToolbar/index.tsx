import { FunctionalComponent } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import './styles.scss';

type ThemeLiteral = 'light' | 'dark';

export const NavToolbar: FunctionalComponent = () => {
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
    <header>
      <div className="toolbar-container">
        <a href="">About</a>
        <span>|</span>
        <a href="">Musings</a>
        <span>|</span>
        <button onClick={() => updateTheme(isLight ? 'dark' : 'light')}>
          {isLight ? (
            <svg width="1em" height="1em" viewBox="0 0 15 15">
              <g fill="none">
                <path
                  d="M1.66 11.362A6.5 6.5 0 0 0 7.693.502a7 7 0 1 1-6.031 10.86z"
                  stroke="currentColor"
                  strokeLinejoin="round"></path>
              </g>
            </svg>
          ) : (
            <svg width="1em" height="1em" viewBox="0 0 15 15">
              <g fill="none">
                <path
                  d="M7.5 1.5v-1m0 13.99v-.998m6-5.997h1m-13 0h-1m2-4.996l-1-1m12 0l-1 1m-10 9.993l-1 1m12 0l-1-1m-2-4.997a2.999 2.999 0 0 1-3 2.998a2.999 2.999 0 1 1 3-2.998z"
                  stroke="currentColor"
                  strokeLinecap="square"></path>
              </g>
            </svg>
          )}
        </button>
      </div>
    </header>
  );
};
