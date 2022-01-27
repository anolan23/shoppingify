import React from 'react';
import Button from './Button';

function SidebarItem({ item, onDeleteClick, onAddClick, onBackClick }) {
  return (
    <React.Fragment>
      <div className="sidebar__content">
        <span className="link" onClick={onBackClick}>
          &larr; back
        </span>
        <div
          className="sidebar-item__image"
          style={{ backgroundImage: `url(${item.image})` }}
        ></div>
        <div className="sidebar-item__properties">
          <div className="sidebar-item__property">
            <span className="sidebar-item__property__title">name</span>
            <span className="sidebar-item__property__text--main">
              {item.name}
            </span>
          </div>
          <div className="sidebar-item__property">
            <span className="sidebar-item__property__title">category</span>
            <span className="sidebar-item__property__text">
              {item.category}
            </span>
          </div>
          <div className="sidebar-item__property">
            <span className="sidebar-item__property__title">note</span>
            <span className="sidebar-item__property__text">{item.note}</span>
          </div>
        </div>
      </div>

      <div className="sidebar__actions">
        <div className="sidebar-add__actions-container">
          <Button onClick={onDeleteClick} color="transparent">
            delete
          </Button>
          <Button
            type="submit"
            form="add-item"
            onClick={() => onAddClick(item)}
          >
            Add to list
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
}
export default SidebarItem;
