<template>
  <div class="c-hero">
    <div class="l-dark-overlay">
      <div class="c-hero__pitch">
        <h1>Technology Consultation and Solutions</h1>
        <h4 class="c-hero__pitch-small">
          Intelligent IT and Telecommunications
        </h4>
      </div>
      <div class="c-hero__quote">
        <router-link class="c-button c-button--lg" to="/quote">
          REQUEST QUOTE
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../assets/styles/screen.scss";

.c-hero {
  background-image: url("../assets/images/daniel-chen-546446-unsplash.jpg");
  background-position: center;
  background-repeat: none;
  background-size: cover;

  .l-dark-overlay {
    padding: $spacing-9 $spacing-4;
    width: 100%;
    min-height: 90vh;
    max-height: 800px;
    background: hsla(20, 40%, 4%, 0.6);
  }
}

.c-hero__pitch {
  text-align: center;
  color: #fff;
  text-shadow: 0 0 10px hsla(0, 0%, 0%, 0.6);
  margin-top: $spacing-7;

  .c-hero__pitch-small {
    font-weight: 400;
    color: $light-2;
  }
}

.c-hero__quote {
  margin-top: $spacing-8;
  text-align: center;

  .c-button {
    background: transparent;
    border: 2px solid $light-2;
    color: $light-3;

    &:hover {
      background: $primary;
    }
  }
}
</style>
