<template>
    <div v-if="activeUsers" class="final">
      <div class="final__home">
        <span class="final__link" @click="goToGame('/')">
          <img src="../assets/icons/home.svg">
        </span>
      </div>
      <div class="final__content">
        <div class="final__drugs">
          <template v-for="(item, index) in storeDrugs">
            <div :key="index" class="final__drugs-item">
              <p class="final__drugs-percent">{{chosenDrugs.filter(val => val === item.id).length / activeUsers.length * 100}} %</p>
              <p class="final__drugs-name">{{ item.name }}</p>
            </div>
          </template>
        </div>
        <div class="final__drugs">
          <template v-for="(val, index) in valArray">
            <div :key="index" class="final__drugs-item">
              <p class="final__drugs-percent">{{val / activeUsers.length * 100}} %</p>
              <p class="final__drugs-name">{{ characterSituation[index] }}</p>
            </div>
          </template>
        </div>
        <div class="final__result">
          <span class="final__result-subtitle"> Ваш результат: </span>
          <span class="final__result-title"> {{ situationContent.title }} </span>
          <p class="final__result-desc"> {{ situationContent.desc }} </p>
        </div>
      </div>
      <div class="final__button" @click="goToGame('/game')">
        Попробовать еще
      </div>
      <div class="final__image">
        <img src="../assets/final.png">
      </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'Final',
  data () {
    return {
      characterSituation: ['Вылечен', 'Умер', 'Вроде жив'],
      situationResult: [{
        title: 'Ты молодец',
        desc: 'Ты никого не убил или пожертвовал незначительным чтобы спасти оcтальных'
      }, {
        title: 'Ты норм',
        desc: 'Ты сделал все что мог дабы улучшить жизнь пациентов и спасти их'
      }, {
        title: 'Что ты вообще тут делаешь?',
        desc: 'Ты маньяк убийца или попал сюда по блату'
      }]
    }
  },
  computed: {
    ...mapState(['happyCount', 'deadCount', 'hearthCount', 'activeUsers', 'storeDrugs', 'chosenDrugs']),
    valArray () {
      return [this.happyCount, this.deadCount, this.hearthCount]
    },
    situationContent () {
      if (this.deadCount >= (this.hearthCount + this.happyCount)) return this.situationResult[2]
      if (this.happyCount >= (this.deadCount + this.hearthCount)) return this.situationResult[0]
      return this.situationResult[1]
    }
  },
  created () {
    if (!this.activeUsers) this.$router.push('/game')
  },
  methods: {
    ...mapMutations({
      setNull: 'setNull'
    }),
    goToGame (route) {
      this.setNull()
      this.$router.push(route)
    }
  }
}
</script>

<style scoped lang="scss">
  .final {
    position: relative;
    height: 100vh;
    height: calc(var(--vh-static, 1vh) * 100);

    &__home {
      padding: 70px 0 0 50px;
      text-align: left;
    }

    &__link {
      display: inline-block;
      padding: 17px;
      border-radius: 50%;
      background: linear-gradient(63.53deg, #2D8550 16.62%, #5E6EC2 83.38%);;
    }

    &__content {
      width: 40%;
      margin-left: 130px;
    }

    &__drugs {
      display: flex;
      justify-content: space-between;
    }

    &__drugs-item {
      text-align: center;
    }

    &__drugs-percent {
      font-size: 3.3vw;
    }

    &__drugs-name {
      font-size: 1.1vw;
    }

    &__result {
      margin-top: 50px;
      padding-top: 40px;
      font-size: 2.2vw;
      letter-spacing: 0.02em;
      color: $c-blue-light;
      border-top: 2px solid #D9D9D9;
      text-align: left;
    }

    &__result-title {
      display: block;
      font-weight: 600;
    }

    &__result-desc {
      margin-top: 20px;
      font-size: 1.6vw;
      color: $c-black;
    }

    &__button {
      position: absolute;
      bottom: 40px;
      left: 130px;
      display: inline-block;
      padding: 10px 30px;
      font-size: 1.6vw;
      font-weight: 600;
      color: #fff;
      background: linear-gradient(90deg, #D9D9D9 0%, #A1A1A1 100%);
      border-radius: 100px;
    }

    &__image {
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(0,0);
      img {
        max-width: 46vw;
        max-height: 65vh;
      }
    }
  }
</style>
