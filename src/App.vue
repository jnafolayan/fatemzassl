<template>
  <div id="app">
    <navbar></navbar>
    <main>
      <router-view></router-view>
    </main>
    <footer class="c-footer">
      <div class="l-container">
        <div class="c-footer__bottom">
          <span class="c-footer__bottom-left">&copy; 2019</span>
          <span class="c-footer__bottom-right">
            Built by&nbsp;
            <a href="https://jnafolayan.github.io">John Afolayan</a>
          </span>
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 16px;
  color: #2c3e50;

  background: hsl(210, 9%, 15%);
  min-height: 100vh;
}
</style>

<script>
  import Navbar from "./components/Navbar";

  export default {
    components: { Navbar }
  }
</script>
