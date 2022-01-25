import Button from './Button';
import Popup from './Popup';

function CancelListPopup({ show, close }) {
  return (
    <Popup show={show} close={close}>
      <span className="cancel-list-popup__message">
        Are you sure that you want to cancel this list?
      </span>
      <div className="cancel-list-popup__actions">
        <Button onClick={close} color="transparent">
          cancel
        </Button>
        <Button color="red">Yes</Button>
      </div>
    </Popup>
  );
}

export default CancelListPopup;
