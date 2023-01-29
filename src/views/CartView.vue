<template>
  <div class="cart">
    <List :items="state.cart.orders" title="Cart" @handle-order="handleOrder" />
    <v-card class="cart__checkout">
      <div class="cart__total">
        <v-card-title class="cart__title">Total</v-card-title>
        <span class="cart__price">{{ format(75) }}</span>
      </div>
      <v-card-actions>
        <v-btn variant="flat" color="orange-darken-1" block>Check out</v-btn>
      </v-card-actions>
    </v-card>

    <v-dialog v-model="state.menu.dialog" persistent>
      <!-- <template v-slot:activator="{ props }">
        </template> -->
      <v-card class="pa-1 pt-2">
        <v-card-title class="text-h5">
          {{ item.title }}
        </v-card-title>

        <v-card-text>Change your item</v-card-text>

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
          <v-btn color="red-darken-1" variant="text" @click="handleOrder">
            Remove
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn color="orange-darken-1" variant="flat" @click="handleOrder">
            Update
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { useStore } from "vuex";

import List from "@/components/List.vue";
import { format } from "@/utils/currencyService";

export default {
  name: "Cart",
  components: { List },
  setup() {
    const { state } = useStore();

    function handleOrder(value) {
      console.log(value);
    }

    return {
      format,
      state,
      handleOrder,
    };
  },
};
</script>

<style lang="scss" scoped>
.cart {
  padding-bottom: 10rem;

  &__checkout {
    background-color: rgba(255, 255, 255, 0.9);
    position: fixed;
    width: 100%;
    bottom: 3rem;
  }

  &__total {
    margin: 0 3rem 0 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__title {
    font-size: 1.5rem;
  }

  &__price {
    font-size: 1.5rem;
  }
}

@media (min-width: 40rem) {
  .cart {
    // padding: 0 3rem 10rem;
    &__checkout {
      // background-color: rgba(255, 255, 255, 0.9);
      // position: fixed;
      width: 94%;
      bottom: 0rem;
    }
  }
}
</style>

