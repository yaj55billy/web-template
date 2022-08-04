<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from '@/components/HelloWorld.vue';
// import axios from 'axios';
export default {
  components: {
    // HelloWorld, 
  },
  mounted() {
    // fetch('/api/datasets/71CD1490-A2DF-4198-BEF1-318479775E8A/json/preview')
    //   .then(res => res.json())
    //   .then(d => console.log(d))

    // axios('/api/datasets/71CD1490-A2DF-4198-BEF1-318479775E8A/json/preview')
    //   .then(d => console.log(d));
    
    // let x = 1;
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      
    }
  }
}

</script>
  
<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <div class="outer">
      <div class="inner">TEST</div>
    </div>
  </div>
  <router-link to="/">Home頁面</router-link>
  <router-link to="/helloworld">HelloWorld頁面</router-link>
  <router-view />
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
<style lang="scss">
  .outer {
    .inner {
      color: red;
    }
  }
</style>