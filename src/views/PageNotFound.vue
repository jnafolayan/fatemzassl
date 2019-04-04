<template>
  <div class="c-404">
    <div class="l-title">
      <div class="l-container">
        <h4>Page not found</h4>
      </div>
    </div>
    <div class="l-container">
      <div class="l-section">
        <h2>Oops!</h2>
        <p class="l-section__body">
          We couldn't find the page you were looking for. Check the
          <router-link to="/">homepage</router-link>.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../assets/styles/screen.scss";

.c-404 {
  background: $light-4;

  .l-section__body {
    font-size: $fs-4;
    color: $grey;

    a {
      color: $primary;
      text-decoration: underline;
    }
  }
}
</style>