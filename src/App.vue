<template>
  <div id="wrapper">
    <header>
      <div class="navbar">
        <div class="container">
          <div class="navbar-content">
            <div class="logo">vue-cli</div>
            <ul class="navbar-list">
              <li class="navbar-item" v-for="link in links" :key="link.title">
                <router-link class="navbar-link" :title="link.title" :to="link.url">{{ link.title }}</router-link></li>
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

<style lang="scss">
.navbar-link {
  &.router-link-exact-active{
    color: #5247e7;
  }
}

</style>
