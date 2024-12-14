
function Dessert({ dessert, inCart, addToCart, updateCart }) {
  return (
    <div className={`dessert-card ${inCart ? "in-cart" : ""}`}>
      <img src={`./src/assets/${dessert.images.thumbnail}`} alt={dessert.name} />
      <h3>{dessert.name}</h3>
      <p>Category: {dessert.category}</p>
      <p>Price: ${dessert.price.toFixed(2)}</p>
      {inCart ? (
        <div>
          <button onClick={() => updateCart(dessert.name, -1)}>-</button>
          <button onClick={() => updateCart(dessert.name, 1)}>+</button>
        </div>
      ) : (
        <button onClick={addToCart}>Add to Cart</button>
      )}
    </div>
  );
}

export default Dessert;
