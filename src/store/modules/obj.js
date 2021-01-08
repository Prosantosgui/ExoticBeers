import axios from "axios";
const state = {
    beer:[] 
  };
  
  const getters = {
      AllBeers: state => state.beer, // Pegar dados da API
  };

  const actions = {

    getBeer({ commit }){
      const options = {
        method: 'GET',
        url: 'https://api.punkapi.com/v2/beers',
      };
      axios.request(options).then((response) => {
        commit('getBeer', response.data);
        console.log(response.data)
      }
      
      );

    },
    updateTodo({ commit }, updBeer)
    {
     //axios.put...then()
     commit("updateBeer", updBeer);
    },

     Delete({ commit}, id){
       commit('Delete', id);
     },
     addBeer({ commit }, beer){
      beer.id = 26
      //axios.post...then()
      commit('addBeer', beer);
    }

}

  const mutations = {
    getBeer: (state, data) => (state.beer = data),
    addBeer: (state, data) => state.beer.push(data),
    Delete: (state, id) => (state.beer = state.beer.filter(u => u.id !== id)),
    update: (state, data) => {
    const index = state.beer.findIndex(t => t.id === data.id)
    if (index !== -1) {
      state.todos.splice(index, 1, data);
      }
    }
  }
  
  export default {
      state,
      actions,
      getters,
      mutations
    };