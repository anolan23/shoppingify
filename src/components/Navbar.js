import { useNavigate } from 'react-router-dom';
import { ReactComponent as Logo } from '../images/logo.svg';
import Cart from './Cart';
import NavTab from './NavTab';

function Navbar({ list }) {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <Logo className="navbar__logo" onClick={() => navigate('')} />
        <div className="navbar__tabs">
          <NavTab to="" icon="format_list_bulleted" />
          <NavTab to="history" icon="replay" />
          <NavTab to="statistics" icon="insert_chart_outlined" />
        </div>
        <Cart cartSize={list.items.length} />
      </ul>
    </nav>
  );
}
export default Navbar;
