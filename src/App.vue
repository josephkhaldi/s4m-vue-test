<template>
  <div id="app">  
    <nav>
      <router-link to="/">Multi</router-link>
      <router-link to="/Admin">Admin</router-link>    
   </nav>
   <router-view></router-view>
  </div>
</template>

<script>
  import Multiselect from './components/Multiselect/Multiselect.vue';
  import Admin from './components/Admin/Admin.vue';

  export default {
    name: 'app',
    components: {
      Multiselect,
      Admin
    },
    computed: {
      users() {
        return this.$store.state.users.users;
      },
    },
    mounted() {
      this.$store.dispatch('get:users');
    }
  };
</script>

<style src="./assets/css/main.scss" lang="scss" lang="scss"></style>