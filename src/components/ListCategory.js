function ListCategory({ name, items }) {
  const renderItems = () => {
    if (!items) return null;
    return items.map((item, index) => {
      const { name: itemName, qty } = item;
      return (
        <div className="sidebar-list__category__item" key={index}>
          <span className="sidebar-list__category__item__name">{itemName}</span>
          <div className="sidebar-list__category__item__qty">{`${
            qty || 1
          } pcs`}</div>
        </div>
      );
    });
  };

  return (
    <section className="sidebar-list__category">
      <span className="sidebar-list__category__title">{name}</span>
      {renderItems()}
    </section>
  );
}
export default ListCategory;
