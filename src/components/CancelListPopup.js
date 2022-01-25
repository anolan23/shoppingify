import Button from './Button';
import Popup from './Popup';
import { useStore } from '../context/store';
import useActions from '../hooks/useActions';

function CancelListPopup({ show, close }) {
  const [state] = useStore();
  const { cancelList } = useActions();
  const { title } = state.list;
  return (
    <Popup show={show} close={close}>
      <span className="cancel-list-popup__message">
        {title
          ? `Are you sure that you want to cancel your '${title}' list?`
          : `Are you sure that you want to cancel this list?`}
      </span>
      <div className="cancel-list-popup__actions">
        <Button onClick={close} color="transparent">
          cancel
        </Button>
        <Button
          onClick={() => {
            cancelList(state.list);
            close();
          }}
          color="red"
        >
          Yes
        </Button>
      </div>
    </Popup>
  );
}

export default CancelListPopup;
