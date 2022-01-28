import React, { useRef } from 'react';

import Category from '../components/Category';
import Search from '../components/Search';
import { itemsToCategories } from '../lib/helpers';
import useActions from '../hooks/useActions';
import useScrollTop from '../hooks/useScrollTop';

function Items({ items }) {
  const dashBoardMainEl = useRef(null);
  useScrollTop(dashBoardMainEl);
  const { setItem, setItems } = useActions();
  const categories = itemsToCategories(items);
  const renderCategories = function () {
    if (!categories) return null;
    const sidebar = document.querySelector('#sidebar');

    return categories.map((category) => {
      return (
        <Category
          key={category.id}
          title={category.name}
          items={category.items}
          onItemClick={(item) => {
            setItem({ ...item, category: category.name });
            sidebar.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      );
    });
  };

  return (
    <main className="dashboard__main" ref={dashBoardMainEl}>
      <div className="dashboard__scrollable">
        <div className="items">
          <div className="items__heading">
            <h1>
              <span className="highlight">Shoppingify</span> allows you take
              your shopping list wherever you go
            </h1>
            <Search setItems={setItems} />
          </div>
          {renderCategories()}
        </div>
      </div>
    </main>
  );
}
export default Items;
