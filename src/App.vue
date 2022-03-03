<template>
  <router-view />
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<style>
body {
  font-family: "Roboto", sans-serif;
}
body::-webkit-scrollbar {
  display: none; /* for Chrome, Safari, and Opera */
}
</style>
