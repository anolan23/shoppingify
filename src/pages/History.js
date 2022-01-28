import React, { useRef } from 'react';

import HistoryCat from '../components/HistoryCat';
import { listsToHistories, indexToMonth } from '../lib/helpers';
import useScrollTop from '../hooks/useScrollTop';

function History({ lists }) {
  const dashBoardMainEl = useRef(null);
  useScrollTop(dashBoardMainEl);

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
    <main className="dashboard__main" ref={dashBoardMainEl}>
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
