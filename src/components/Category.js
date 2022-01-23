function Category({ title, items, onItemClick }) {
  const renderItems = () => {
    if (!items) return null;
    return items.map((item, index) => {
      const { name, qty } = item;
      return (
        <div
          key={index}
          className="items__category__item"
          onClick={() => onItemClick(item)}
        >
          <span className="items__category__item__name">{name}</span>
          <span className="material-icons items__category__item__icon">
            add
          </span>
        </div>
      );
    });
  };

  return (
    <section className="items__category">
      <span className="items__category__title">{title}</span>
      <div className="items__category__items">{renderItems()}</div>
    </section>
  );
}
export default Category;
