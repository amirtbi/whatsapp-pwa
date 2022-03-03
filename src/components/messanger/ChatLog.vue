<template>
  <div class="chatlog-container">
    <!--message container -->
    <div class="main-row_container flex column justify-center items-between">
      <!-- api message container -->
      <div class="message message-api flex column items-start justify-center">
        <!-- header row -->
        <div
          class="message-row message-header flex row items-center justify-between"
        >
          <!-- message title -->
          <span class="message-title">{{ message.title }}</span>
          <!-- message timestamp -->
          <span class="message-time">{{ message.lastTimesttamped }}</span>
        </div>
        <!-- content row -->
        <div
          class="message-row flex row items-center justify-center message-row"
        >
          <!-- message title -->
          <span class="message-desc">{{ cityProperty }}</span>
        </div>
      </div>
      <!-- message reply row container -->
      <div class="message message-reply flex column items-end justify-center">
        <!-- header row -->
        <div
          class="message-row message-header flex row items-center justify-between"
        >
          <!-- message title -->
          <span class="message-title">{{ message.title }}</span>
          <!-- message timestamp -->
          <span class="message-time">{{ message.lastTimesttamped }}</span>
        </div>
        <!-- content row -->
        <div
          class="message-row flex row items-center justify-center message-row"
        >
          <!-- message title -->
          <span>{{
            cityProperty === "link" ? "Image Link" : message[cityProperty]
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- scripts -->

<script>
export default {
  props: ["cityValue", "cityProperty", "message"],
};
</script>
<style scoped>
div.chatlog-container {
  background: #ece5dd;
  background-size: cover;
  background-position: center;

  height: auto;
}
div.message-header {
  width: 100%;
}
div.message-row {
  margin-bottom: 0.5rem;
  height: auto;
}
div.main-row_container {
  padding: 2rem;
}
span.message-title {
  color: #3498db;
  font-family: inherit;
  font-weight: bold;
}
div.message-api {
  background-color: #ebebeb;
  box-shadow: 0px 2px 1px rgb(0 0 0 / 20%);
  max-width: 300px;
  padding: 0.75rem 0.5rem;
}
div.message-reply {
  background-color: #dcf8c6;
  box-shadow: 0px 2px 1px rgb(0 0 0 / 20%);
  /* max-width: 300px; */
  width: 30%;
  padding: 0.75rem 0.5rem;
  align-self: flex-end;
  margin-right: 2rem;
  text-overflow: ellipsis;
}
span.message-time {
  color: #7e7d7c;
  font-size: 0.75rem;
}
span.message-desc {
  color: rgb(36, 29, 29);
  font-family: inherit;
}
</style>
