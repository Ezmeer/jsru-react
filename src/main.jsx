import ReactDOM from 'react-dom/client'
import { restaurants } from './mock';


const rootElement = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(rootElement);


reactRoot.render(
  restaurants.map(restaurant => (
    <div key={restaurant.id}>
      <h1>{restaurant.name}</h1>
      <h3>Menu</h3>
      <ul>
        {
          restaurant.menu.map(dish => 
            <li key={dish.id}>
              {dish.name} - ${dish.price}
            </li> 
          )
        }
      </ul>
      <h3>Reviews</h3>
      <ul>
        {
          restaurant.reviews.map(review => 
            <li key={review.id}>
              {review.user} : {review.rating}
              <br/>
              <blockquote><q>{review.text}</q></blockquote>
            </li>
          )
        }
      </ul>
    </div>
  ))

);


