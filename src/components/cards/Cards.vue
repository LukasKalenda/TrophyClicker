<template>
  <section class="card-content">
    <div class="card-list">
      <article
        class="card"
        v-for="player in playerStore.activePlayers"
        :key="player"
      >
        <header class="card-header">
          <div class="attack lvl-back">{{ player.attack }}</div>
          <div class="card-position">{{ player.position }}</div>
          <div class="defense lvl-back">{{ player.defense }}</div>
        </header>

        <div class="card-author">
          <a class="author-avatar" href="#">
            <!-- <img :src="player.src" /> -->
            <img :src="'src/assets/players-image/'+ player.src" :alt="player.name">
          </a>
          <!-- <svg class="half-circle" viewBox="0 0 106 57">
            <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
          </svg> -->

          <div class="author-name">
            <div class="player-name">{{ player.name }}</div>
          </div>
          <p class="player-text">
            {{ player.description }}
          </p>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import { usePlayerStore } from "../../stores/players";
const playerStore = usePlayerStore();
</script>

<style lang="scss" scoped></style>
