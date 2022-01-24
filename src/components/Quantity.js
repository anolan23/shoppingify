import { useState, useRef } from 'react';
import useOutsideClick from '../hooks/useOutsideClick';

function Quantity({ children }) {
  const [editing, setEditing] = useState(false);
  const ref = useRef(null);
  useOutsideClick(ref, () => setEditing(false));

  if (!editing) {
    return (
      <button onClick={() => setEditing(true)} className="quantity__btn">{`${
        children || 1
      } pcs`}</button>
    );
  }
  return (
    <div className="quantity" ref={ref}>
      <button className="quantity__trash-container">
        <span className="material-icons quantity__trash-container__trash">
          delete
        </span>
      </button>
      <span className="material-icons quantity__icon">remove</span>
      <button className="quantity__btn">{`${children || 1} pcs`}</button>
      <span className="material-icons quantity__icon">add</span>
    </div>
  );
}
export default Quantity;
