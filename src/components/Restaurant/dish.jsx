
export const Dish = ({ dish }) => {
  return (
    <li>
      <strong>{dish.name}</strong> - ${dish.price}
      <br />
      <small>Ingredients: {dish.ingredients.join(', ')}</small>
    </li>
  );
};