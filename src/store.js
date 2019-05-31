import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    contact: {
      email: "info@fatemzassl.com",
      phone: ["+234 803 205 6101 ", "+234 818 935 6695"],
      facebook: "asafa.adeniyi",
      address: "1, Kodesho str. Ikeja Lagos. 113, Ijede rd., Jesus Pavilion Plaza, Cele B/Stop, Ikorodu Lagos."
    },
    year: new Date().getUTCFullYear()
  }
});

export default store;
