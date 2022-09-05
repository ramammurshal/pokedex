<template>
  <nuxt-link :to="pokemon.name">
    <h1 class="text-center bg-slate-500 py-3 rounded">
      😎 {{ pokemon.name }}
      <!-- to do use the filter! -->
    </h1>
  </nuxt-link>
</template>

<script>
export default {
  name: "PokemonPreview",
  props: {
    pokemon: {
      type: Object,
      required: true,
    },
  },
};
</script>
