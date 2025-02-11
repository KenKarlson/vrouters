<template>
  <div id="wrapper">
    <header>
      <div class="navbar">
        <div class="container">
          <div class="navbar-content">
            <div class="logo">vue-cli</div>
            <ul class="navbar-list">
              <li class="navbar-item"></li>
            </ul>
            <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link> |
            <router-link to="/contact">Contact</router-link> | <router-link to="/login">Login</router-link>
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
