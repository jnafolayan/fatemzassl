<template>
  <div class="c-services-hint">
    <div class="l-container">
      <div class="l-section">
        <h1 class="l-section__header">
          Our Services
        </h1>
        <div class="l-section__body">
          <div class="c-services-hints">
            <div
              class="c-service-hint-wrap"
              v-for="service in services"
              :key="service.id"
            >
              <div class="c-service-hint">
                <div class="c-service-hint__desc">
                  {{ service.desc }}
                </div>
              </div>
            </div>
          </div>
          <div class="c-services-hint__more">
            <router-link class="c-button c-button--sm" to="/services">
              VIEW ALL
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../assets/styles/screen.scss";

.c-services-hint {
  background: $dark-2;

  .l-section__header {
    color: $primary;
  }

  .c-services-hint__more {
    margin-top: $spacing-5;
    padding: $spacing-3;

    .c-button {
      max-width: 200px;
      display: block;
      margin: 0 auto;
      background: transparent;
      border: 1px solid $grey;
      border-radius: $radius-lg;
      padding: $spacing-3 $spacing-3;
      color: $light-4;
      box-shadow: none;
      font-size: $fs-2;

      &:hover {
        background: $primary;
      }
    }
  }
}

.c-services-hints {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
}

.c-service-hint-wrap {
  padding: $spacing-4 $spacing-4;
  flex-basis: 100%;
  max-width: 500px;

  @media only screen and (min-width: $brk-md) {
    flex-basis: 50%;
  }

  @media only screen and (min-width: $brk-lg) {
    flex-basis: 33.333333333%;
  }
}

.c-service-hint {
  border-radius: $radius-sm;
  background: $light-3;
  width: 100%;
  min-height: 200px;
  border-radius: $radius-sm;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  &:hover {
    box-shadow: $shadow-md;
  }
}

.c-service-hint__desc {
  padding: $spacing-3 $spacing-3;
  color: $dark-3;
  font-weight: bold;
  font-size: $fs-4;
}
</style>

<script>
export default {
  data() {
    return {
      services_: [
        "Datacenter Solutions",
        "Network Power Planning, Design and Implementation",
        "Telecommunication Infrastructure Support",
        "LAN extension Services",
        "Collaboration Solutions",
        "Information System Management"
      ]
    };
  },

  computed: {
    services() {
      return this.services_.map(desc => ({
        desc,
        id: Math.random()
      }));
    }
  }
};
</script>
