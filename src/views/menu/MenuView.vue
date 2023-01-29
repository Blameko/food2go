<template>
  <div class="menu pb-15">
    <List :items="items" title="Menu" @change-route="changeRoute" />
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import List from "@/components/List.vue";

export default {
  name: "MenuView",
  components: { List },
  setup() {
    const { state } = useStore();
    const router = useRouter();
    const items = state.menu.items;

    function changeRoute(value) {
      router.push({ name: "menuDetails", params: { id: value.id } });
    }

    return {
      items,
      changeRoute,
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
