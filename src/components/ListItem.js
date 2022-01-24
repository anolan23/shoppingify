import Quantity from './Quantity';

function ListItem({ item }) {
  const { name, qty } = item;
  return (
    <div className="sidebar-list__category__item">
      <span className="sidebar-list__category__item__name">{name}</span>
      <Quantity>{qty}</Quantity>
    </div>
  );
}
export default ListItem;
