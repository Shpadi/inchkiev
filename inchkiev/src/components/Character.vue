<template>
  <v-touch
    class="character"
    @swipeleft="chooseDrug(0)"
    @swiperight="chooseDrug(1)"
    @swipeup="chooseDrug(2)"
    @swipedown="chooseDrug()"
    @panleft = "leftMove($event, $el)"
    @panright = "leftMove($event, $el)"
  >
    <img class="character__photo" :src="user.photo">
    <div class="character__info">
      <p class="character__name"> {{ user.name }} {{ user.surname }}, {{ user.age }} лет</p>
      <p class="character__symptom"> {{ user.symptom.describe }} </p>
    </div>
  </v-touch>
</template>

<script>
export default {
  name: 'Character',
  props: {
    user: Object
  },
  methods: {
    leftMove (e, el) {
      console.log(e.center.x, el)
      el.style.transform = `rotate(${(90) / 20}deg)`
      el.style.marginRight = `${90}px`
    },
    chooseDrug (id) {
      console.log(id)
    }
  }
}
</script>

<style scoped lang="scss">
  .character {
    position: absolute;
    width: 540px;
    overflow: hidden;
    box-shadow: 0 0 40px rgba(127, 127, 127, 0.4);
    border-radius: 40px;
    background: $c-white;

    &__photo {
      display: block;
      height: auto;
      width: 100%;
      max-height: 350px;
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
      font-size: 32px;
      font-weight: 600;
      line-height: 39px;
      text-align: left;
      color: $c-blue-light;
    }

    &__symptom {
      font-size: 28px;
      line-height: 39px;
      text-align: left;
    }
  }
</style>
