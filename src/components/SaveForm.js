function SaveForm({ onChange, onSubmit, value, placeHolder, disabled }) {
  return (
    <form
      onSubmit={onSubmit}
      className={`sidebar-list__actions__input-container ${
        disabled ? 'sidebar-list__actions__input-container--disabled' : ''
      }`}
    >
      <input
        className="sidebar-list__actions__input-container__input"
        placeholder={placeHolder}
        onChange={onChange}
        value={value}
      />
      <button
        type="submit"
        className="sidebar-list__actions__input-container__btn"
        disabled={disabled}
      >
        Save
      </button>
    </form>
  );
}
export default SaveForm;
