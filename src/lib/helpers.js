export function itemsToCategories(items = []) {
  const categories = items.reduce((acc, curr) => {
    const category = acc.find((category) => category.id === curr.category_id);
    if (!category) {
      acc.push({
        name: curr.category,
        id: curr.category_id,
        items: [curr],
      });
    } else {
      category.items.push(curr);
    }
    return acc;
  }, []);

  return categories;
}

export function listsToHistories(lists = []) {
  const categories = lists.reduce((acc, curr) => {
    const date = new Date(curr.timestamp);
    const month = date.getMonth();
    const year = date.getFullYear();
    const category = acc.find(
      (category) => category.month === month && category.year === year
    );
    if (!category) {
      acc.push({
        timestamp: curr.timestamp,
        month,
        year,
        lists: [curr],
      });
    } else {
      category.lists.push(curr);
    }
    return acc;
  }, []);

  return categories;
}

export function indexToMonth(index) {
  const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return month[index];
}

export const itemsFromLists = function (lists) {
  let allItems = [];
  const completedLists = lists.filter((list) => list.status === 'complete');
  for (let { items } of completedLists) {
    allItems = [...allItems, ...items];
  }
  return allItems;
};

export function topItemsFromLists(lists) {
  const createItemsMap = function (lists) {
    const itemsMap = {};
    const items = itemsFromLists(lists);
    let totalItemQty = 0;
    for (let item of items) {
      if (!itemsMap[item.name]) itemsMap[item.name] = item.qty;
      else {
        itemsMap[item.name] = itemsMap[item.name] + item.qty;
      }
      totalItemQty += +itemsMap[item.name];
    }
    return { itemsMap, totalItemQty };
  };

  const { itemsMap, totalItemQty } = createItemsMap(lists);
  const items = Object.entries(itemsMap)
    .map((item) => {
      const [name, count] = item;
      return {
        name,
        count,
        percent: count / totalItemQty,
      };
    })
    .sort((a, b) => {
      return b.count - a.count;
    })
    .slice(0, 3);
  return items;
}

export function topCategories(lists) {
  const items = itemsFromLists(lists);
  const categories = itemsToCategories(items);
  return categories
    .sort((a, b) => {
      return b.items.length - a.items.length;
    })
    .slice(0, 3)
    .map((category) => {
      return { ...category, percent: category.items.length / items.length };
    });
}

export function monthlySummaryData(histories) {
  const date = new Date();
  let months = [];
  for (let i = 5; i >= 0; i--) {
    const past = new Date(date);
    past.setMonth(past.getMonth() - i);
    months.push({
      month: indexToMonth(past.getMonth()),
      year: past.getFullYear(),
      itemsCount: 0,
    });
  }

  const dataArr = histories.map((history) => {
    const { lists, month, year } = history;
    let itemsCount = 0;
    const items = itemsFromLists(lists);
    items.forEach((item) => (itemsCount += item.qty));
    return { month: indexToMonth(month), year, itemsCount };
  });
  const data = months.map((month) => {
    const found = dataArr.find(
      (dataObj) => dataObj.month === month.month && dataObj.year === month.year
    );
    return found || month;
  });
  return data;
}
