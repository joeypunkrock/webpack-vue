<template>
  <div class="button-counter">
      <button v-on:click="count++">You clicked me {{ count }} times.</button>
  </div>
</template>

<script>

export default {
  data: function () {
    return {
      count: 0
    }
  }
}

</script>

<style scoped>
button {
  background: #ffffff;
  border: solid 2px rgb(171, 234, 255);
  padding: 10px;
  border-radius: 5px;
  margin: 5px 0;
  cursor: pointer;
}

button:hover {
  background: rgb(241, 241, 241);
}
</style>
