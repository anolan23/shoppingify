import { useNavigate, useResolvedPath, useMatch } from 'react-router-dom';

function NavTab({ to, icon }) {
  const navigate = useNavigate();
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div
      onClick={() => navigate(to)}
      className={`navbar__tabs__tab ${
        match ? 'navbar__tabs__tab--active' : ''
      }`}
    >
      <span class="material-icons navbar__icon">{icon}</span>
    </div>
  );
}
export default NavTab;
