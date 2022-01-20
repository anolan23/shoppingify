function ListCategory({ title, ingredients }) {
  const renderItems = () => {
    if (!ingredients) return null;
    return ingredients.map((ing, index) => {
      const { name, qty } = ing;
      return (
        <div className="sidebar-list__category__item" key={index}>
          <span className="sidebar-list__category__item__name">{name}</span>
          <div className="sidebar-list__category__item__qty">{`${qty} pcs`}</div>
        </div>
      );
    });
  };

  return (
    <section className="sidebar-list__category">
      <span className="sidebar-list__category__title">{title}</span>
      {renderItems()}
    </section>
  );
}
export default ListCategory;
