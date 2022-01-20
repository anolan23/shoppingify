import { useFormik } from 'formik';

import Button from './Button';
import Input from './Input';
import InputGroup from './InputGroup';
import TextArea from './TextArea';
function SidebarAdd({ onCancelClick, onSaveClick }) {
  const formik = useFormik({
    initialValues: {
      name: '',
      note: '',
      image: '',
      category: '',
    },
    onSubmit(values) {
      console.log(values);
    },
  });
  return (
    <aside className="sidebar">
      <form
        id="add-item"
        onSubmit={formik.handleSubmit}
        className="sidebar__content"
      >
        <span className="sidebar-add__title">Add a new item</span>
        <InputGroup labelText="Name" htmlFor="name">
          <Input
            value={formik.values.name}
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeHolder="Enter a name"
          />
        </InputGroup>
        <InputGroup labelText="Note (optional)" htmlFor="note">
          <TextArea
            value={formik.values.note}
            name="note"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeHolder="Enter a note"
          />
        </InputGroup>
        <InputGroup labelText="Image (optional)" htmlFor="image">
          <Input
            value={formik.values.image}
            name="image"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeHolder="Enter a url"
          />
        </InputGroup>
        <InputGroup labelText="Category" htmlFor="category">
          <Input
            value={formik.values.category}
            name="category"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeHolder="Enter a category"
          />
        </InputGroup>
      </form>

      <div className="sidebar__actions">
        <div className="sidebar-add__actions-container">
          <Button onClick={onCancelClick} color="transparent">
            Cancel
          </Button>
          <Button type="submit" form="add-item">
            Save
          </Button>
        </div>
      </div>
    </aside>
  );
}
export default SidebarAdd;
