import { useFormik } from 'formik';

import Button from './Button';
import Input from './Input';
import InputGroup from './InputGroup';
import TextArea from './TextArea';

import MyAsyncCreatableSelect from './MyAsyncCreatableSelect';
import { searchCategories, addCategory, createItem } from '../api';
import useActions from '../hooks/useActions';

function SidebarComplete({ onCancelClick, onCompleteClick }) {
  const { addItem } = useActions();

  return (
    <aside className="sidebar">
      <div className="sidebar__content sidebar-add__content">
        <span className="sidebar-add__title">Add a new item</span>
      </div>

      <div className="sidebar__actions">
        <div className="sidebar-add__actions-container">
          <Button onClick={onCancelClick} color="transparent">
            Cancel
          </Button>
          <Button color="sky-blue" type="submit" form="add-item">
            Complete
          </Button>
        </div>
      </div>
    </aside>
  );
}
export default SidebarComplete;
