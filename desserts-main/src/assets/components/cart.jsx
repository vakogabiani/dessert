
function Cart({ cart, updateCart }) {
  const totalItems = cart.reduce((total, item) => total + item.qty, 0);
  const totalPrice = cart
    .reduce((total, item) => total + item.qty * item.price, 0)
    .toFixed(2);

  return (
    <div className="cart">
      <h2>Your Cart ({totalItems})</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.name}>
            {item.name} - {item.qty} x ${item.price.toFixed(2)}{" "}
            <button onClick={() => updateCart(item.name, -1)}>-</button>
            <button onClick={() => updateCart(item.name, 1)}>+</button>
          </li>
        ))}
      </ul>
      <h3>Total: ${totalPrice}</h3>
    </div>
  );
}

export default Cart;
