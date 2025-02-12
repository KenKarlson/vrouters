<template>
  <div class="wrapper-content wrapper-content--fixed">
    <div class="container">
      <div class="pagebox">
        <h1 class="title">404</h1>
        <p>PAGE NOT FOUND!</p>
        <p>Go to <router-link class="link" to="/">main page?</router-link></p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title {
  font-family: 'Comic Sans MS', cursive;
  font-size: 48px;
  font-weight: 600;
  text-shadow: 8px 8px 8px #333;
}
.wrapper-content {
    display: flex;
    flex-direction: column;
    min-height: 80vh;
}
.pagebox {
  min-height: 40vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
}
</style>
