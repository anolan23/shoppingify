function Category({ title, ingredients }) {
  const renderItems = () => {
    if (!ingredients) return null;
    return ingredients.map((ing, index) => {
      const { name, qty } = ing;
      return (
        <div className="items__category__item" key={index}>
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
