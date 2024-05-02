<template>
  <div class="c-contact">
    <div class="l-title">
      <div class="l-container">
        <h4>Get in touch with us</h4>
      </div>
    </div>
    <div class="l-container">
      <div class="l-section">
        <div class="l-section__body">
          <p>You can contact using the following media:</p>
          <ul class="list">
            <li>
              <a href="https://www.facebook.com/asafa.adeniyi">
                <i class="fa fa-facebook"></i> 
                <span>{{ $store.state.contact.facebook }}</span>
              </a>
            </li>
            <li>
              <a :href="'mailto:' + $store.state.contact.email">
                <i class="fa fa-inbox"></i> 
                <span>{{ $store.state.contact.email }}</span></a>
            </li>
            <li>
              <i class="fa fa-phone"></i>
              <div class="phones">
                <a v-for="phone in $store.state.contact.phone" :key="phone" :href="'tel:' + phone">
                  {{ phone }}
                </a>
              </div>
            </li>
          </ul>

          <p>Or come visit us at <b>{{ $store.state.contact.address }}</b></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/screen.scss";

.c-contact {
  min-height: 50vh;
  background: $light-3;
  line-height: 1.5rem;
}

.list {
  margin: $spacing-5 0;

  a {
    font-size: $fs-3;
    padding: $spacing-1 0;
  }

  li {
    margin-bottom: $spacing-1;
  }

  .fa {
    margin-right: $spacing-2;
    color: $primary-light-1;
    min-width: 15px;
  }

  span {
    color: $primary-dark-3;
    font-weight: bold;
    letter-spacing: 0.05rem;
  }
  
  .phones {
    display: inline;
    color: $primary-dark-3;

    a {
      color: $primary-dark-3;
    }

    a:not(:last-child) {
      margin-right: $spacing-1;

      &::after {
        display: inline;
        content: ",";
        margin-left: -$spacing-1;
      }
    }
  }
}
</style>
