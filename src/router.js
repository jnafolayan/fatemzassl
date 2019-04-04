import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home";
import About from "./views/About";
import Services from "./views/Services";
import Contact from "./views/Contact";
import PageNotFound from "./views/PageNotFound";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/about",
      component: About
    },
    {
      path: "/services",
      component: Services
    },
    {
      path: "/contact",
      component: Contact
    },
    {
      path: "*",
      component: PageNotFound
    }
  ]
});

export default router;
