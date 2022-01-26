import React from 'react';
import StatContainer from '../components/StatContainer';
import Stat from '../components/Stat';
import { topItemsFromLists, topCategories } from '../lib/helpers';

function Statistics({ lists }) {
  const items = topItemsFromLists(lists);
  const categories = topCategories(lists);

  const renderItems = function () {
    if (!items) return null;
    return items.map((item, index) => {
      const { name, percent } = item;
      return <Stat key={index} title={name} percent={percent} />;
    });
  };
  const renderCategories = function () {
    if (!categories) return null;
    return categories.map((category, index) => {
      const { name, percent } = category;
      return <Stat key={index} title={name} percent={percent} />;
    });
  };
  return (
    <main className="dashboard__main">
      <div className="dashboard__scrollable">
        <div className="statistics">
          <div className="statistics__trending">
            <StatContainer title="Top Items">{renderItems()}</StatContainer>
            <StatContainer title="Top Categories">
              {renderCategories()}
            </StatContainer>
          </div>
          <StatContainer title="Monthly Summary"></StatContainer>
        </div>
      </div>
    </main>
  );
}
export default Statistics;
