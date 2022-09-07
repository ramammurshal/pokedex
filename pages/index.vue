<template>
  <div>
    <h1 class="text-3xl font-bold mb-5 text-center">My List</h1>
    <client-only>
      <div class="mb-5" v-if="isPokemonDataAvailable">
        <MyPokemonPreview
          v-for="pokemon in myPokemon"
          :key="pokemon.nickname"
          :pokemon="pokemon"
        />
      </div>
      <p class="text-center text-gray-300 mb-5" v-else>
        You don't have data yet
      </p>
    </client-only>
    <div class="flex justify-center">
      <AppButton link="/pokemon">Search Other Pokemon ▶</AppButton>
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
  created() {
    this.$store.dispatch("init");
  },
  computed: {
    myPokemon() {
      return this.$store.getters.getMyList;
    },
    isPokemonDataAvailable() {
      return this.$store.getters.getMyList.length > 0 ? true : false;
    },
  },
};
</script>
