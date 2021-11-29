import axios from 'axios';
import {createStore} from 'vuex';

const store = createStore({
    state() {
        return {
            cityList: []
        }
    },
    getters: {

    },
    mutations: {
       SET_CITIES(state,payload) {
           state.cityList = payload.cities
       }
    },
    actions: {
       getCities({commit}) {
           axios.get("https://provinces.open-api.vn/api/")
           .then(res => {
               console.log(res)
            const result = [];
            res.data.map((city) => result.push(city.name));
               console.log(res)
               commit('SET_CITIES',{cities: result})
           })
       }
    }
})

export default store