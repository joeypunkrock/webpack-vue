<template>
  <div class="greeting">
      <h1>{{ msg }} {{ name }}</h1>
  </div>
</template>

<script>
export default {
    name: 'Greeting',
    props: {
        msg: {
            type: String,
            default: 'Welcome'
        },
        name: {
            type: String,
            required: true,
        },
        exampleProp: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
    font-weight: normal;
    color: #42b983;
}
</style>