import { useState } from 'react';

import { ReactComponent as Icon } from '../images/bottle.svg';
import ListCategory from './ListCategory';
import { itemsToCategories } from '../lib/helpers';
import Button from './Button';
import useActions from '../hooks/useActions';

function SidebarList({ list, mode, onToggleModeClick }) {
  const [title, setTitle] = useState('');
  const { setShowCancelListPopup, setMode } = useActions();

  const renderListCategories = function () {
    const categories = itemsToCategories(list.items);
    if (!categories) return null;
    return categories.map((category, index) => {
      return (
        <ListCategory
          key={index}
          name={category.name}
          items={category.items}
          mode={mode}
        />
      );
    });
  };

  const onSubmit = function (e) {
    e.preventDefault();
    const string = JSON.stringify({
      ...list,
      timestamp: Date.now(),
      title,
    });
    localStorage.setItem('list', string);
    setMode('check');
    setTitle('');
  };

  const onChange = function (e) {
    setTitle(e.target.value);
  };

  const renderActions = function () {
    switch (mode) {
      case 'edit':
        return (
          <form
            onSubmit={onSubmit}
            className="sidebar-list__actions__input-container"
          >
            <input
              className="sidebar-list__actions__input-container__input"
              placeholder="Enter a name"
              onChange={onChange}
              value={title}
            />
            <button
              type="submit"
              className="sidebar-list__actions__input-container__btn"
            >
              Save
            </button>
          </form>
        );
      case 'check':
        return (
          <div className="sidebar-add__actions-container">
            <Button
              onClick={() => setShowCancelListPopup(true)}
              color="transparent"
            >
              Cancel
            </Button>
            <Button color="sky-blue">Complete</Button>
          </div>
        );

      default:
        break;
    }
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
            <button
              className="sidebar-list__add__btn"
              onClick={() => setMode('create')}
            >
              Add item
            </button>
          </div>
        </div>
        <section className="sidebar-list__list">
          <div className="sidebar-list__list__title">
            <span className="sidebar-list__list__title__text">
              Shopping list
            </span>
            <span
              className="material-icons sidebar-list__list__title__icon"
              onClick={() => {
                if (mode === 'edit') setMode('check');
                else setMode('edit');
              }}
            >
              edit
            </span>
          </div>
          {renderListCategories()}
        </section>
      </div>

      <div className="sidebar__actions">{renderActions()}</div>
    </aside>
  );
}
export default SidebarList;
