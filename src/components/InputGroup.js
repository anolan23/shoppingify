function InputGroup({ htmlFor, labelText, children }) {
  return (
    <div className="input-group">
      <label className="input-group__label" htmlFor={htmlFor}>
        {labelText}
      </label>
      {children}
    </div>
  );
}
export default InputGroup;
