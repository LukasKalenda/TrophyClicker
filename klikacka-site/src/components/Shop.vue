<template>
  <div class="shop">
    <div><h3 class="headline">Shop</h3></div>
    <div class="clay"></div>
    <nav>
      <ul>
        <li><img src="../assets/sports-icon/board-game.png" alt="Games" /></li>
        <li><img src="../assets/sports-icon/referee.png" alt="Referee" /></li>
        <li>
          <img src="../assets/sports-icon/sport.png" alt="Sport equipment" />
        </li>
        <li><img src="../assets/sports-icon/laundry.png" alt="" /></li>
      </ul>
    </nav>
    <!-- <div class="shop-motivation">
      <p>Obchůdek se vším možným herním vybavením</p>
    </div> -->
    <div class="divider"></div>

    <section class="items" v-for="(item, index) in shopStore.shopItems" :key="item" @click="shopStore.buyItem(index)">
      <div class="item-background">
        <div class="item-icon">
          <img :src="'/src/assets/sports-icon/' + item.img" :alt="item.title">
        </div>
        <div class="game-text">
          <p class="game-title">{{ item.title }}</p>
          <p class="game-cost">{{ item.price }}</p>
        </div>
        <div class="items-earned"> {{ item.earned }}</div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useShopStore } from "../stores/shop";
const shopStore = useShopStore();
</script>

<style lang="scss" scoped></style>
