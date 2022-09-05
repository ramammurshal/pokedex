<template>
  <div class="py-4">
    <h1 class="text-4xl font-bold mb-5 text-center">Pokemon</h1>
    <PokemonList :pokemons="pokemons" />
  </div>
</template>

<script>
import PokemonList from "@/components/PokemonList.vue";

export default {
  name: "Pokemon",
  components: {
    PokemonList,
  },
  asyncData({ $axios }) {
    return $axios
      .$get("/pokemon")
      .then((response) => {
        return {
          pokemons: response.results,
        };
      })
      .catch((error) => {
        console.log("An error occured.", error);
      });
  },
};
</script>
