<template>
  <div class="c-navbar">
    <!-- Navbar top -->
    <div class="c-navbar__top">
      <div class="l-container">
        <span class="c-navbar__top-left">
          <a href="mailto:info@fatemzassl.com">
            <i class="fa fa-inbox"></i>
            info@fatemzassl.com
          </a>
        </span>
        <span class="c-navbar__top-right">
          <a href="#">
            <i class="fa fa-linkedin"></i>
          </a>
          <a href="https://www.facebook.com/asafa.adeniyi">
            <i class="fa fa-facebook"></i>
          </a>
          <a href="#">
            <i class="fa fa-twitter"></i>
          </a>
        </span>
      </div>
    </div>
    <!-- Navbar main -->
    <div class="c-navbar__main">
      <div class="l-container">
        <div class="c-navbar__header">
          <router-link class="c-navbar__brand" to="/">
            FATEMZA SSL
          </router-link>

          <button class="c-navbar__toggle">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <!-- Navbar collapse -->
        <div class="c-navbar__collapse">
          <ul class="c-nav">
            <li>
              <router-link class="c-nav__link" to="/">Home</router-link>
            </li>
            <li>
              <router-link class="c-nav__link" to="/about">About</router-link>
            </li>
            <li>
              <router-link class="c-nav__link" to="/contact">Contact</router-link>
            </li>
            <li>
              <router-link class="c-nav__link" to="/services">Services</router-link>
            </li>
            <!-- <li class="c-nav__right">
              <router-link class="c-nav__link" to="/quote">Quote</router-link>
            </li> -->
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../assets/styles/screen.scss";

.c-navbar__top {
  background: $light-3;
  font-size: $fs-2;
  border-bottom: 1px solid $light-2;

  a {
    color: $grey;
  }
}

.c-navbar__top-left {
  i {
    margin-right: $spacing-1;
  }
}

.c-navbar__top-right {
  float: right;

  a {
    margin: 0 $spacing-1;

    &:hover {
      color: $primary;
    }
  }
}

.c-navbar__main {
  padding: $spacing-2 0;

  > .l-container {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
}

.c-navbar__header {
  @media only screen and (max-width: $brk-md) {
    display: flex;
    align-items: center;
    flex-basis: 100%;
  }
}

.c-navbar__brand {
  font-weight: bold;
  color: $primary;
  font-size: $fs-6;
}

.c-navbar__toggle {
  display: none;
  margin-left: auto;
  width: 35px;
  background: transparent;
  border: none;

  > span {
    display: block;
    background: $dark-1;
    height: 4px;
    width: 100%;
    margin-bottom: 4px;
  }

  @media only screen and (max-width: $brk-md) {
    display: block;
  }
}

.c-navbar__collapse {
  flex: 5;

  @media only screen and (max-width: $brk-md) {
    display: none;
  }  
}

.c-nav {
  float: right;

  li {
    display: inline;
  }
}

.c-nav__right {
  margin-left: 10%;

  .c-nav__link {
    background: $primary-light-2;
    color: $primary-dark-3;
    font-weight: bold;
    border-radius: $radius-lg;
    padding: $spacing-2 $spacing-6;
    box-shadow: $shadow-sm;

    &:hover {
      box-shadow: $shadow-md;
    }
  }
}

.c-nav__link {
  padding: $spacing-2 $spacing-3;
  margin: 0 $spacing-2;
  color: $primary-light-1;
  font-weight: bold;
  transition: all 0.2s;

  &:hover {
    color: $primary-dark-1;
  }

  &.router-link-exact-active {
    border-bottom: 2px solid $primary;
    color: $primary;
  }
}
</style>