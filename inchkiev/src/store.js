import Vue from 'vue'
import Vuex from 'vuex'
import humanApi from '../api/human'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeUsers: null,
    nextUser: null,
    symptoms: [
      {
        drugId: 0,
        describe: 'Дитя, дай бабусі ліки від тиску за цим рецептом, але не дорогих, тех, что дешевле'
      },
      {
        drugId: 2,
        describe: 'Дитя, дай бабусі ліки від тиску за цим рецептом, але не дорогих, тех, что дешевле'
      },
      {
        drugId: 1,
        describe: 'Дитя, дай бабусі ліки від тиску за цим рецептом, але не дорогих, тех, что дешевле'
      },
      {
        drugId: 1,
        describe: 'Дитя, дай бабусі ліки від тиску за цим рецептом, але не дорогих, тех, что дешевле'
      },
      {
        drugId: 0,
        describe: 'Дитя, дай бабусі ліки від тиску за цим рецептом, але не дорогих, тех, что дешевле'
      },
      {
        drugId: 2,
        describe: 'Дитя, дай бабусі ліки від тиску за цим рецептом, але не дорогих, тех, что дешевле'
      },
      {
        drugId: 1,
        describe: 'Дитя, дай бабусі ліки від тиску за цим рецептом, але не дорогих, тех, что дешевле'
      },
      {
        drugId: 1,
        describe: 'Дитя, дай бабусі ліки від тиску за цим рецептом, але не дорогих, тех, что дешевле'
      },
      {
        drugId: 0,
        describe: 'Дитя, дай бабусі ліки від тиску за цим рецептом, але не дорогих, тех, что дешевле'
      },
      {
        drugId: 2,
        describe: 'Дитя, дай бабусі ліки від тиску за цим рецептом, але не дорогих, тех, что дешевле'
      },
      {
        drugId: 2,
        describe: 'Дитя, дай бабусі ліки від тиску за цим рецептом, але не дорогих, тех, что дешевле'
      },
      {
        drugId: 1,
        describe: 'Дитя, дай бабусі ліки від тиску за цим рецептом, але не дорогих, тех, что дешевле'
      },
      {
        drugId: 2,
        describe: 'Дитя, дай бабусі ліки від тиску за цим рецептом, але не дорогих, тех, что дешевле'
      },
      {
        drugId: 2,
        describe: 'Дитя, дай бабусі ліки від тиску за цим рецептом, але не дорогих, тех, что дешевле'
      },
      {
        drugId: 2,
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
    ]
  },
  mutations: {
    setActiveUser (state, item) {
      state.activeUsers = item
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
    }
  }
})
