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

export const actions = {
  addPokemon(vuexContext, pokemonData) {
    vuexContext.commit("addPokemon", pokemonData);

    let savedData = [];
    const localStorageData = JSON.parse(localStorage.getItem("myPokemon"));

    if (!localStorageData) {
      savedData.push(pokemonData);
    } else {
      savedData = localStorageData;
      savedData.push(pokemonData);
    }

    console.log(savedData);

    localStorage.setItem("myPokemon", JSON.stringify(savedData));
  },
};
