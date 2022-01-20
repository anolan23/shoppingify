function Input({
  type = 'text',
  onChange,
  onBlur,
  value,
  name,
  id,
  placeHolder,
}) {
  return (
    <input
      id={name}
      type={type}
      className="input"
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      name={name}
      placeholder={placeHolder}
      autoComplete="off"
      autoCorrect="off"
      spellCheck={false}
    />
  );
}
export default Input;
