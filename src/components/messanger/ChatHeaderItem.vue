<template>
  <div
    class="header-container flex row items-center justify-start bg-blue-grey-11"
  >
    <!--profile-->
    <div class="profile-container">
      <q-avatar>
        <img :src="link" />
      </q-avatar>
    </div>
    <!-- Svg- story icon-->
    <div class="city-container">
      <span class="city-name">{{ name }} </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["link", "name", "mode"],
  data() {
    return {
      screen: this.mode,
    };
  },
  methods: {
    toggleClass() {
      this.$emit("toggleClass");
    },
  },
};
</script>

<style scoped>
.header-container {
  background-color: #f0f2f5;
  width: 100%;
  padding: 1.35rem;
  flex-wrap: nowrap;
}
div.profile-container {
  margin-right: 2rem;
}
.city-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
}
.city-container span {
  font-size: 1.2rem;

  margin: 0 1rem;
  color: black;
}
span.city-name {
}
</style>
