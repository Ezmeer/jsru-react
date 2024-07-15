import {Dish} from "./dish.jsx";
import {Review} from "./review.jsx";

export const Restaurant = ({ restaurant }) => {
  return (
    <div>
      <h1>{restaurant.name}</h1>
      <h3>Menu</h3>
      <ul>
        {restaurant.menu.map(dish => (
          <Dish key={dish.id} dish={dish} />
        ))}
      </ul>
      <h3>Reviews</h3>
      <ul>
        {restaurant.reviews.map(review => (
          <Review key={review.id} review={review} />
        ))}
      </ul>
    </div>
  );
};