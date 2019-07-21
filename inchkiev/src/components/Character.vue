<template>
  <v-touch
    class="character"
    @panleft = "leftMove($el, 0)"
    @panright = "rightMove($el, 1)"
    @panup = "topMove($el,2)"
    @pandown = "downMove($el)"
    @panend = "chooseDrug($el)"
  >
    <img class="character__photo" :src="user.photo">
    <div class="character__info">
      <p class="character__name"> {{ user.name }} {{ user.surname }}, {{ user.age }} лет</p>
      <p class="character__symptom"> {{ user.symptom.describe }} </p>
    </div>
    <div ref="choosenDrug" class="character__drug"> {{ drugName }} </div>
  </v-touch>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Character',
  props: {
    user: Object
  },
  data () {
    return {
      offsetX: 0,
      offsetY: 0,
      selectDrugId: null
    }
  },

  computed: {
    ...mapState(['storeDrugs']),
    drugName () {
      if (this.selectDrugId !== null) {
        return this.storeDrugs[this.selectDrugId].name
      }
      return ''
    }
  },

  methods: {
    ...mapActions({
      chooseDrugForUser: 'chooseDrugForUser'
    }),

    leftMove (el, id) {
      if (this.offsetX > -100) {
        this.offsetX--
      }
      el.style.transform = `rotate(${(this.offsetX) / 20}deg)`
      el.style.left = `${this.offsetX * 2}px`
      this.$refs.choosenDrug.style.opacity = Math.abs(this.offsetX / 50)
      this.selectDrugId = id
    },

    rightMove (el, id) {
      if (this.offsetX < 100) {
        this.offsetX++
      }
      el.style.transform = `rotate(${(this.offsetX) / 20}deg)`
      el.style.left = `${this.offsetX * 2}px`
      this.$refs.choosenDrug.style.opacity = Math.abs(this.offsetX / 50)
      this.selectDrugId = id
    },

    topMove (el, id) {
      if (this.offsetY <= 100) {
        this.offsetY++
      }
      el.style.top = `${-this.offsetY}px`
      this.$refs.choosenDrug.style.opacity = Math.abs(this.offsetY * 2 / 50)
      this.selectDrugId = id
    },

    downMove (el) {
      if (this.offsetY > 0) {
        this.offsetY--
      }
      el.style.top = `${-this.offsetY}px`
    },

    chooseDrug (el) {
      if (Math.abs(this.offsetX) < 30 && Math.abs(this.offsetY) < 30) {
        this.offsetX = 0
        this.offsetY = 0
        this.selectDrugId = null
        el.style.transform = `rotate(${(this.offsetX) / 20}deg)`
        el.style.left = `${this.offsetX}px`
        el.style.top = `${this.offsetY}px`
        return
      }
      this.chooseDrugForUser(this.selectDrugId)
    }
  }
}
</script>

<style scoped lang="scss">
  .character {
    position: absolute;
    width: 100%;
    border-radius: 40px;
    background: $c-white;
    box-shadow: 0 0 40px rgba(127, 127, 127, 0.4);
    overflow: hidden;

    &__photo {
      display: block;
      height: auto;
      width: 100%;
      max-height: 24vh;
      object-fit: cover;
    }

    &__info {
      padding: 0 60px 60px;
    }

    &__name {
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
      font-size: 2.2vw;
      font-weight: 600;
      text-align: left;
      color: $c-blue-light;
    }

    &__symptom {
      font-size: 1.8vw;
      text-align: left;
    }

    &__drug {
      position: absolute;
      top: 50%;
      left: 20%;
      font-size: 30px;
      color: red;
      bottom: 30px;
      transform: rotate(45deg);
      opacity: 0;
    }
  }
</style>
