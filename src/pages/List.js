import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Category from '../components/Category';
import { itemsToCategories } from '../lib/helpers';

function List({ lists }) {
  const params = useParams();
  const navigate = useNavigate();
  const list = lists.find((list) => list.timestamp === +params.id);
  const items = list?.items;
  const categories = itemsToCategories(items);
  console.log(list);

  const renderCategories = function () {
    if (!categories) return null;
    return categories.map((category, index) => {
      const { name, items } = category;
      return <Category key={index} title={name} items={items} />;
    });
  };

  if (!list) return null;
  const { timestamp } = list;

  const date = new Date(timestamp);
  const options = {
    weekday: 'short',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  };
  const dateString = date.toLocaleDateString(undefined, options);

  return (
    <main className="dashboard__main">
      <div className="dashboard__scrollable">
        <div className="list">
          <span className="link" onClick={() => navigate(-1)}>
            &larr; back
          </span>
          <div className="list__title">{list.title}</div>
          <div className="list__date">
            <span className="material-icons list__date__calendar">
              event_note
            </span>
            <span className="list__date__text">{dateString}</span>
          </div>
          {renderCategories()}
        </div>
      </div>
    </main>
  );
}
export default List;
