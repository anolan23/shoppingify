import Button from './Button';

function SidebarItem({ onCancelClick, onSaveClick }) {
  return (
    <aside className="sidebar">
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
export default SidebarItem;
