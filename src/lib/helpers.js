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
