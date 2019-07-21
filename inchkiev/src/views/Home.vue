<template>
  <div class="home">
    <div class="home__overlay"></div>
    <div class="home__gradient">
      <div class="home__content">
        <p class="home__desc"> Добро пожаловать в игру </p>
        <h1 class="home__title"> Помоги <br> ФАРМАЦЕВТУ </h1>
        <div class="text-center">
          <router-link to="/game" class="home__button button"> Hачать </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home'
}
</script>

<style lang="scss">
  .home {
    width: 100%;
    height: 100vh;
    background-image: url('../assets/homebg.jpg');
    background-size: cover;
    color: $c-white;
    overflow: hidden;

    &__overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      background: $base-gradient;
      opacity: 0.35;
    }

    &__gradient {
      position: relative;
      top: -40px;
      left: 110px;
      z-index: 111;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 60%;
      height: 83.9vh;
      max-width: 860px;
      max-height: 860px;
      background: $base-gradient;
      border-radius: 50%;
    }

    &__content {
      text-align: left;
    }

    &__desc {
      margin-bottom: 20px;
      font-size: 35px;
      line-height: 41px;
      letter-spacing: 0.02em;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    &__title {
      margin-top: 0;
      margin-bottom: 11vh;
    }

    &__button {
      padding: 20px 120px;
      color: $c-blue-light;
      background-color: $c-white;
    }
  }
</style>
