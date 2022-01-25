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
