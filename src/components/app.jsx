import {Restaurant} from "./Restaurant/restaurant.jsx";
import {restaurants} from "../mock.js";
import {Layout} from "./layout.jsx";

export const App = () => {
  return (
    <div>
        <Layout>
            {restaurants.map(restaurant => (
            <Restaurant key={restaurant.id} restaurant={restaurant} />
             ))}
        </Layout>
    </div>
  );
};