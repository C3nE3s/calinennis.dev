import './styles.scss';
import React from 'react';
import { Icon } from '../Icon';

export const NavMenu: React.FC = () => (
  <header>
    <div className="toolbar">
      <a href="#menu" id="menu-toggle" aria-label="Open main menu">
        <span className="sr-only">Open main menu</span>
        <Icon type="menu" />
      </a>
    </div>
    <nav id="menu" aria-label="Main menu">
      <div className="close-container">
        <a href="#" id="menu-close" aria-label="Close main menu">
          <span className="sr-only">Close main menu</span>
          <Icon type="close" />
        </a>
      </div>
      <ul>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Musings</a>
        </li>
      </ul>
    </nav>
    <a href="#" tabIndex={-1} hidden className="backdrop"></a>
  </header>
);
