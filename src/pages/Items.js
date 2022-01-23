import React from 'react';
import Category from '../components/Category';
import Search from '../components/Search';

import useActions from '../hooks/useActions';

function Items({ categories }) {
  const { setItem } = useActions();
  const renderCategories = function () {
    if (!categories) return null;
    return categories.map((category) => {
      return (
        <Category
          key={category.id}
          title={category.name}
          items={category.items}
          onItemClick={(item) => setItem(item)}
        />
      );
    });
  };

  return (
    <main className="dashboard__main">
      <div className="items">
        <div className="items__heading">
          <h1>
            <span className="highlight">Shoppingify</span> allows you take your
            shopping list wherever you go
          </h1>
          <Search />
        </div>
        {renderCategories()}
      </div>
    </main>
  );
}
export default Items;
