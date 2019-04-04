<template>
  <div class="c-services">
    <div class="l-title">
      <div class="l-container">
        <h4>Our services</h4>
      </div>
    </div>
    <div class="l-container">
      <div class="l-section">
        <div class="l-section__body">
          <p>Our unique value offering is centered on giving our customers experiences that transcend the traditional installation and deployment stage to service support that not only ensure seamless transition and integration to operation of systems but also allows increased appreciation of our technology value in procurement, installation and deployment of solutions and services.</p>

          <p class="mt-3">Our areas of core competencies include:</p>

          <ul class="c-accordion">
            <li
              v-for="(service, index) in services"
              :key="service.id"
              :class="{'c-accordion__tab': true, 'c-accordion__tab--expanded': index == 0}"
            >
              <div class="c-accordion__tab-header" @click.prevent="expand($event, service)">
                {{ service.title }}
              </div>
              <div class="c-accordion__tab-body" v-html="service.desc">
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../assets/styles/screen.scss";

.c-services {
  min-height: 50vh;
  background: $light-3;
  line-height: 1.5rem;
}

.c-accordion {
  margin-top: $spacing-3;
}

.c-accordion__tab {
  box-shadow: $shadow-sm;
  border-radius: $radius-sm;
  margin-bottom: $spacing-2;
  background: #fff;

  .c-accordion__tab-header {
    border-radius: $radius-sm;
    padding: $spacing-3 $spacing-3;
    background: $primary-light-1;
    color: $primary-dark-3;
    font-weight: bold;
    letter-spacing: 0.05rem;
    cursor: pointer;

    &:hover {
      background: $dark-2;
      color: $light-3;
    }
  }

  .c-accordion__tab-body {
    padding: $spacing-3 $spacing-3;
    border-bottom-left-radius: $radius-sm;
    border-bottom-right-radius: $radius-sm;
    color: $dark-1;
    font-size: $fs-3;
    text-indent: $spacing-4;
    background: $light-4;
    display: none;
    overflow: hidden;

    > p {
      margin-bottom: $spacing-2;
    }

    ul {
      margin-top: $spacing-2;
      margin-left: $spacing-6;
      list-style-type: disc;

      li {
        font-weight: bold;
        margin-bottom: $spacing-1;
        max-width: 800px;

        ol {
          margin-top: $spacing-2;
          margin-left: $spacing-6;
          list-style-type: number;

          li {
            font-weight: normal;
          }
        }
      }
    }
  }

  &.c-accordion__tab--expanded {
    .c-accordion__tab-header {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    .c-accordion__tab-body {
      display: block;
    }
  }
}

@keyframes expand {
  from {
    height: 0;
  }
  to {
    height: auto;
  }
}
</style>

<script>
import { services } from "../assets/data/services.json";

export default {
  data() {
    return {
      services: services.map(s => ({
        ...s,
        id: Math.random()
          .toString(16)
          .substring(1)
      }))
    };
  },

  methods: {
    expand(event) {
      const target = event.target.parentElement;
      const targetBody = target.querySelector('.c-accordion__tab-body');

      const expanded = document.querySelector(".c-accordion__tab--expanded");
      
      // expand now so that offsetHeight will not be 0
      target.classList.add("c-accordion__tab--expanded");
      
      const height = targetBody.offsetHeight;
      console.log(height);


      if (target != expanded) {
        targetBody.style.height = "0px";
        this.animate(target, {}, 200, k => {
          console.log(`${height * k | 0}px`);
          targetBody.style.height = `${height * k | 0}px`;
        });
      }

      if (expanded) {
        expanded.classList.toggle("c-accordion__tab--expanded");
      }
    },
    animate(elt, props, duration, step) {
      let k = 0,
        start, now, delay, lt, elapsed;

      requestAnimationFrame(tick);

      function tick() {
        now = Date.now();

        if (!start) start = now;
        if (!lt) lt = now;

        elapsed = now - start;

        elapsed = Math.min(elapsed, duration);
        step(elapsed / duration);

        lt = now;

        if (elapsed != duration) requestAnimationFrame(tick);
      }
    }
  }
};
</script>
