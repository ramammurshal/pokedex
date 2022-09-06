export const state = () => ({
  myList: [],
});

export const getters = {
  getMyList(state) {
    return state.myList;
  },
};

export const mutations = {
  addPokemon(state, pokemonData) {
    state.myList.push(pokemonData);
  },
};
