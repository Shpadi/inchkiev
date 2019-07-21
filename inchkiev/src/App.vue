<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "./assets/styles/typography.scss";
body {
  margin: 0;
  padding: 0;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a {
  font-weight: bold;
  color: $c-white;
  text-decoration: none;

  &.router-link-exact-active {
    color: $c-white;
  }
}

</style>
