<template>
  <div id="wrapper">
    <header>
      <div class="navbar">
        <div class="container">
          <div class="navbar-content">
            <div class="logo">vue-cli</div>
            <ul class="navbar-list">
              <li class="navbar-item"><router-link to="/">Home</router-link></li>
              <li class="navbar-item"><router-link to="/about">About</router-link></li>
              <li class="navbar-item"><router-link to="/contact">Contact</router-link></li>
              <li class="navbar-item"><router-link to="/login">Login</router-link></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      links: [
        { title: 'Home', url: '/' },
        { title: 'About', url: '/about' },
        { title: 'Contact', url: '/contact' },
        { title: 'Login', url: '/login' },
      ]
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
