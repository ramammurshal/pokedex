<template>
  <div>
    <h1 class="text-4xl font-bold mb-5 text-center">My List</h1>
    <div class="mb-5" v-if="myPokemon">
      <MyPokemonPreview
        v-for="pokemon in myPokemon"
        :key="pokemon.nickname"
        :pokemon="pokemon"
      />
    </div>
    <p class="text-center text-gray-300 mb-5" v-else>You don't have data yet</p>
    <div class="flex justify-center">
      <AppButton link="/pokemon"
        >Search <span v-if="myPokemon">Other</span> Pokemon ▶</AppButton
      >
    </div>
  </div>
</template>

<script>
import AppButton from "@/components/AppButton.vue";
import MyPokemonPreview from "@/components/MyPokemonPreview";

export default {
  name: "Index",
  components: {
    AppButton,
    MyPokemonPreview,
  },
  data() {
    return {
      myPokemon: [],
    };
  },
  mounted() {
    this.myPokemon = JSON.parse(localStorage.getItem("myPokemon"));
  },
};
</script>
