<template>
    <div id="app">
        <Greeting msg="Welcome back," name="Joey"/>
        <h2>{{ greeting }}</h2>
        <div class="mt-2">
            <AboutYou></AboutYou>
        </div>
        <div class="mt-2">
            <TodoList></TodoList>
        </div>
        <div class="mt-2">
            <h3>Click some buttons <small class="text-sm">Don't be shy...</small></h3>
            <ButtonCounter></ButtonCounter>
            <ButtonCounter></ButtonCounter>
            <ButtonCounter></ButtonCounter>
        </div>
        <div class="mt-2">
            <Tabs :tabs="tabs" :currentTab="tabs['home']"></Tabs>
        </div>
    </div>
</template>

<script>

import Greeting from './components/Greeting.vue';
import TodoList from './components/TodoList.vue';
import ButtonCounter from './components/ButtonCounter.vue';
import AboutYou from './components/AboutYou.vue';
import Tabs from './components/Tabs.vue';

export default {
    data: function() {
        return {
            greeting: 'To your Vue.js application',
            tabs: {  
                'home': {
                    name: 'Home',
                    component: {
                        template: '<div>Home Component</div>'
                    }
                },
                'posts': {
                    name: 'Posts',
                    component: {
                        template: '<div>Posts Component</div>'
                    }
                },
                'archive': {
                    name: 'Archive',
                    component: {
                        template: '<div>Archive Component</div>'
                    }
                }
            }
            
        }
    },
    components: {
        Greeting,
        ButtonCounter,
        TodoList,
        AboutYou,
        Tabs
    }
}

</script>

<style>
*,
*::before,
*::after {
    box-sizing: border-box
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #6a6b6d;
  margin-top: 60px;
}

.text-sm {
    font-size: 10px;
}

.mt-2 {
   margin-top: 2rem; 
}
</style>
