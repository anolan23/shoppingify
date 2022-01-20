function ListCategory({ title, ingredients }) {
  const renderItems = () => {
    if (!ingredients) return null;
    return ingredients.map((ing, index) => {
      const { name, qty } = ing;
      return (
        <div className="sidebar__list__list-category__item" index={index}>
          <span className="sidebar__list__list-category__item__name">
            {name}
          </span>
          <div className="sidebar__list__list-category__item__qty">{`${qty} pcs`}</div>
        </div>
      );
    });
  };

  return (
    <section className="sidebar__list__list-category">
      <span className="sidebar__list__list-category__title">{title}</span>
      {renderItems()}
    </section>
  );
}
export default ListCategory;
