const response = await fetch('mock.js', {
    method: 'GET'
  });
  
  let restaurants = await response.json();
  
  console.log(restaurants);