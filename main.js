import {k} from './hidden.js'; 

let placeHolder = document.getElementById('placeHolder'); 
let tempContainer = document.getElementById('tempContainer');


const getWeather = function(event) {
  placeHolder.classList.add('display-none');
  event.preventDefault();
  const zip = document.getElementById('zipCode').value;
//fetch request to openweather API//

  fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip}&units=imperial&appid=${k}`)
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    tempContainer.classList.remove('display-none')
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
;
          })
// ˚
    //catching error
      .catch((error) => {
      console.log(error);
      });
    };

document.getElementById('submit').addEventListener('click', getWeather);
