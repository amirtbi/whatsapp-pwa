<template>
  <!--scrollbar header -->
  <div
    class="custom-padding flex row items-center justify-start bg-blue-grey-11"
  >
    <!--profile-->
    <div class="profile-container">
      <q-avatar>
        <img :src="linkHanlder" />
      </q-avatar>
    </div>
    <!-- Svg- story icon-->
    <div class="icons-container">
      <span>
        <svg
          version="1.1"
          id="df9d3429-f0ef-48b5-b5eb-f9d27b2deba6"
          x="0"
          y="0"
          viewBox="0 0 24 24"
          width="30"
          height="30"
          class=""
        >
          <path
            fill="currentColor"
            d="M12.072 1.761a10.05 10.05 0 0 0-9.303 5.65.977.977 0 0 0 1.756.855 8.098 8.098 0 0 1 7.496-4.553.977.977 0 1 0 .051-1.952zM1.926 13.64a10.052 10.052 0 0 0 7.461 7.925.977.977 0 0 0 .471-1.895 8.097 8.097 0 0 1-6.012-6.386.977.977 0 0 0-1.92.356zm13.729 7.454a10.053 10.053 0 0 0 6.201-8.946.976.976 0 1 0-1.951-.081v.014a8.097 8.097 0 0 1-4.997 7.209.977.977 0 0 0 .727 1.813l.02-.009z"
          ></path>
          <path fill="#009588" d="M19 1.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"></path>
        </svg>
      </span>
      <!--message svg icon -->
      <span>
        <svg viewBox="0 0 24 24" width="30" height="30" class="">
          <path
            fill="currentColor"
            d="M19.005 3.175H4.674C3.642 3.175 3 3.789 3 4.821V21.02l3.544-3.514h12.461c1.033 0 2.064-1.06 2.064-2.093V4.821c-.001-1.032-1.032-1.646-2.064-1.646zm-4.989 9.869H7.041V11.1h6.975v1.944zm3-4H7.041V7.1h9.975v1.944z"
          ></path>
        </svg>
      </span>
      <!-- vertical option line -->
      <span>
        <svg viewBox="0 0 24 24" width="30" height="30" class="">
          <path
            fill="currentColor"
            d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"
          ></path>
        </svg>
      </span>
    </div>
  </div>
</template>
<!-- scripts --->
<script>
export default {
  props: ["link"],
  computed: {
    linkHanlder() {
      if (this.link) {
        return this.link;
      } else {
        return "https://media.istockphoto.com/photos/shrine-of-imam-ali-ridha-in-mashhad-iran-picture-id173602264?s=612x612";
      }
    },
  },
};
</script>

<!-- styles -->
<style scoped>
.custom-padding {
  padding: 0.75rem;
}
.dashed-border {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border-style: dashed;
  border: 3px dashed #757171;
}
div.profile-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  width: 50%;
}
div.icons-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 50%;
}
div.icons-container span {
  display: block;
  border-radius: 50%;
  padding: 1rem;
  cursor: pointer;
}
.icons-container span:hover {
  background-color: #c1c1c1;
}

/*screens */
@media screen and (min-width: 600px) {
  div.icons-container {
    justify-content: flex-end !important;
  }
}
</style>
