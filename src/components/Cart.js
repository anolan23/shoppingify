function Cart({ cartSize = 0 }) {
  const sidebar = document.querySelector('#sidebar');

  return (
    <div
      className="cart"
      onClick={() => {
        sidebar.scrollIntoView({ behavior: 'smooth' });
      }}
    >
      <span className="material-icons">shopping_cart</span>
      {cartSize ? <div className="cart__count">{cartSize}</div> : null}
    </div>
  );
}
export default Cart;
