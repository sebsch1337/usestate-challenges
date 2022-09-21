import "./ShoppingItem.css";
import { useState } from "react";

function ShoppingItem({ name, price }) {
  const [amount, setAmount] = useState(1);

  return (
    <section className="item">
      <h2>{name}</h2>
      <p>price: {price}</p>
      <p>amount: {amount}</p>
      <p>total: {price * amount}</p>
      <button
        onClick={() => setAmount((amount) => amount - 1.0)}
        className="item__button"
        type="button"
      >
        -
      </button>
      <button
        onClick={() => setAmount((amount) => amount + 1.0)}
        className="item__button"
        type="button"
      >
        +
      </button>
    </section>
  );
}

export default ShoppingItem;
