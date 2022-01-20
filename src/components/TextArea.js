function TextArea({ name, placeHolder, value, onChange, onBlur, className }) {
  return (
    <textarea
      className={`input ${className}`}
      id={name}
      name={name}
      rows={3}
      placeholder={placeHolder}
      autoComplete="off"
      spellCheck={false}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
}

export default TextArea;
