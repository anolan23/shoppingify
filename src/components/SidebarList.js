import { ReactComponent as Icon } from '../images/bottle.svg';
import ListCategory from './ListCategory';
import { itemsToCategories } from '../lib/helpers';

function SidebarList({ list, onAddClick }) {
  const renderListCategories = function () {
    const categories = itemsToCategories(list.items);
    if (!categories) return null;
    return categories.map((category, index) => {
      return (
        <ListCategory key={index} name={category.name} items={category.items} />
      );
    });
  };

  return (
    <aside className="sidebar">
      <div className="sidebar__content sidebar-list">
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
          {renderListCategories()}
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
