<template>
  <v-list class="list-container">
    <v-subheader class="list-title">{{ title }}</v-subheader>
    <v-list-item-group>
      <v-list-item v-for="item in items" :key="item.title" class="card" link>
        <div class="card__content">
          <div class="card__image">
            <v-icon v-if="icon">{{ item.icon }}</v-icon>
            <img v-else :src="item.img" :alt="item.title" />
          </div>

          <v-list-item-content class="card__desc">
            <v-list-item-title class="card__title">{{
              item.title
            }}</v-list-item-title>
            <span class="card__details">{{ item.details }}</span>
          </v-list-item-content>
        </div>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  name: "List",
  props: {
    items: {
      type: Array,
      required: true,
    },
    icon: {
      type: Boolean,
    },
    title: {
      type: String,
    },
  },
};
</script>

<style lang="scss">
.list-title {
  font-size: 1.5rem;
}

.card {
  background: rgb(247, 247, 247);
  display: flex;
  justify-content: space-between;
  height: 7rem;

  &__image {
    width: 10rem;
  }

  &__content {
    display: flex;
    gap: 1rem;
  }

  &__desc {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    span {
      font-size: clamp(0.75rem, 3vw, 1rem);
      text-align: start;
    }
  }

  &__title {
    font-size: clamp(0.95rem, 3vw, 1.5rem);
    font-weight: 900;
  }
}
</style>
