import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    contact: {
      email: "info@fatemzassl.com",
      phone: ["+234 8032056101", "+234 8071601767"],
      facebook: "asafa.adeniyi",
      address: "120/12 Bosun Adekoya Street, Oniru Lekki, Lagos. 6, Hoster Street Off Ijede Road Omitoro, Ikorodu Lagos."
    },
    year: new Date().getUTCFullYear()
  }
});

export default store;
