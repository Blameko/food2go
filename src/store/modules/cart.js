export const cart = {
  namespaced: true,
  state: {
    dialog: false,
    orders: [],
  },
  mutations: {
    addOrder(state, order) {
      state.orders.push(order);
    },
    handleOrder(state) {
      state.dialog = !state.dialog;
    },
  },
  actions: {},
  getters: {},
  module: {},
};
