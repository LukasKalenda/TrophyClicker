<template>
  <!-- HEADER -->
  <div class="header">
    <header>
      <div>
        <ul>
          <h1>Trophy Clicker</h1>
        </ul>
      </div>
      <nav>
        <ul class="desktop">
          <li>
            <router-link :to="{ name: 'stats' }"
              ><img
                class="nav-icon"
                src="./assets/icons/graph.png"
                alt="Statistics icon"
            /></router-link>
          </li>
          <li>
            <router-link :to="{ name: 'settings' }">
              <img
                class="nav-icon"
                src="./assets/icons/settings-1.png"
                alt="Shop icon"
              />
            </router-link>
          </li>
        </ul>

        <!-- Mobilní verze -->
        <ul class="mobile-nav">
          <li>
            <router-link :to="{ name: 'stats' }"
              ><img
                class="nav-icon"
                src="./assets/icons/graph.png"
                alt="Statistics icon"
            /></router-link>
          </li>
          <li>
            <router-link :to="{ name: 'games' }">
              <img
                class="nav-icon"
                src="./assets/icons/games.png"
                alt="Games icon"
              />
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'shop' }">
              <img
                class="nav-icon"
                src="./assets/icons/shop.png"
                alt="Shop icon"
              />
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'settings' }">
              <img
                class="nav-icon"
                src="./assets/icons/settings-1.png"
                alt="Shop icon"
              />
            </router-link>
          </li>
        </ul>
      </nav>
    </header>
  </div>
  <!-- MAIN -->
  <main>
    <Trophy />
    <GamesArea />
    <Shop />
  </main>
  <!-- FOOTER + CARDS -->
  <footer>
    <Cards />
    <Achievments />
  </footer>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";

//komponenty
import Trophy from "./components/Trophy.vue";
import GamesArea from "./components/GamesArea.vue";
import Shop from "./components/Shop.vue";

import Cards from "./components/Cards.vue";
import Achievments from "./components/Achievments.vue";
</script>

<style scoped></style>
