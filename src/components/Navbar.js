import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../images/logo.svg';
import Cart from './Cart';
import NavTab from './NavTab';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <Logo className="navbar__logo" />
        <div className="navbar__tabs">
          <NavTab active icon="format_list_bulleted" />
          <NavTab icon="replay" />
          <NavTab icon="insert_chart_outlined" />
        </div>
        <Cart />
      </ul>
    </nav>
  );
}
export default Navbar;
