export const menu = {
  namespaced: true,
  state: {
    dialog: false,
    ordersNumber: 1,
    items: [
      {
        id: 1,
        title: "Beef",
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaeveritatis?",
        img: require("@/assets/beef.jpg"),
        price: 49.0,
      },
      {
        id: 2,
        title: "Shanghai",
        details:
          "Lightness in flavor and is mellower and slightly sweet in taste",
        img: require("@/assets/shanghai.jpg"),
        price: 179.0,
      },
      {
        id: 3,
        title: "Sinigang Kawali",
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaeveritatis?",
        img: require("@/assets/sinigang-kawali.jpg"),
        price: 149.0,
      },
      {
        id: 4,
        title: "Meat Veg",
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaeveritatis?",
        img: require("@/assets/meat-veg.jpg"),
        price: 99.0,
      },
      {
        id: 5,
        title: "Vegi Salad",
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaeveritatis?",
        img: require("@/assets/vegi-sald.jpg"),
        price: 249.0,
      },
    ],
  },
  getters: {},
  mutations: {
    toggleDialog(state) {
      state.dialog = !state.dialog;
      state.ordersNumber = 1;
    },
    incrementOrder(state) {
      state.ordersNumber++;
    },
    decrementOrder(state) {
      if (state.ordersNumber <= 1) return;
      state.ordersNumber--;
    },
  },
  actions: {},
};
