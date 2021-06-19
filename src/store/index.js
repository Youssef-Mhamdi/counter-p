import { createStore } from 'vuex'
import axios from 'axios';  


export default createStore({
    state: {
        counter: 0
    },
    mutations: {
        increasecounter(state, randomN) {
            state.counter+= randomN
        },
        decreasecounter(state, x) {
            state.counter > 0 ? state.counter -= x : console.log(" Only positive numbers... ");
        }
    },
    actions: {
        increasecounter( {commit} ) {
            axios('https://www.random.org/integers/?num=1&min=1&max=9&col=1&base=10&format=plain&rnd=new').then( result =>{
                commit('increasecounter', result.data ? result.data : 'No date from API' )
            })
        },
        decreasecounter( {commit} ) {
            const x = 1
            commit('decreasecounter', x)
        }
    },
    modules: {}
})