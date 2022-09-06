<template>
  <nuxt-link :to="link" class="hover:scale-95 transition-all">
    <h1 class="text-center bg-slate-500 hover:bg-slate-600 py-3 rounded">
      😎 {{ pokemon.name | firstUpper }}
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
  computed: {
    link() {
      return `/pokemon/${this.pokemon.name}`;
    },
  },
};
</script>
