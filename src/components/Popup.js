import { useRef } from 'react';
import useOutsideClick from '../hooks/useOutsideClick';

function Popup({ show, close, children }) {
  const windowRef = useRef(null);
  useOutsideClick(windowRef, close);

  if (!show) return null;

  return (
    <div className="popup">
      <div className="popup__window" ref={windowRef}>
        {children}
      </div>
    </div>
  );
}

export default Popup;
