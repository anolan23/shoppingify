import React, { useRef } from 'react';
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from 'recharts';
import StatContainer from '../components/StatContainer';
import Stat from '../components/Stat';
import {
  topItemsFromLists,
  topCategories,
  listsToHistories,
  monthlySummaryData,
} from '../lib/helpers';
import useScrollTop from '../hooks/useScrollTop';

function Statistics({ lists }) {
  const dashBoardMainEl = useRef(null);
  useScrollTop(dashBoardMainEl);

  const items = topItemsFromLists(lists);
  const categories = topCategories(lists);
  const histories = listsToHistories(lists);
  const data = monthlySummaryData(histories);

  const renderItems = function () {
    if (!items) return null;
    if (!items.length)
      return <div className="empty empty--small">No top items</div>;
    return items.map((item, index) => {
      const { name, percent } = item;
      return <Stat key={index} title={name} percent={percent} />;
    });
  };
  const renderCategories = function () {
    if (!categories) return null;
    if (!categories.length)
      return <div className="empty empty--small">No top categories</div>;
    return categories.map((category, index) => {
      const { name, percent } = category;
      return <Stat key={index} title={name} percent={percent} color="blue" />;
    });
  };

  return (
    <main className="dashboard__main" ref={dashBoardMainEl}>
      <div className="dashboard__scrollable">
        <div className="statistics">
          <div className="statistics__trending">
            <StatContainer title="Top Items">{renderItems()}</StatContainer>
            <StatContainer title="Top Categories">
              {renderCategories()}
            </StatContainer>
          </div>
          <div className="statistics__summary">
            <StatContainer title="Monthly Summary">
              <ResponsiveContainer width="100%" height={275}>
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="itemsCount"
                    stroke="#f9a109"
                    strokeWidth={2}
                    name="items"
                  />
                </LineChart>
              </ResponsiveContainer>
            </StatContainer>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Statistics;
