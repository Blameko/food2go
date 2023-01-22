<template>
  <div class="others">
    <List :items="items" :icon="true" title="Others" />
  </div>
</template>

<script>
import List from "../components/List.vue";
export default {
  components: { List },
  data: () => ({
    items: [
      {
        icon: "mdi-logout",
        title: "Logout",
      },
    ],
  }),
};
</script>

<style></style>
