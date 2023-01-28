import { useRouter } from "vue-router";

export const others = {
  namespaced: true,
  state: {
    items: [
      {
        icon: "mdi-chat",
        title: "Chat",
        routeName: "chat",
      },
      {
        icon: "mdi-checkbox-marked-outline",
        title: "Feedback",
        routeName: "feedback",
      },
      {
        icon: "mdi-logout",
        title: "Logout",
        routeName: "logout",
      },
    ],
  },
  mutations: {},
  actions: {},
};
