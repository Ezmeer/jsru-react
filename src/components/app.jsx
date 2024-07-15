import {Restaurant} from "./Restaurant/restaurant.jsx";
import {restaurants} from "../mock.js";

export const App = () => {
  return (
    <>
      {restaurants.map(restaurant => (
        <Restaurant key={restaurant.id} restaurant={restaurant} />
      ))}
    </>
  );
};