import { useState, useRef } from 'react';
import useOutsideClick from '../hooks/useOutsideClick';

function Quantity({ mode, onRemoveItem, increaseQty, children }) {
  const [editing, setEditing] = useState(false);
  const ref = useRef(null);
  useOutsideClick(ref, () => setEditing(false));

  if (!editing) {
    return (
      <button
        onClick={() => setEditing(true)}
        className="quantity__btn"
      >{`${children} pcs`}</button>
    );
  }

  return (
    <div className="quantity" ref={ref}>
      <button className="quantity__trash-container" onClick={onRemoveItem}>
        <span className="material-icons quantity__trash-container__trash">
          delete
        </span>
      </button>
      <span
        className="material-icons quantity__icon"
        onClick={() => {
          increaseQty(-1);
        }}
      >
        remove
      </span>
      <button
        className="quantity__btn"
        onClick={() => setEditing(false)}
      >{`${children} pcs`}</button>
      <span
        className="material-icons quantity__icon"
        onClick={() => {
          increaseQty(1);
        }}
      >
        add
      </span>
    </div>
  );
}
export default Quantity;
