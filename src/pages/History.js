import React from 'react';

import HistoryCat from '../components/HistoryCat';
import { listsToHistories, indexToMonth } from '../lib/helpers';

function History({ lists }) {
  const categories = listsToHistories(lists);
  const renderCategories = function () {
    if (!categories) return null;
    if (!categories.length) {
      return <div className="empty">No shopping history</div>;
    }
    return categories.map((category, index) => {
      const { month: monthIndex, year, lists } = category;
      const month = indexToMonth(monthIndex);

      return (
        <HistoryCat key={index} title={`${month} ${year}`} lists={lists} />
      );
    });
  };

  return (
    <main className="dashboard__main">
      <div className="dashboard__scrollable">
        <div className="history">
          <h1 className="history__title">Shopping history</h1>
          {renderCategories()}
        </div>
      </div>
    </main>
  );
}
export default History;
