<template>
  <v-container class="menu-details pb-15">
    <v-card class="menu-details__card" elevation="1">
      <v-img class="menu-details__image" :src="item.img" :alt="item.title" />

      <v-card-title>{{ item.title }}</v-card-title>

      <v-card-text>
        {{ item.details }}
      </v-card-text>

      <v-card-text>
        <b> {{ format(item.price) }}</b>
      </v-card-text>

      <v-card-actions class="ml-2 mb-1">
        <v-btn @click="toggleDialog" variant="flat" color="orange-darken-1"
          >Add to Cart
        </v-btn>
      </v-card-actions>
      <v-dialog
        class="menu-details__dialog"
        v-model="state.menu.dialog"
        persistent
      >
        <!-- <template v-slot:activator="{ props }">
        </template> -->
        <v-card class="pa-1 pt-2">
          <v-card-title class="text-h5">
            {{ item.title }}
          </v-card-title>
          <v-card-text class="text-h6"
            >How many orders would you like to order?</v-card-text
          >

          <v-card-actions class="ml-4">
            <v-btn
              @click="decrementOrder"
              variant="flat"
              color="grey-darken-4"
              width="30"
              height="30"
              icon="mdi-minus"
            ></v-btn>
            <v-sheet class="menu-details__sheet">{{
              state.menu.ordersNumber
            }}</v-sheet>
            <v-btn
              @click="incrementOrder"
              variant="flat"
              color="grey-darken-4"
              width="30"
              height="30"
              icon="mdi-plus"
            ></v-btn>
          </v-card-actions>

          <v-card-actions class="mt-3">
            <v-btn color="red-darken-1" variant="text" @click="toggleDialog">
              Cancel
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn color="orange-darken-1" variant="flat" @click="addCart">
              Add Now
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card>
  </v-container>
</template>

<script>
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { format } from "@/utils/currencyService";
export default {
  //   data: () => ({
  //     dialog: false,
  //   }),
  setup() {
    const { state, commit } = useStore();
    const { params } = useRoute();

    const items = state.menu.items;

    const item = items.find((item) => {
      if (item.id == params.id) {
        return item;
      }
    });

    function toggleDialog() {
      commit("menu/toggleDialog");
    }

    function addCart() {
      let order = {
        id: item.id,
        title: item.title,
        details: item.details,
        img: item.img,
        price: item.price,
        ordersNumber: state.menu.ordersNumber,
      };
      commit("cart/addOrder", order);
      commit("menu/toggleDialog");
    }

    function incrementOrder() {
      commit("menu/incrementOrder");
    }
    function decrementOrder() {
      commit("menu/decrementOrder");
    }

    return {
      state,
      item,
      format,
      toggleDialog,
      addCart,
      incrementOrder,
      decrementOrder,
    };
  },
};
</script>

<style lang="scss" scoped>
b {
  font-size: 2rem;
}

.menu-details {
  &__sheet {
    width: 2.75rem;
    height: 2.75rem;
    background-color: #d3d3d3;
    margin: 0 0.75rem 0 1rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    max-width: 20rem;
  }

  &__dialog {
    max-width: 30rem;
  }
}

@media (min-width: 30rem) {
  .menu-details {
    &__card {
      height: 32rem;
    }
    &__image {
      height: 15rem;

      // object-fit: cover;
    }
    .v-img__img--contain {
      object-fit: cover;
    }
  }
}
</style>