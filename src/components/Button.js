function Button({ type, form, color, onClick, children }) {
  return (
    <button
      type={type}
      className={`btn btn--${color}`}
      onClick={onClick}
      form={form}
    >
      {children}
    </button>
  );
}
export default Button;
