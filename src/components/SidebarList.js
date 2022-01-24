import { Component } from 'react';

import { ReactComponent as Icon } from '../images/bottle.svg';
import ListCategory from './ListCategory';
import { itemsToCategories } from '../lib/helpers';
import Button from './Button';

class SidebarList extends Component {
  state = { title: '' };

  _renderListCategories() {
    const categories = itemsToCategories(this.props.list.items);
    if (!categories) return null;
    return categories.map((category, index) => {
      return (
        <ListCategory
          key={index}
          name={category.name}
          items={category.items}
        />
      );
    });
  }

  _onSubmit(e) {
    e.preventDefault();
    this.props.onSaveClick(this.state.title);
    this.setState({ title: '' });
  }

  _onChange(e) {
    this.setState({ title: e.target.value });
  }

  _renderActions() {
    switch (this.props.mode) {
      case 'edit':
        return (
          <form
            onSubmit={this._onSubmit.bind(this)}
            className="sidebar-list__actions__input-container"
          >
            <input
              className="sidebar-list__actions__input-container__input"
              placeholder="Enter a name"
              onChange={this._onChange.bind(this)}
              value={this.state.title}
            />
            <button
              type="submit"
              className="sidebar-list__actions__input-container__btn"
            >
              Save
            </button>
          </form>
        );
      case 'complete':
        return (
          <div className="sidebar-add__actions-container">
            <Button onClick={this.props.onCancelClick} color="transparent">
              Cancel
            </Button>
            <Button color="sky-blue">Complete</Button>
          </div>
        );

      default:
        break;
    }
  }

  render() {
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
                onClick={this.props.onAddClick}
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
              <span className="material-icons sidebar-list__list__title__icon">
                edit
              </span>
            </div>
            {this._renderListCategories()}
          </section>
        </div>

        <div className="sidebar__actions">{this._renderActions()}</div>
      </aside>
    );
  }
}
export default SidebarList;
