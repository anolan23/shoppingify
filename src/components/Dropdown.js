function Dropdown({ items, show, onItemClick }) {
  if (!show) return null;
  const renderItems = () => {
    if (!items) return null;
    return items.map((item) => {
      return (
        <div
          key={item.id}
          className="dropdown__item"
          onClick={() => onItemClick(item)}
        >
          <span className="dropdown__item__text">{item.name}</span>
        </div>
      );
    });
  };
  return (
    <div className="dropdown">
      <div className="dropdown__item-holder">{renderItems()}</div>
    </div>
  );
}

export default Dropdown;
