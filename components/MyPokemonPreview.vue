<template>
  <div class="hover:scale-[99%] transition-all">
    <div
      class="text-center bg-slate-500 hover:bg-slate-600 py-3 rounded flex px-4 mb-4"
    >
      <div class="flex items-center justify-center">😎</div>
      <div class="text-start grow pl-5">
        <h2 class="text-lg">Nickname: {{ pokemon.nickname }}</h2>
        <h3>Pokemon: {{ pokemon.pokemonName }}</h3>
      </div>
      <div
        class="flex items-center justify-center cursor-pointer hover:bg-slate-700 px-3 rounded-lg"
        @click="handleRemove"
      >
        <span class="hidden sm:inline">Remove</span> ❌
      </div>
    </div>
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
  methods: {
    handleRemove() {
      console.log("will be removed!");
    },
  },
};
</script>
