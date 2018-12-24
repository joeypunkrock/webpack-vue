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
