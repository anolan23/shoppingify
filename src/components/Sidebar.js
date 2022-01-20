import { ReactComponent as Icon } from '../images/bottle.svg';
import ListCategory from './ListCategory';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__content">
        <div className="sidebar__add">
          <div className="sidebar__add__icon-container">
            <Icon className="sidebar__add__icon" />
          </div>
          <div className="sidebar__add__info">
            <span className="sidebar__add__text">
              Didn’t find what you need?
            </span>
            <button className="sidebar__add__btn">Add item</button>
          </div>
        </div>
        <section className="sidebar__list">
          <div className="sidebar__list__title">
            <span className="sidebar__list__title__text">Shopping list</span>
            <span class="material-icons sidebar__list__title__icon">edit</span>
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
        <div className="sidebar__actions__input-container">
          <input
            className="sidebar__actions__input-container__input"
            placeholder="Enter a name"
          />
          <div className="sidebar__actions__input-container__btn">Save</div>
        </div>
      </form>
    </aside>
  );
}
export default Sidebar;
