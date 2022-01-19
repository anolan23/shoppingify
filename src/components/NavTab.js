function NavTab({ active, onClick, icon }) {
  return (
    <div
      className={`navbar__tabs__tab ${
        active ? 'navbar__tabs__tab--active' : ''
      }`}
    >
      <span class="material-icons navbar__icon">{icon}</span>
    </div>
  );
}
export default NavTab;
