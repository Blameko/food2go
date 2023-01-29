import { createStore } from "vuex";
import { auth } from "./modules/auth";
import { menu } from "./modules/menu";
import { others } from "./modules/others";
import { cart } from "./modules/cart";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    others,
    menu,
    cart,
  },
});
