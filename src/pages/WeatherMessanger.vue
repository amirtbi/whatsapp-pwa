<template>
  <!--Main -->
  <main class="main-container row flex">
    <!-- section List of cities -->
    <section class="cities-section flex column">
      <!--scrollbar-->
      <article class="border-right">
        <!-- Cities list header -->
        <header-item
          v-if="messages"
          :link="messages.link"
          :mode="mode"
          @toggleClass="backToList"
        ></header-item>
      </article>
      <!-- List of cities -->
      <article class="city-list-container">
        <div>
          <!-- search bar -->
          <form @submit.prevent="displayResult" class="form-container">
            <div class="search-container">
              <button class="btn-search">
                <span>
                  <svg viewBox="0 0 24 24" width="30" height="30" class="">
                    <path
                      fill="currentColor"
                      d="M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.605 3.605 0 1 1 0-7.21 3.605 3.605 0 0 1 0 7.21z"
                    ></path>
                  </svg>
                </span>
              </button>
              <input
                @input="updateSearch($event)"
                type="search"
                placeholder="Search a New city"
                ref="search"
              />
            </div>
          </form>
        </div>
        <!-- cities -->
        <ul
          :style="customPadding"
          class="items-container flex column items-start justify-center"
        >
          <city-item
            v-for="city in filteredCities"
            :key="city.title"
            :id="city.title"
            :name="city.title"
            :link="city.link"
            :condition="city.description"
            @selectCountry="selectCountryHandler"
          ></city-item>
        </ul>
      </article>
    </section>
    <!-- Section Message box -->
    <section class="chat-section flex column">
      <article>
        <chat-header
          v-if="messages"
          :link="messages.link"
          :name="messages.title"
        ></chat-header>

        <!-- Chats --->
        <chat-log
          v-for="prop in properties"
          :cityProperty="prop"
          :cityValue="messages[prop]"
          :message="messages"
          :key="prop"
        ></chat-log>
      </article>
    </section>
  </main>
</template>

<script>
import cities from "../store/weatherModule/_.cityNames.js";
// Import components
import headerItem from "../components/messanger/HeaderListItems.vue";
import CityItem from "../components/messanger/CityItems.vue";
import ChatHeader from "../components/messanger/ChatHeaderItem.vue";
import ChatLog from "../components/messanger/ChatLog.vue";
export default {
  components: {
    headerItem,
    CityItem,
    ChatHeader,
    ChatLog,
  },
  data() {
    return {
      searchedCity: "",
      messages: null,
      count: 0,
      values: [],
      properties: [],
      cityIsClicked: false,
      mode: "large",
      width: window.innerWidth,
    };
  },
  computed: {
    customPadding() {
      if (this.filteredCities.length > 5) {
        return {
          "padding-top": "2rem",
        };
      } else {
        return {
          padding: "1rem 0",
        };
      }
    },
    weatherData() {
      return this.$store.getters["weatherModule/dataForcast"];
    },

    filteredCities() {
      if (this.searchedCity === "") {
        return this.$store.getters["weatherModule/dataForcast"];
      } else {
        const cities = this.$store.getters["weatherModule/dataForcast"];
        const foundCities = cities.filter((city) => {
          return city.title.toLowerCase().includes(this.searchedCity);
        });
        return foundCities;
      }
    },
    screenSize() {
      return this.width;
    },
    chatlistClass() {
      if (this.cityIsClicked && this.mode === "small") {
        return "invisible";
      } else if (this.mode === "small") {
        return "width-100";
      } else {
        return "";
      }
    },
    messageClasss() {
      if (this.mode === "small" && !this.cityIsClicked) {
        return "invisible";
      } else {
        return "width-100";
      }
    },
  },
  mounted() {
    window.addEventListener("resize", this.getDimensions);
  },
  created() {
    //console.log("Cities", this.$store.getters["weatherModule/dataForcast"]);

    this.updateWeather();
  },
  watch: {
    screenSize(val) {
      if (val > 900) {
        this.mode = "large";
      } else {
        this.mode = "small";
      }
    },
  },
  methods: {
    backToList() {
      this.cityIsClicked = false;
      this.mode = "large";
    },
    getDimensions() {
      this.width = window.innerWidth;
    },
    async updateWeather() {
      try {
        // Get length of cities array
        const citiesNumbers =
          this.$store.getters["weatherModule/indexOfCities"];
        for (let i = 0; i < citiesNumbers; i++) {
          await this.$store.dispatch(
            "weatherModule/addWeatherData",
            cities[i].name
          );
        }
      } catch (error) {
        console.log(error.message);
      }
    },
    displayResult() {
      const enteredValue = this.$refs.search.value;
      // Make firstletter large
      const firstLetter = enteredValue
        .split("")
        .splice(0, 1)
        .join("")
        .toUpperCase();
      // Concate the first letter to rest of words
      const updatedWord =
        firstLetter +
        enteredValue.split("").slice(1, enteredValue.length).join("");
      // Display chat
      this.selectCountryHandler(updatedWord);
    },
    updateSearch(event) {
      this.searchedCity = event.target.value;
    },

    async selectCountryHandler(cityId) {
      this.cityIsClicked = true;
      // Get number of property
      console.log("clicked ", cityId);
      const cityData = await this.$store.getters["weatherModule/dataForcast"];

      const foundCity = cityData.find((city) => {
        return city.title === cityId;
      });
      let count = 0;
      for (let properties in foundCity) {
        count += 1;
      }
      this.messages = foundCity;
      this.properties = Object.keys(foundCity);
      this.values = Object.values(foundCity);
      console.log("Found city", this.properties);
    },
  },
};
</script>

<style scoped>
.main-container {
  flex-wrap: nowrap;
}
.main-row {
  flex-direction: row;
}
.invisible {
  display: none;
}
.width-100 {
  width: 100%;
}
section.cities-section {
  min-width: 400px;
}

section.chat-section {
  width: 100%;
}
section.chat-section article {
  max-height: 700px;
  overflow-y: scroll;
}
.chat-section article::-webkit-scrollbar {
  width: 10px;
}
.chat-section article::-webkit-scrollbar-track {
  background-color: darkgrey;
}
.chat-section article::-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
article.city-list-container {
  background-color: white;
}
article.border-right {
  border-right: 1px solid rgb(184, 184, 184);
}
.form-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
div.search-container {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: #f0f2f5;
  border-radius: 12px;
  padding: 1.5rem;
  align-items: center;
  overflow: hidden;
  margin: 0.5rem;
}
ul.items-container {
  border-top: 1px solid #d1caca;
  padding: 0;
  /* // padding-top: 8rem; */
  margin-top: 0;
  overflow-y: auto;
  flex-wrap: nowrap;
  max-height: 500px;
}
::-webkit-scrollbar-track {
  background: #524949;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.btn-search {
  position: absolute;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  align-self: center;
  left: 0;
  top: 6px;
}
.btn-search span svg {
  color: #b3b1b1;
}
.btn-search + input {
  border: none;
  position: absolute;
  outline: none;
  background: none;
  left: 46px;
  letter-spacing: 1px;
  width: 100%;
  transition: all 0.5s ease-out;
}

input:focus {
  border: none;
  transition: all 0.5s ease;
}

input::placeholder {
  transition: all 0.5s ease;
}
input:focus::placeholder {
  opacity: 0;
}

/* Screens */
@media (max-width: 500px) {
  .main-container {
    flex-direction: column;
  }
}
</style>
