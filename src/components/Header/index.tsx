export const Header: React.FC = () => (
  <header>
    <div>
      <a href="#menu" id="menu-toggle" aria-label="Open main menu">
        <span className="sr-only">Open main menu</span>
        <IconRadixIconsHamburgerMenu />
      </a>
    </div>
    <nav id="menu" aria-label="Main menu">
      <div>
        <a href="#" id="menu-close" aria-label="Close main menu">
          <span className="sr-only">Close main menu</span>
          <IconRadixIconsCross1 />
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
    <a href="#" tabIndex={-1} hidden></a>
  </header>
);
