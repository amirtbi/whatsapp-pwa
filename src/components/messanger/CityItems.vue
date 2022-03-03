<template>
  <div class="item-container">
    <li @click="selectCountry(id)" class="items flex row">
      <!-- image --->
      <q-avatar> <img :src="link" /> </q-avatar>

      <!-- content -->
      <div class="name-item flex row items-center justify-start">
        <p class="city-name">{{ name }}</p>
      </div>
      <!--- weather condition --->
      <div class="condition-item flex row items-center justify-end">
        <p class="city-condition">{{ condition }}</p>
      </div>
    </li>
  </div>
</template>

<script>
export default {
  emits: ["selectCountry"],
  props: ["name", "id", "link", "condition"],
  data() {
    return {};
  },
  methods: {
    selectCountry() {
      this.$emit("selectCountry", this.id);
    },
  },
  created() {},
};
</script>
<style scoped>
p.city-name {
  margin: 0;
  /* margin: 0 5rem 0 2rem; */
  padding: 0;
  font-size: 1rem;
  font-family: inherit;
}
div.item-container {
  width: 100%;
}
.items {
  padding: 1.2rem;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  cursor: pointer;
}
div.name-item {
  width: 100%;
  align-items: flex-start;
  padding-left: 1.2rem;
}
.items:hover {
  background-color: #f0f2f5;
}
.condition-item {
  width: 100%;
  align-items: flex-end;
}
.city-condition {
  padding: 0;
  color: gray;

  margin: 0;
}
</style>
