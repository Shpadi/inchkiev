<template>
  <div class="game">
    <div class="game__sidebar">
      <div class="game__menu">
        <div class="game__menu-item"><router-link to="/"><img src="../assets/icons/home.svg"></router-link></div>
        <div class="game__menu-item" @click="reloadGame"><img src="../assets/refresh.jpg"></div>
      </div>
      <div class="game__params">
        <p class="game__params-title">Параметры:</p>
        <div class="game__params-item  mr-10">
          <img src="../assets/icons/sad_face.svg"> <span class="param__count"> {{ deadCount }} </span>
        </div>
        <div class="game__params-item">
          <img src="../assets/icons/happy_face.svg"> <span class="param__count"> {{ happyCount }}</span>
        </div>
        <div class="game__params-item">
          <img src="../assets/icons/heart.svg"> <span class="param__count"> {{ hearthCount }} </span>
        </div>
      </div>
      <div class="game__queue">
        <div class="game__queue-overlay"></div>
        <div class="game__queue-content">
          Осталось в очереди
          <p v-if="activeUsers" class="mb-0"> {{ activeUsers.length - activeCharacterIndex }} / {{ activeUsers.length }} </p>
        </div>
      </div>
    </div>
    <div class="game__field">
      <div v-if="activeUsers" class="game__characters">
        <template v-for="(user,index) in activeUsers">
          <transition name="fade" :key="index">
            <Character  v-show="activeCharacterIndex === index" :user="user"/>
          </transition>
        </template>
      </div>
      <div class="game__drugs">
        <template v-for="(drug, index) in storeDrugs">
          <div :key="drug.name + index" class="drugs__item" @click="chooseDrugForUser(drug.id)">{{ drug.name }}</div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'
import Character from '../components/Character'

export default {
  name: 'Game',
  components: { Character },

  mounted () {
    this.getUser()
  },

  watch: {
    activeCharacterIndex (newVal) {
      if (this.activeUsers && (newVal === this.activeUsers.length)) this.$router.push('/final')
    }
  },

  computed: {
    ...mapState(['activeUsers', 'storeDrugs', 'activeCharacterIndex', 'happyCount', 'deadCount', 'hearthCount'])
  },

  methods: {
    ...mapActions({
      getUser: 'getUser',
      chooseDrugForUser: 'chooseDrugForUser'
    }),
    ...mapMutations({
      setNull: 'setNull'
    }),
    reloadGame () {
      this.setNull()
      this.getUser()
    }
  }
}
</script>

<style scoped lang="scss">
  .game {
    width: 100%;
    height: 100vh;
    height: calc(var(--vh-static, 1vh) * 100);
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
      img {
        width: 40px;
        height: 40px;
      }
    }

    &__params {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      padding: 60px 60px 0 60px;
    }

    &__params-item {
      width: 45%;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-height: 190px;
      margin-bottom: 20px;
      font-size: 3.3vw;
      background: $c-white;
      box-shadow: 0 0 50px rgba(131, 42, 64, 0.4);
      box-sizing: border-box;
      border-radius: 40px;
      img {
        width: 2.9vw;
      }
    }

    &__params-title {
      width: 100%;
      font-size: 36px;
      line-height: 44px;
      color: $c-white;
      text-align: left;
    }

    .param__count {
      margin-right: 1vw;
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
      font-size: 2.1vw;
      letter-spacing: 0.02em;
      color: $c-white;
    }

    &__field {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      width: 68%;
      overflow: hidden;
    }

    &__characters {
      position: relative;
      width: 55%;
      height: 60vh;
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
        width: 30%;
        max-width: 280px;
        padding: 20px 0;
        font-size: 1.9vw;
        color: $c-white;
        text-align: center;
        border-radius: 100px;
        background: linear-gradient(258.29deg, #8049C7 0%, #CA57FD 100%);
        cursor: pointer;
      }
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
    opacity: 0;
  }
</style>
