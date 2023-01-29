<template>
  <v-dialog v-model="dialog" persistent>
    <!-- <template v-slot:activator="{ props }">
        </template> -->
    <v-card class="pa-1 pt-2">
      <v-card-title class="text-h5">
        {{ item.title }}
      </v-card-title>
      <v-card-text>How many orders would you like to order?</v-card-text>

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
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>