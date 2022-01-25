import Quantity from './Quantity';
import useActions from '../hooks/useActions';
import Checkbox from './Checkbox';

function ListItem({ item, mode }) {
  const { name, qty, id, checked } = item;
  const { removeItem, toggleItem, increaseQty } = useActions();

  switch (mode) {
    case 'check':
      return (
        <div className="sidebar-list__category__item">
          <div className="sidebar-list__category__item__group">
            <Checkbox checked={checked} onChange={() => toggleItem(id)} />
            <span
              className={`sidebar-list__category__item__name ${
                checked ? 'sidebar-list__category__item__name--checked' : ''
              }`}
            >
              {name}
            </span>
          </div>
          <Quantity mode={mode}>{qty}</Quantity>
        </div>
      );

    default:
      return (
        <div className="sidebar-list__category__item">
          <span className="sidebar-list__category__item__name">{name}</span>
          <Quantity
            onRemoveItem={() => removeItem(id)}
            increaseQty={(increaseBy) => increaseQty(id, increaseBy)}
          >
            {qty}
          </Quantity>
        </div>
      );
  }
}
export default ListItem;
