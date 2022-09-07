<template>
  <div class="hover:scale-95 transition-all">
    <h1 class="text-center bg-slate-500 hover:bg-slate-600 py-3 rounded flex">
      <div class="border flex items-center justify-center">😎</div>
      <div class="text-start">
        <div class="border">Pokemon Name: {{ pokemon.pokemonName }}</div>
        <div class="border">Pokemon Nickname: {{ pokemon.nickname }}</div>
      </div>
      <div>Remove ❌</div>
    </h1>
  </div>
</template>

<script>
export default {
  name: "MyPokemonPreview",
  props: {
    pokemon: {
      type: Object,
      required: true,
    },
  },
};
</script>
