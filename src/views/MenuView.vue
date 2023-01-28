<template>
  <div class="menu">
    <List :items="items" title="Menu" />
  </div>
</template>

<script>
import { useStore } from "vuex";
import List from "../components/List.vue";

export default {
  name: "MenuView",
  components: { List },
  setup() {
    const { state } = useStore();

    const items = state.menu.items;

    return {
      items,
    };
  },

  data: () => ({}),
};
</script>

<style lang="scss">
// .list-container {
//   padding: 0;
// }

// @media (min-width: 48rem) {
//   .menu {
//     margin-left: 3rem;
//   }
// }
</style>
