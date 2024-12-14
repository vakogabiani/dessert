import "./App.css"
import { AddToCart, RemoveItem } from "./Icons"
import dessertsProducts from "./data.json"

// const BASE_URL = "https://res.cloudinary.com/dc2c49xov/desserts"


function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (dessert) => {
    const exists = cart.find((item) => item.name === dessert.name);
    if (exists) {
      setCart(
        cart.map((item) =>
          item.name === dessert.name ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...dessert, qty: 1 }]);
    }
  };

  const updateCart = (name, change) => {
    setCart(
      cart
        .map((item) =>
          item.name === name ? { ...item, qty: item.qty + change } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  return (
    <div className="App">
      <h1>Dessert Shop</h1>
      <div className="desserts-list">
        {dessertsData.map((dessert) => (
          <Dessert
            key={dessert.name}
            dessert={dessert}
            inCart={cart.some((item) => item.name === dessert.name)}
            addToCart={() => addToCart(dessert)}
            updateCart={updateCart}
          />
        ))}
      </div>
      <Cart cart={cart} updateCart={updateCart} />
    </div>
  );
}

export default App
