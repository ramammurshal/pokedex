export const state = () => ({
  myList: [],
  init: 1,
});

export const getters = {
  getMyList(state) {
    return state.myList;
  },
};

export const mutations = {
  init(state, myList) {
    state.myList = myList;
  },
  changeInit(state) {
    state.init = 0;
  },
  addPokemon(state, pokemonData) {
    state.myList.push(pokemonData);
  },
};

export const actions = {
  init(vuexContext) {
    if (vuexContext.state.init === 1 && process.client) {
      console.log("run");
      const myList = JSON.parse(localStorage.getItem("myPokemon"));
      if (myList) {
        vuexContext.commit("init", myList);
      }
      vuexContext.commit("changeInit");
    }
  },
  addPokemon(vuexContext, pokemonData) {
    let savedData = [];
    const localStorageData = JSON.parse(localStorage.getItem("myPokemon"));

    if (!localStorageData) {
      savedData.push(pokemonData);
    } else {
      savedData = localStorageData;

      const isSameNickname = savedData.find((data) => {
        return data.nickname === pokemonData.nickname;
      });

      if (isSameNickname) {
        this.$toast.error("Pokemon nickname already exists 😣, try againn!");
      } else {
        savedData.push(pokemonData);
      }
    }

    vuexContext.commit("addPokemon", pokemonData);
    localStorage.setItem("myPokemon", JSON.stringify(savedData));

    this.$toast.success("Successfully added pokemon to your list 🎉✨");
    this.$router.push("/");
  },
};
