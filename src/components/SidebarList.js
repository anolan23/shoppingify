import { ReactComponent as Icon } from '../images/bottle.svg';
import ListCategory from './ListCategory';

function SidebarList({ onAddClick }) {
  return (
    <aside className="sidebar">
      <div className="sidebar__content">
        <div className="sidebar-list__add">
          <div className="sidebar-list__add__icon-container">
            <Icon className="sidebar-list__add__icon" />
          </div>
          <div className="sidebar-list__add__info">
            <span className="sidebar-list__add__text">
              Didn't find what you need?
            </span>
            <button className="sidebar-list__add__btn" onClick={onAddClick}>
              Add item
            </button>
          </div>
        </div>
        <section className="sidebar-list__list">
          <div className="sidebar-list__list__title">
            <span className="sidebar-list__list__title__text">
              Shopping list
            </span>
            <span className="material-icons sidebar-list__list__title__icon">
              edit
            </span>
          </div>
          <ListCategory
            title="Fruit and vegetables"
            ingredients={[
              { name: 'Avocado', qty: 3 },
              { name: 'Apple', qty: 3 },
              { name: 'Banana', qty: 1 },
            ]}
          />
          <ListCategory
            title="Fruit and vegetables"
            ingredients={[
              { name: 'Avocado', qty: 3 },
              { name: 'Apple', qty: 3 },
              { name: 'Banana', qty: 1 },
            ]}
          />
          <ListCategory
            title="Fruit and vegetables"
            ingredients={[
              { name: 'Avocado', qty: 3 },
              { name: 'Apple', qty: 3 },
              { name: 'Banana', qty: 1 },
            ]}
          />
        </section>
      </div>

      <form className="sidebar__actions">
        <div className="sidebar-list__actions__input-container">
          <input
            className="sidebar-list__actions__input-container__input"
            placeholder="Enter a name"
          />
          <div className="sidebar-list__actions__input-container__btn">
            Save
          </div>
        </div>
      </form>
    </aside>
  );
}
export default SidebarList;
