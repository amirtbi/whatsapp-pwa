import cities from "./_.cityNames.js";
export default {
  dataForcast(state) {
    return state.dataContainer;
  },
  indexOfCities(state) {
    return cities.length;
  },
};
