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

export function listsToCategories(lists = []) {
  const categories = lists.reduce((acc, curr) => {
    const date = new Date(curr.timestamp);
    const month = date.getMonth();
    const year = date.getFullYear();
    const category = acc.find(
      (category) => category.month === month && category.year === year
    );
    if (!category) {
      acc.push({
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
  for (let { items } of lists) {
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
      if (!itemsMap[item.name]) itemsMap[item.name] = 1;
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
