<template>
  <div id="app">
    <menuComponent v-if="isLoggedIn" />
    <router-view />
  </div>
</template>

<script>
// import LoginView from '@/views/LoginView.vue'
import menuComponent from '@/components/MenuVertical.vue'
import { useAuthStore } from '@/store/auth';
import { computed } from 'vue';
import 'vue-loading-overlay/dist/css/index.css';
export default {
  name: 'App',
  components: {
    menuComponent
  },
  setup() {
    const authStore = useAuthStore();
    const isLoggedIn = computed(() => authStore.isAuthenticated)
    return {isLoggedIn}
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color:#dadadb;
  height: 100vh;
}
body {
  margin: 0;
  padding: 0;
  background-color: #dadadb; 
  height: 100vh;
}
</style>