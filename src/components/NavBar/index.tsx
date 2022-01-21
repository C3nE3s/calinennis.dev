import { FunctionalComponent } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import Icon from '../Icon';
import './styles.scss';

type ThemeLiteral = 'light' | 'dark';

const NavBar: FunctionalComponent = () => {
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
      <nav id="menu" aria-label="Main menu">
        <ul>
          <li>
            <a
              href="#"
              id="menu-close"
              aria-label="Close main menu"
              role="button"
            >
              <span className="sr-only">Close main menu</span>
              <Icon type="close" />
            </a>
          </li>
          <li>
            <a href="/" aria-label="Navigate to the homepage">
              Home
            </a>
          </li>
          <li>
            <a href="/about" aria-label="Find out more about me">
              About
            </a>
          </li>
          <li>
            <a href="/musings" aria-label="Explore my blog">
              Musings
            </a>
          </li>
        </ul>
      </nav>
      <div className="toolbar-container">
        <div className="controls-left">
          <a href="/" className="hide-on-small" aria-label="Navigate Home">
            <Icon type="signature" />
          </a>
          <a
            href="#menu"
            className="hide-on-large"
            id="menu-toggle"
            aria-label="Open main menu"
            role="button"
          >
            <span className="sr-only">Open main menu</span>
            <Icon type="menu" />
          </a>
        </div>
        <div className="controls-right">
          <a
            href="/about"
            aria-label="Find out more about me"
            className="hide-on-small"
          >
            About
          </a>
          <span className="hide-on-small">|</span>
          <a
            href="/musings"
            aria-label="Explore my blog"
            className="hide-on-small"
          >
            Musings
          </a>
          <span className="hide-on-small">|</span>
          <button
            className="theme-button"
            onClick={() => updateTheme(isLight ? 'dark' : 'light')}
          >
            {isLight ? <Icon type="moon" /> : <Icon type="sun" />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
