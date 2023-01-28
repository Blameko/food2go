<template>
  <header>
    <div class="logo">
      <img src="@/assets/logo.png" alt="logo" />
    </div>
  </header>
  <router-view />
  <nav>
    <v-btn icon elevation="0" color="transparent">
      <router-link :to="{ name: 'home' }">
        <v-icon x-large color="orange"> mdi-home</v-icon>
      </router-link>
    </v-btn>

    <v-btn icon elevation="0" color="transparent">
      <router-link :to="{ name: 'menu' }">
        <v-icon color="orange"> mdi-silverware-fork-knife</v-icon>
      </router-link>
    </v-btn>

    <v-btn icon elevation="0" color="transparent">
      <router-link :to="{ name: 'cart' }">
        <v-icon color="orange"> mdi-cart</v-icon>
      </router-link>
    </v-btn>

    <v-btn icon elevation="0" color="transparent">
      <router-link :to="{ name: 'transaction' }">
        <v-icon color="orange"> mdi-credit-card-outline</v-icon>
      </router-link>
    </v-btn>

    <v-btn class="chat-route" icon elevation="0" color="transparent">
      <router-link :to="{ name: 'chat' }">
        <v-icon color="orange"> mdi-chat </v-icon>
      </router-link>
    </v-btn>

    <v-btn class="feedback-route" icon elevation="0" color="transparent">
      <router-link :to="{ name: 'feedback' }">
        <v-icon color="orange"> mdi-checkbox-marked-outline</v-icon>
      </router-link>
    </v-btn>

    <v-btn class="others-route" icon elevation="0" color="transparent">
      <router-link :to="{ name: 'others' }">
        <v-icon color="orange"> mdi-dots-horizontal</v-icon>
      </router-link>
    </v-btn>

    <v-btn class="logout-route" icon elevation="0" color="transparent">
      <v-icon color="orange"> mdi-logout</v-icon>
    </v-btn>
  </nav>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  height: 100vh;
  // padding-bottom: 5rem;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  background: #333333;
  width: 100%;
  height: 3rem;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.8rem;

  a {
    text-decoration: none;
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

header {
  background: #333333;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo {
  --area: 4rem;
  width: var(--area);
  height: var(--area);
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.chat-route,
.feedback-route,
.logout-route {
  display: none !important;
}

@media (min-width: 30rem) {
  .chat-route {
    display: block !important;
  }

  .nav {
    padding: 0 1.25rem;
  }
}
@media (min-width: 40rem) {
  .feedback-route,
  .logout-route {
    display: block !important;
  }

  .others-route {
    display: none !important;
  }

  .nav {
    padding: 0 1.5rem;
  }
}

@media (min-width: 48rem) {
  body {
    margin-left: 3rem;
  }
  nav {
    flex-direction: column;
    height: 100%;
    width: 3rem;
    padding: 12vh 0 5vh;
  }
}
</style>
