<template>
  <div class="shop">
    <div><h3 class="headline">Shop</h3></div>

    <nav>
      <ul>
        <li><img src="../assets/sports-icon/board-game.png" alt="Games" /></li>
        <li><img src="../assets/sports-icon/referee.png" alt="Referee" /></li>
        <li><img src="../assets/sports-icon/sport.png" alt="Sport equipment" /></li>
        <li><img src="../assets/sports-icon/laundry.png" alt="" /></li>
      </ul>
    </nav>

    <div class="divider"></div>

    <section class="items" @click="buyItem">
      <div class="item-background">
        <div class="item-icon">
          <img src="../assets/sports-icon/basket.png" alt="" />
        </div>
        <div class="game-text">
          <p class="game-title">Footbal</p>
          <p class="game-cost">{{ shopStore.fotball}}k</p>
        </div>
        <div class="items-earned">15</div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useShopStore } from '../stores/shop';
const shopStore = useShopStore();

const buyItem = () => {
  shopStore.buyItem();
};

</script>

<style lang="scss" scoped></style>
