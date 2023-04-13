<template>
  <header>
    <div>
      <ul>
        <li>Trophy Clicker TM</li>
        <li>Ikonky</li>
      </ul>
    </div>
    <div>
      <ul>
        <li>
          <router-link :to="{ name: 'stats' }"
            ><img src="./assets/icons/graph.png" alt="Statistics icon"
          /></router-link>
        </li>
        <li>
          <router-link :to="{ name: 'settings' }">
            <img src="./assets/icons/settings-1.png" alt="Shop icon" />
          </router-link>
        </li>
      </ul>

      <!-- Mobilní verze -->
      <ul>
        <li>
          <router-link :to="{ name: 'stats' }"
            ><img src="./assets/icons/graph.png" alt="Statistics icon"
          /></router-link>
        </li>
        <li>
          <router-link :to="{ name: 'games' }">
            <img src="./assets/icons/games.png" alt="Games icon" />
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'shop' }">
            <img src="./assets/icons/shop.png" alt="Shop icon" />
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'settings' }">
            <img src="./assets/icons/settings-1.png" alt="Shop icon" />
          </router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<style scoped></style>
