export const auth = {
  namespaced: true,
  state: {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    firstnameRules: [(v) => !!v || "Firstname is required"],
    lastnameRules: [(v) => !!v || "Lastname is required"],
    emailRules: [
      (v) => !!v || "Email is required",
      (v) => /.+@.+\..+/.test(v) || "Email must be valid",
    ],
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) =>
        /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}/.test(v) ||
        "Password must at least one uppercase, lowercase, digit and a minimum of 8 characters",
    ],

    authTab: "",
  },
  getters: {
    passwordConfirmation(state) {
      if (state.confirmPassword === "" || state.confirmPassword === null) {
        return "Confirm Password is required";
      }

      if (state.password !== state.confirmPassword) {
        return "Password must match";
      }

      return true;
    },
    passwordValidation(state) {
      if (state.password === "" || state.password === null) {
        return "Password is required";
      }

      if (state.authTab === "register") {
        return (
          /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}/.test(state.password) ||
          "Password must at least one uppercase, lowercase, digit and a minimum of 8 characters"
        );
      }

      return true;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
};
