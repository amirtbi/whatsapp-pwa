import axios from "axios";
// Importing citynames
import cities from "./_.cityNames.js";
export default {
  // Fetch data from api
  async addWeatherData(context, city) {
    let index = cities.findIndex((ele) => {
      return ele.name === city;
    });
    let cityName = cities[index].name;
    let cityAbbre = cities[index].abbre;
    let linkImage = cities[index].link;
    const apiKey = "4e06ab4f597db3788f8cf0b18d188640";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${cityAbbre}&appid=${apiKey}`;
    // Sending request
    const res = await axios(url);
    // console.log("payLoad", res.data);
    const payLoad = { ...res.data, link: linkImage };
    context.commit("setWeatherData", payLoad);
  },
};
