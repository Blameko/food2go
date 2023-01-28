<template>
  <div class="home">
    <v-container class="d-flex align-center justify-center">
      <v-tabs @update:modelValue="handleTab" v-model="auth.authTab">
        <v-tab class="tab" value="login">Login</v-tab>
        <v-tab class="tab" value="register">Register</v-tab>
      </v-tabs>
    </v-container>

    <v-window class="mt-0" v-model="auth.authTab">
      <v-window-item value="login">
        <Login :auth="auth" :passwordValidation="passwordValidation" />
      </v-window-item>
      <v-window-item value="register">
        <Register
          :auth="auth"
          :passwordValidation="passwordValidation"
          :passwordConfirmation="passwordConfirmation"
        />
      </v-window-item>
    </v-window>
  </div>

  <!-- <div class="menu">
    <img src="@/assets/shanghai.jpg" alt="menu" />
  </div>
  <div class="menu">
    <img src="@/assets/rice-egg.jpg" alt="menu" />
  </div>
  <div class="menu">
    <img src="@/assets/vegi-sald.jpg" alt="menu" />
  </div> -->
</template>

<script>
import { useStore } from "vuex";
import Register from "@/components/Register.vue";
import Login from "@/components/Login.vue";
export default {
  name: "HomeView",
  components: { Register, Login },
  setup() {
    const { state, getters } = useStore();

    const auth = state.auth;

    function passwordConfirmation() {
      const confirmation = getters["auth/passwordConfirmation"];
      return confirmation;
    }

    function passwordValidation() {
      const validation = getters["auth/passwordValidation"];
      return validation;
    }

    function handleTab() {
      // console.log("ehhh");
      // console.log(auth.authTab);
    }

    console.log(passwordConfirmation(), passwordValidation());

    return { auth, passwordConfirmation, passwordValidation, handleTab };
  },
};
</script>

<style scoped>
.tab {
  width: 8rem;
}
/* input[type="text"],
select {
  width: 75%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid rgb(117, 114, 114);
  border-radius: 4px;
  box-sizing: border-box;
}

input[type="submit"] {
  width: 25%;
  background-color: #45a049;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #eb9413fa;
}

div {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 5px;
} */
</style>
