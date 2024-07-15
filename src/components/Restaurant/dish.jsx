import {useState} from "react";

export const Dish = ({ dish }) => {
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => {
    if (quantity < 5) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <li>
      <strong>{dish.name}</strong> - ${dish.price}
      <br />
      <small>Ingredients: {dish.ingredients.join(', ')}</small>
      <br />
      <button onClick={decreaseQuantity}>-</button>
      <span> {quantity} </span>
      <button onClick={increaseQuantity}>+</button>
    </li>
  );
};
