import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    contact: {
      email: "info@fatemzassl.com",
      phone: ["07062024076", "08032056101"],
      facebook: "asafa.adeniyi",
      address:
        "Suite 25, 12TH Floor, CSS Bookshop House, 50/52 Broad Street Marina, Lagos."
    },
    year: new Date().getUTCFullYear()
  }
});

export default store;
