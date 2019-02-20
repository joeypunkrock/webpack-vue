<template>
    <div class="tabs">
        <button
        v-for="tab in tabs"
        v-bind:key="tab.name"
        v-bind:class="['tab-button', { active: currentTab.name === tab.name }]"
        v-on:click="currentTab = tab"
        >{{ tab.name }}</button>

        <component
          v-bind:is="currentTab.component"
          class="tab"
        ></component>
    </div>
</template>

<script>

export default {
    name: 'Tabs',
    props: {
        tabs: Object,
        currentTab: Object
    }
}
</script>

<style scoped>
.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
  display: block;
  max-width: 570px;
  margin: 0 auto;
  border-radius: 5px;
}
</style>
