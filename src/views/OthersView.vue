<template>
  <div class="others">
    <List
      :items="items"
      :icon="true"
      title="Others"
      @change-route="changeRoute"
    />
  </div>
</template>

<script>
import List from "../components/List.vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  components: { List },

  setup() {
    const { state } = useStore();
    const router = useRouter();
    const items = state.others.items;

    function changeRoute(value) {
      if (value == "logout") return console.log("here must logout");
      router.push({ name: value.routeName });
    }
    return {
      items,
      changeRoute,
    };
  },
};
</script>

<style></style>
