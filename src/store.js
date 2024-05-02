import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    contact: {
      email: "infor@fatemzassl.com.ng",
      phone: ["+234 9059074150", "+234 8039628774"],
      facebook: "asafa.adeniyi",
      address: "120/12 Bosun Adekoya Street, Oniru Lekki, Lagos. 6, Hoster Street Off Ijede Road Omitoro, Ikorodu Lagos."
    },
    year: new Date().getUTCFullYear()
  }
});

export default store;
