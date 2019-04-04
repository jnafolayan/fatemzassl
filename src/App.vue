<template>
  <div id="app">
    <navbar></navbar>
    <main class="c-main">
      <router-view></router-view>
    </main>
    <footer class="c-footer">
      <div class="c-footer__top">
        <div class="l-container">
          <div class="c-footer-top__left">
            <h4 class="c-footer-top__header">About Fatemza Space Solutions Limited</h4>
            <p>{{ about }}</p>
          </div>
          <div class="c-footer-top__right">
            <h4 class="c-footer-top__header">Contact Us</h4>
            <ul>
              <li>
                <i class="fa fa-home"></i>
                {{ $store.state.contact.address }}
              </li>
              <li>
                <i class="fa fa-phone"></i>
                {{ $store.state.contact.phone.join(", ") }}
              </li>
              <li>
                <i class="fa fa-inbox"></i>
                {{ $store.state.contact.email }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="c-footer__bottom">
        <div class="l-container">
          <span class="c-footer__bottom-left">
            &copy; {{ $store.state.year }}
            <router-link to="/">Fatemza SSL</router-link>
          </span>
          <span class="c-footer__bottom-right">
            All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
@import "./assets/styles/screen.scss";
@import "./assets/icons/font-awesome/css/font-awesome.min.css";

.c-footer {
  background: $light-3;
  border-top: 4px solid $light-2;
}

.c-footer__top {
  padding: 60px 0;

  > .l-container {
    display: flex;
    flex-wrap: wrap;

    > div {
      flex: 1;
      padding: 0 $spacing-2;

      @media (max-width: $brk-lg) {
        flex-basis: 100%;
        max-width: 650px;

        &:first-child {
          margin-bottom: $spacing-3;
        }
      }
    }
  }

  .c-footer-top__left {
    font-size: $fs-3;
    line-height: 1.5rem;
  }

  .c-footer-top__header {
    margin-bottom: $spacing-4;
    color: $dark-2;
  }

  li {
    padding: $spacing-1;

    .fa {
      margin-right: $spacing-1;
    }
  }
}

.c-footer__bottom {
  background: $light-2;
  border-top: 1px solid $light-1;

  a {
    color: $dark-1;
    text-decoration: none;
  }

  .c-footer__bottom-right {
    float: right;
  }
}
</style>

<script>
import Navbar from "./components/Navbar";

export default {
  components: { Navbar },
  data() {
    return {
      about:
        "Fatemza Space Solutions Limited is poised to providing you Technology Consulting Services and solutions, bearing in mind premium service quality, unique value offering via strategic alliances with cutting edge OEMs and the deployment of highly skilled manpower."
    };
  }
};
</script>
