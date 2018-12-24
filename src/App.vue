<template>
    <div>
        <h1>{{ greeting }} World!</h1>
        <button-counter></button-counter>
        <button-counter></button-counter>
        <button-counter></button-counter>
    </div>
</template>

<script>

import ButtonCounter from './components/button-counter.vue';

export default {
    data: function() {
        return {
            greeting: 'Hello'
        }
    },
    components: {
        ButtonCounter
    }
}

</script>
