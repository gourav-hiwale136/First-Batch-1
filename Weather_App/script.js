let api_key = "ce43efdf7a3265ceb7843cfb17a0dba5";
let api = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";
let city = document.getElementById("city");
let cityname = document.getElementById("cityname");
let temperature = document.getElementById("tempe");


const getweather = async () => {
  let cityvalue = city.Value;
  let res = await fetch(`${api}?q=${cityvalue}&apiid=${api_key}`);
  let data = await res.json();
  console.log(data);
};

const display = ({ name, main: { temp } }) => {
  temperature.innerText = `Temperarture is ${tempe}°C `;
  cityname.innerText = `City name is -  ${name}`;
};
