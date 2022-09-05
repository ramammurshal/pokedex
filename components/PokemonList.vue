<template>
  <div class="grid grid-cols-2 gap-3">
    <PokemonPreview
      v-for="pokemon in pokemons"
      :key="pokemon.name"
      :pokemon="pokemon"
    />
  </div>
</template>

<script>
import PokemonPreview from "@/components/PokemonPreview.vue";

export default {
  name: "PokemonList",
  components: {
    PokemonPreview,
  },
  props: {
    pokemons: {
      type: Array,
      required: true,
    },
  },
};
</script>
