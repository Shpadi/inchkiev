import Vue from 'vue'
import Vuex from 'vuex'
import humanApi from '../api/human'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeUsers: null,
    symptoms: [
      {
        correctDrugId: 0,
        unCorrectDrugId: 2,
        describe: 'Дитя, дай бабусі ліки від тиску за цим рецептом, але не дорогих, тех, что дешевле'
      },
      {
        correctDrugId: 2,
        unCorrectDrugId: 1,
        describe: 'Дитя, дай бабусі ліки від тиску за цим рецептом, але не дорогих, тех, что дешевле'
      },
      {
        correctDrugId: 1,
        unCorrectDrugId: 0,
        describe: 'Дитя, дай бабусі ліки від тиску за цим рецептом, але не дорогих, тех, что дешевле'
      },
      {
        correctDrugId: 1,
        unCorrectDrugId: 2,
        describe: 'Дитя, дай бабусі ліки від тиску за цим рецептом, але не дорогих, тех, что дешевле'
      },
      {
        correctDrugId: 0,
        unCorrectDrugId: 2,
        describe: 'Дитя, дай бабусі ліки від тиску за цим рецептом, але не дорогих, тех, что дешевле'
      },
      {
        correctDrugId: 2,
        unCorrectDrugId: 1,
        describe: 'Дитя, дай бабусі ліки від тиску за цим рецептом, але не дорогих, тех, что дешевле'
      },
      {
        correctDrugId: 1,
        unCorrectDrugId: 0,
        describe: 'Дитя, дай бабусі ліки від тиску за цим рецептом, але не дорогих, тех, что дешевле'
      },
      {
        correctDrugId: 1,
        unCorrectDrugId: 2,
        describe: 'Дитя, дай бабусі ліки від тиску за цим рецептом, але не дорогих, тех, что дешевле'
      },
      {
        correctDrugId: 0,
        unCorrectDrugId: 1,
        describe: 'Дитя, дай бабусі ліки від тиску за цим рецептом, але не дорогих, тех, что дешевле'
      },
      {
        correctDrugId: 2,
        unCorrectDrugId: 0,
        describe: 'Дитя, дай бабусі ліки від тиску за цим рецептом, але не дорогих, тех, что дешевле'
      },
      {
        correctDrugId: 2,
        unCorrectDrugId: 0,
        describe: 'Дитя, дай бабусі ліки від тиску за цим рецептом, але не дорогих, тех, что дешевле'
      },
      {
        correctDrugId: 1,
        unCorrectDrugId: 2,
        describe: 'Дитя, дай бабусі ліки від тиску за цим рецептом, але не дорогих, тех, что дешевле'
      },
      {
        correctDrugId: 2,
        unCorrectDrugId: 1,
        describe: 'Дитя, дай бабусі ліки від тиску за цим рецептом, але не дорогих, тех, что дешевле'
      },
      {
        correctDrugId: 0,
        unCorrectDrugId: 1,
        describe: 'Дитя, дай бабусі ліки від тиску за цим рецептом, але не дорогих, тех, что дешевле'
      },
      {
        correctDrugId: 1,
        unCorrectDrugId: 2,
        describe: 'Дитя, дай бабусі ліки від тиску за цим рецептом, але не дорогих, тех, что дешевле'
      }
    ],
    storeDrugs: [
      {
        name: 'Корвалол',
        id: 0,
        description: 'от сердечка'
      },
      {
        name: 'Нурофен',
        id: 1,
        description: 'от всего'
      },
      {
        name: 'Ибопруфен',
        id: 2,
        description: 'хз должно помочь'
      }
    ],
    happyCount: 0,
    deadCount: 0,
    hearthCount: 0,
    activeCharacterIndex: 0,
    chosenDrugs: []
  },
  mutations: {
    setActiveUser (state, item) {
      state.activeUsers = item
    },
    increaseActiveCharacterIndex (state) {
      state.activeCharacterIndex++
    },
    increaseHappyFace (state) {
      state.happyCount++
    },
    increaseSadFace (state) {
      state.deadCount++
    },
    increaseHeart (state) {
      state.hearthCount++
    },
    pushDrugId (state, id) {
      state.chosenDrugs.push(id)
    },
    setNull (state) {
      state.activeUsers = null
      state.happyCount = 0
      state.deadCount = 0
      state.hearthCount = 0
      state.activeCharacterIndex = 0
      state.chosenDrugs = []
    }
  },
  actions: {
    async getUser ({ commit, state }) {
      try {
        const result = await humanApi.getUser()
        result.data.map((item) => {
          const symptomId = Math.round(Math.random() * 14)
          item['symptom'] = state.symptoms[symptomId]
        })
        console.log(result.data)
        commit('setActiveUser', result.data)
      } catch (e) {
        console.log(e.response)
      }
    },
    chooseDrugForUser ({ commit, state }, drugId) {
      if (state.activeUsers[state.activeCharacterIndex].symptom.correctDrugId === drugId) commit('increaseHappyFace')
      else if (state.activeUsers[state.activeCharacterIndex].symptom.unCorrectDrugId === drugId) commit('increaseSadFace')
      else commit('increaseHeart')
      commit('increaseActiveCharacterIndex')
      commit('pushDrugId', drugId)
    }
  }
})
