console.log('main.js is connected!');

/*

Here's an overview of the steps you'll follow to get your app to work...



STEPS

1. when the page loads
  - add an event listener to the button
2. When the button is clicked
  - grab the input
  - store the value
  - make an API request based on the input value
3. When the API response is returned
  - grab all the appropriate DOM elements
  - append the data to the DOM

*/


const getWeather = function(event) {
  document.getElementById('placeHolder').style.display = "none";
  event.preventDefault();
  const zip = document.getElementById('zipCode').value;
//fetch request to openweather API//
  fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zip}&units=imperial&appid=9287591cf7bfc6044c013991ec411012`)

  .then((response) => {
    return response.json();
  })
  .then((response) => {
    //defining desired response.
    //assigning values to parsed data.
    console.log(response);
    const cityName = response.name;
    const description = response.weather[0].description;
    const currentTemp = `${Math.floor(response.main.temp)}˚`;
    const minTemp = `low ${Math.floor(response.main.temp_min)}˚`;
    const maxTemp = `high ${Math.floor(response.main.temp_max)}˚`;

    //using DOM to output data via HTML.
    document.getElementById('cityName').innerText = cityName;
    document.getElementById('description').innerText = description;
    document.getElementById('temp').innerText = currentTemp;
    document.getElementById('low').innerText = minTemp;
    document.getElementById('high').innerText = maxTemp;
          })
// ˚
    //catching error
      .catch((error) => {
      console.log(error);
      });
    };

document.getElementById('submit').addEventListener('click', getWeather);


//color change for extreme temperatures
// if (currentTemp > 40){
//   then (document.getElementById('temp').style.color('blue'))
// }else if (currentTemp < 90){
//   then (document.getElementById('temp').style.color('red'))
// };