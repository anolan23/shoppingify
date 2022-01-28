import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as Icon } from '../images/bottle.svg';
import ListCategory from './ListCategory';
import { itemsToCategories } from '../lib/helpers';
import Button from './Button';
import useActions from '../hooks/useActions';
import { useStore } from '../context/store';
import { ReactComponent as PersonIcon } from '../images/person.svg';
import SaveForm from './SaveForm';

function SidebarList({ mode }) {
  const [state] = useStore();
  const [title, setTitle] = useState('');
  const { setShowCancelListPopup, setMode, setList, completeList } =
    useActions();
  const navigate = useNavigate();

  const { list } = state;
  const categories = itemsToCategories(list.items);
  const listIsEmpty = list.items.length === 0;

  const renderListCategories = function () {
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
    setList({ ...list, title });
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
          <SaveForm
            onSubmit={onSubmit}
            onChange={onChange}
            value={title}
            placeHolder="Enter a name"
            disabled={listIsEmpty}
          />
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
            <Button
              onClick={() => {
                completeList(list);
                navigate(`history`);
              }}
              color="sky-blue"
            >
              Complete
            </Button>
          </div>
        );

      default:
        break;
    }
  };

  const renderTitle = function () {
    if (!list.items.length) return null;
    return (
      <div className="sidebar-list__list__title">
        <span className="sidebar-list__list__title__text">{list.title}</span>
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
    );
  };

  const renderEmpty = function () {
    if (listIsEmpty)
      return (
        <div className="sidebar-list__empty">
          <div className="sidebar-list__empty__message">No items</div>
          <div className="sidebar-list__empty__icon-box">
            <PersonIcon className="sidebar-list__empty__icon-box__icon" />
          </div>
        </div>
      );
  };

  return (
    <React.Fragment>
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
          {renderTitle()}
          {renderListCategories()}
        </section>
        {renderEmpty()}
      </div>

      <div className="sidebar__actions">{renderActions()}</div>
    </React.Fragment>
  );
}
export default SidebarList;
