<template>
  <div>
    <AppButton link="/">◀ Back</AppButton>
    <h1 class="text-4xl font-bold my-5 text-center">Pokemon</h1>
    <PokemonList :pokemons="pokemons" />
  </div>
</template>

<script>
import AppButton from "@/components/AppButton.vue";
import PokemonList from "@/components/PokemonList.vue";

export default {
  name: "Pokemon",
  components: {
    AppButton,
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
