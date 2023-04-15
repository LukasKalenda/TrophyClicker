<template>
  <div class="achievement-bar">
    <div class="ach-image">
      <img src="../assets/icons/graph.png" alt="Achievement Image" />
    </div>
    <div class="ach-middle">
      <h3 class="ach-title">Achievement Title</h3>
      <p class="ach-description">Achievement Description</p>
    </div>

    <div class="closing-bar"></div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.achievement-bar {
  display: none;
  flex-direction: row;
  align-items: center;
  position: absolute;
  bottom: 10px;
  right: 15px;
  padding: 12px;
  background-color: #2d2929;
  width: 20vw;
  border: 2px solid #cc9d05;
  border-radius: 10px;
  .ach-image {
    border: 2px solid #70777a;
    border-radius: 50%;

    img {
      width: 40px;
      height: 40px;
      margin: 10px;
    }
  }
  .closing-bar {
    position: absolute;
    top: 0;
    right: 0;
  }
  .ach-middle {
    padding-left: 15px;
  }
  .ach-description {
    padding-top: 5px;
    font-weight: 200;
    font-size: 16px;
  }
}

@media screen and (max-width: 768px) {
  .achievement-bar {
    position: absolute;
    bottom: 250px;
    width: 90%;
    margin: 0 auto;
    right: 0;
  }
}
</style>
