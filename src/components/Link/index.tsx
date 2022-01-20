import { h, FunctionalComponent } from 'preact';
import './styles.scss';

const Link: FunctionalComponent = ({ children, ...rest }) => (
  <a {...rest}>{children}</a>
);

export default Link;
