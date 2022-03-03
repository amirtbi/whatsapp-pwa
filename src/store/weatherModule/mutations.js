export default {
  // set fetch weather data
  setWeatherData(state, payLoad) {
    console.log("payload added", payLoad);
    const newData = {
      title: payLoad.name,
      Temperature: Math.floor(payLoad.main.temp - 273) + " " + "o" + "C",
      wind: payLoad.wind.speed + "" + "km/hr",
      link: payLoad.link,
      description: payLoad.weather[0].main,
      lastTimesttamped: new Date().toLocaleTimeString(),
      coord: payLoad.coord,
    };
    // Check repetative data
    if (state.dataContainer.length > 0) {
      let isAvaialble = state.dataContainer.find((ele) => {
        return ele.title === payLoad.name;
      });
      //console.log("availabale", isAvaialble);
      if (!isAvaialble) {
        state.dataContainer.push(newData);
      }
    } else {
      state.dataContainer.push(newData);
    }
  },
};
