<template>
    <div class="game">
      <div class="game__sidebar">
        <div class="game__menu">
          <div class="game__menu-item"> <img src="../assets/icons/home.svg"> </div>
          <div class="game__menu-item"> <img src="../assets/icons/home.svg"> </div>
        </div>
        <div class="game__params">
          <p class="game__params-title">Params:</p>
          <div class="game__params-item  mr-10">
            <img src="../assets/icons/sad_face.svg"> <span class="param__count">2</span>
          </div>
          <div class="game__params-item">
            <img src="../assets/icons/happy_face.svg">  <span class="param__count">3</span>
          </div>
          <div class="game__params-item">
            <img src="../assets/icons/heart.svg">  <span class="param__count">4</span>
          </div>
        </div>
        <div class="game__queue">
          Осталось в очереди
          <p> 0/14 </p>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'Game'
}
</script>

<style scoped lang="scss">
  .game {
    width: 100%;
    height: 100vh;

    &__sidebar {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 32.5%;
      height: 100%;
      box-sizing: border-box;
      background: $base-gradient;
    }

    &__menu {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 50%;
      margin-right:auto;
      padding: 60px 60px 0 60px;
    }

    &__menu-item {
      padding: 15px;
      background-color: $c-white;
      border-radius: 50%;
    }

    &__params {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      padding: 60px 60px 0 60px;
    }

    &__params-item {
      width: 48%;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-height: 190px;
      margin-bottom:20px;
      font-size: 48px;
      line-height: 59px;
      background: $c-white;
      box-shadow: 0 0 50px rgba(131, 42, 64, 0.4);
      box-sizing: border-box;
      border-radius: 40px;
    }

    &__params-title {
      width: 100%;
      font-size: 36px;
      line-height: 44px;
      color: $c-white;
      text-align: left;
    }

    .param__count {
      margin-right: 30px;
    }

    &__queue {
      height: 134px;
      background: $c-white;
      opacity: 0.15;
      padding: 60px 60px 0 60px;
    }
  }
</style>
