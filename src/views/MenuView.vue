<template>
  <div class="menu">
    <List :items="items" title="Menu" />
  </div>
</template>

<script>
import List from "../components/List.vue";

export default {
  name: "MenuView",
  components: { List },
  data: () => ({
    items: [
      {
        title: "Beef",
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaeveritatis?",
        img: require("../assets/beef.jpg"),
        price: "40",
      },
      {
        title: "Shanghai",
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaeveritatis?",
        img: require("../assets/shanghai.jpg"),
        price: "100",
      },
      {
        title: "Sinigang Kawali",
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaeveritatis?",
        img: require("../assets/sinigang-kawali.jpg"),
        price: "140",
      },
    ],
  }),
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
