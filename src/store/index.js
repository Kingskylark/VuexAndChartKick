import { createStore } from 'vuex'
import axios from 'axios'
import moment from 'moment'

export default createStore({
  state: {
    arrPositive: [],
    arrHospitalized: [],
    arrInICU: [],
    arrOnVentilators: [],
    arrDeath: [],
    arrDate: [],
  },
  getters: {
    getAPI: (state) => state
  },
  mutations: {
    SET_POSITIVE(state, payload) {
      state.arrPositive.push(payload)
    },
    SET_HOSPITALIZED(state, payload) {
      state.arrHospitalized.push(payload)
    },
    SET_INICU(state, payload) {
      state.arrInICU.push(payload)
    },
    SET_VENTILATOR(state, payload) {
      state.arrOnVentilators.push(payload)
    },
    SET_DEATH(state, payload) {
      state.arrDeath.push(payload)
    },
  },
  actions: {
    async getAPI({ commit }) {
      const res = await axios.get('https://api.covidtracking.com/v1/us/daily.json')
      res.data.forEach(d => {
        const date = moment(d.date, "YYYYMMDD").format("MM/DD/YYYY");
        const {
          positive,
          hospitalizedCurrently,
          inIcuCurrently,
          onVentilatorCurrently,
          death
        } = d;


        commit('SET_POSITIVE', { date, total: positive })
        commit('SET_HOSPITALIZED', { date, total: hospitalizedCurrently })
        commit('SET_INICU', { date, total: inIcuCurrently })
        commit('SET_VENTILATOR', { date, total: onVentilatorCurrently })
        commit('SET_DEATH', { date, total: death })
      });
    }
  },
  modules: {
  }
})

