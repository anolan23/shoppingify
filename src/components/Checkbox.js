function Checkbox({ checked, onChange }) {
  return (
    <label className="checkbox">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="checkbox__checkmark"></span>
    </label>
  );
}

export default Checkbox;
