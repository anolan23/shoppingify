import React from 'react';
import Category from '../components/Category';
import Search from '../components/Search';

function Items() {
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
        <Category
          title="Fruit and vegetables"
          ingredients={[
            { name: 'Banana' },
            { name: 'Avocado' },
            { name: 'Pear' },
            { name: 'Banana' },
            { name: 'Avocado' },
            { name: 'Pear' },
          ]}
        />
        <Category
          title="Meat and Fish"
          ingredients={[
            { name: 'Banana' },
            { name: 'Pre-cooked corn 450g' },
            { name: 'Pear' },
            { name: 'Pork fillets 450g' },
            { name: 'Avocado' },
            { name: 'Pear' },
          ]}
        />
      </div>
    </main>
  );
}
export default Items;
