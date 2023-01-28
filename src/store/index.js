import { createStore } from "vuex";
import { auth } from "./modules/auth";
import { menu } from "./modules/menu";
import { others } from "./modules/others";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    others,
    menu,
  },
});
