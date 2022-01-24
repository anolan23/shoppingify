import { useFormik } from 'formik';

import Button from './Button';
import Input from './Input';
import InputGroup from './InputGroup';
import TextArea from './TextArea';

import MyAsyncCreatableSelect from './MyAsyncCreatableSelect';
import { searchCategories, addCategory, createItem } from '../api';
import useActions from '../hooks/useActions';

function SidebarAdd({ onCancelClick, onSaveClick }) {
  const { addItem } = useActions();
  const formik = useFormik({
    initialValues: {
      name: '',
      note: '',
      image: '',
      category: '',
    },
    async onSubmit(item, { resetForm }) {
      try {
        const { name, note, image, category } = item;
        const newItem = await createItem({
          name: name || null,
          note: note || null,
          image: image || null,
          category_id: category.value,
        });
        resetForm();
        addItem(newItem);
      } catch (error) {
        console.error(error);
      }
    },
    validate({ name, note, image, category }) {
      let errors = {};
      if (!name) errors.name = 'Required';
      if (!category) errors.category = 'Required';
      return errors;
    },
  });

  return (
    <aside className="sidebar">
      <form
        id="add-item"
        onSubmit={formik.handleSubmit}
        className="sidebar__content sidebar-add__content"
      >
        <span className="sidebar-add__title">Add a new item</span>
        <InputGroup labelText="Name" htmlFor="name">
          <Input
            value={formik.values.name}
            name="name"
            onChange={formik.handleChange}
            placeHolder="Enter a name"
          />
        </InputGroup>
        <InputGroup labelText="Note (optional)" htmlFor="note">
          <TextArea
            value={formik.values.note}
            name="note"
            onChange={formik.handleChange}
            placeHolder="Enter a note"
          />
        </InputGroup>
        <InputGroup labelText="Image (optional)" htmlFor="image">
          <Input
            value={formik.values.image}
            name="image"
            onChange={formik.handleChange}
            placeHolder="Enter a url"
          />
        </InputGroup>
        <InputGroup labelText="Category" htmlFor="category">
          <MyAsyncCreatableSelect
            name="category"
            className="async-select-container"
            classNamePrefix="async-select"
            value={formik.values.category}
            onChange={(value) => formik.setFieldValue('category', value)}
            defaultOptions={[
              { value: 1, label: 'Meat and Fish' },
              { value: 2, label: 'Fruits and Vegetables' },
              { value: 3, label: 'Deserts' },
            ]}
            onCreateOption={async function (name) {
              try {
                const added = await addCategory(name);
                console.log(added);
                formik.setFieldValue('category', {
                  value: added.id,
                  label: added.name,
                });
              } catch (error) {
                console.error(error);
              }
            }}
            loadOptions={async (q) => {
              const options = await searchCategories({ q });
              return options.map((option) => {
                return { value: option.id, label: option.name };
              });
            }}
            placeholder="Enter a category"
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
