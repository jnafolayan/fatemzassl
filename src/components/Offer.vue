<template>
  <div class="c-offer">
    <div class="l-container">
      <div class="l-section">
        <h1 class="l-section__header">
          Who are we?
        </h1>
        <div class="l-section__body">
          <p class="c-offer__pitch">
            <span>Fatemza Space Solutions Limited</span> 
            is a company dedicated to providing technical solutions to
            you. We specialize in the following:
          </p>
          <div class="c-offers">
            <div
              class="c-offering-wrap"
              v-for="offering in offerings"
              :key="offering.id"
            >
              <div class="c-offering">
                <i :class="'c-offering__icon fa fa-3x fa-' + offering.icon"></i>
                <p class="c-offering__text">{{ offering.text }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../assets/styles/screen.scss";

.c-offer {
  background: $light-4;
}

.c-offer__pitch {
  color: $grey;
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
  font-size: $fs-4;
  margin-bottom: $spacing-8;

  span {
    color: $primary;
    font-weight: bold;
  }
}

.c-offers {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
}

.c-offering-wrap {
  padding: $spacing-2 $spacing-4;
  flex-basis: 50%;

  @media only screen and (min-width: $brk-md) {
    flex-basis: 33.333333333%;
  }

  @media only screen and (min-width: $brk-lg) {
    flex-basis: 20%;
  }
}

.c-offering {
  min-height: 200px;
  text-align: center;
  border-radius: $radius-sm;
  padding: $spacing-5 $spacing-3;

  .fa {
    display: block;
    margin-bottom: $spacing-5;
    color: $light-1;
  }

  p {
    font-weight: bold;
  }
}
</style>

<script>
export default {
  data() {
    return {
      rawOfferings: [
        {
          icon: "cog",
          text: "Network & Network Security"
        },
        {
          icon: "database",
          text: "Data Center Solutions"
        },
        {
          icon: "microchip",
          text: "Telecomms Infrastructure Support"
        },
        {
          icon: "bolt",
          text: "Electric Power Planning"
        },
        {
          icon: "cloud",
          text: "Visualization and Telemetry Solutions"
        }
      ]
    };
  },

  computed: {
    offerings() {
      return this.rawOfferings.map(offering => ({
        ...offering,
        id: Math.random()
      }));
    }
  }
};
</script>
