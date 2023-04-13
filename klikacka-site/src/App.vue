<template>
  <header>
    <div>
      <ul>
        <li>Trophy Clicker TM</li>
      </ul>
    </div>
    <nav>
      <ul class="desktop">
        <li>
          <router-link :to="{ name: 'stats' }"
            ><img class="nav-icon" src="./assets/icons/graph.png" alt="Statistics icon"
          /></router-link>
        </li>
        <li>
          <router-link :to="{ name: 'settings' }">
            <img class="nav-icon" src="./assets/icons/settings-1.png" alt="Shop icon" />
          </router-link>
        </li>
      </ul>

      <!-- Mobilní verze -->
      <ul class="mobile-nav">
        <li>
          <router-link :to="{ name: 'stats' }"
            ><img class="nav-icon" src="./assets/icons/graph.png" alt="Statistics icon"
          /></router-link>
        </li>
        <li>
          <router-link :to="{ name: 'games' }">
            <img class="nav-icon" src="./assets/icons/games.png" alt="Games icon" />
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'shop' }">
            <img class="nav-icon" src="./assets/icons/shop.png" alt="Shop icon" />
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'settings' }">
            <img class="nav-icon" src="./assets/icons/settings-1.png" alt="Shop icon" />
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<style scoped>

</style>
