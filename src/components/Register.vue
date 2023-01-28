<template>
  <v-card elevation="0" class="pb-15 ma-3">
    <v-form
      autocomplete="off"
      ref="validation"
      v-model="valid"
      @submit.prevent="register"
      lazy-validation
    >
      <v-container>
        <v-row>
          <v-col class="py-1" cols="12">
            <v-text-field
              type="text"
              label="Firstname"
              v-model="auth.firstname"
              :rules="auth.firstnameRules"
              required
            ></v-text-field>
          </v-col>

          <v-col class="py-1" cols="12">
            <v-text-field
              type="text"
              label="Lastname"
              v-model="auth.lastname"
              :rules="auth.lastnameRules"
              required
            ></v-text-field>
          </v-col>
          <v-col class="py-1" cols="12">
            <v-text-field
              type="email"
              label="Email"
              v-model="auth.email"
              :rules="auth.emailRules"
              required
            ></v-text-field>
          </v-col>
          <v-col class="py-1" cols="12">
            <v-text-field
              type="password"
              label="Password"
              v-model="auth.password"
              :rules="[passwordValidation()]"
              required
            >
            </v-text-field>
          </v-col>
          <v-col class="py-1" cols="12">
            <v-text-field
              type="password"
              label="Confirm Password"
              v-model="auth.confirmPassword"
              required
              :rules="[passwordConfirmation()]"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-btn color="black" block elevation="0" class="mt-5" type="submit"
          >Register</v-btn
        >
      </v-container>
    </v-form>
  </v-card>
</template>

<script>
import { ref } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";

export default {
  name: "Register",
  props: ["auth", "passwordValidation", "passwordConfirmation"],
  setup(props) {
    const validation = ref(null);
    let valid;

    // Watch prev authTab to reset form
    watch(
      () => props.auth.authTab,
      (selection, prevSelection) => {
        if (prevSelection == "login") {
          validation.value.reset();
        }
      }
    );

    // Validate Registration and ....
    async function register() {
      let { valid } = await validation.value.validate();

      if (!valid) return console.log("It is still invalid to register");
      valid = valid;
    }

    return {
      validation,
      valid,
      register,
    };
  },
};
</script>

