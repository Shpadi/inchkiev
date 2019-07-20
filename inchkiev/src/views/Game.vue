<template>
  <div class="game">
    <div class="game__sidebar">
      <div class="game__menu">
        <div class="game__menu-item"><img src="../assets/icons/home.svg"></div>
        <div class="game__menu-item"><img src="../assets/icons/home.svg"></div>
      </div>
      <div class="game__params">
        <p class="game__params-title">Params:</p>
        <div class="game__params-item  mr-10">
          <img src="../assets/icons/sad_face.svg"> <span class="param__count">2</span>
        </div>
        <div class="game__params-item">
          <img src="../assets/icons/happy_face.svg"> <span class="param__count">3</span>
        </div>
        <div class="game__params-item">
          <img src="../assets/icons/heart.svg"> <span class="param__count">4</span>
        </div>
      </div>
      <div class="game__queue">
        <div class="game__queue-overlay"></div>
        <div class="game__queue-content">
          Осталось в очереди
          <p class="mb-0"> 0/14 </p>
        </div>
      </div>
    </div>
    <div class="game__field">
      <template v-for="(user,index) in activeUsers">
        <Character :key="index" :user="user"/>
      </template>
      <div class="game__drugs">
        <template v-for="(drug, index) in storeDrugs">
          <div :key="drug.name + index" class="drugs__item">{{ drug.name }}</div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Character from '../components/Character'

export default {
  name: 'Game',
  components: { Character },
  data () {
    return {
      swipeIndex: 0
    }
  },

  mounted () {
    this.getUser()
  },

  computed: {
    ...mapState(['activeUsers', 'storeDrugs'])
  },

  methods: {
    ...mapActions({
      getUser: 'getUser'
    }),
    chooseDrug (id) {
      console.log(id)
    }
  }
}
</script>

<style scoped lang="scss">
  .game {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-between;

    &__sidebar {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 32%;
      height: 100%;
      box-sizing: border-box;
      background: $base-gradient;
    }

    &__menu {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 50%;
      margin-right: auto;
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
      margin-bottom: 20px;
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
    }

    &__queue-overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      max-height: 134px;
      background: $c-white;
      opacity: 0.15;
    }

    &__queue-content {
      position: relative;
      z-index: 111;
      padding: 20px 50px 0;
      font-size: 36px;
      line-height: 44px;
      letter-spacing: 0.02em;
      color: $c-white;
    }

    &__field {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      width: 68%;
    }

    &__drugs {
      position: absolute;
      bottom: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 0 40px;
      box-sizing: border-box;
    }

    .drugs {
      &__item {
        width: 280px;
        padding: 20px 0;
        font-size: 28px;
        line-height: 34px;
        color: $c-white;
        text-align: center;
        border-radius: 100px;
        background: linear-gradient(258.29deg, #8049C7 0%, #CA57FD 100%);
        cursor: pointer;
      }
    }
  }
</style>
