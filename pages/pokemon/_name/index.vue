<template>
  <div>
    <AppButton link="/pokemon">◀ Back</AppButton>
    <img
      :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`"
      :alt="pokemon.name"
      class="w-[150px] mx-auto mt-5"
    />
    <div class="text-center content">
      <!-- name -->
      <h1 class="text-3xl font-bold">
        😎 {{ $route.params.name | firstUpper }} 😎
      </h1>
      <!-- moves -->
      <h3 class="mt-5 mb-3 text-yellow-400 font-bold text-xl">Moves 👣</h3>
      <ul>
        <li v-for="move in moveList" :key="move">
          {{ move }}
        </li>
        <li>And more...</li>
      </ul>
      <!-- types -->
      <h3 class="mt-5 mb-3 text-yellow-400 font-bold text-xl">Types 👁‍🗨</h3>
      <ul class="mb-5">
        <li v-for="type in typeList" :key="type">
          {{ type | firstUpper }}
        </li>
      </ul>
      <!-- catch pokemon -->
      <button
        @click="handleCatch"
        class="bg-yellow-400 transition-all hover:bg-yellow-500 hover:scale-95 font-bold text-slate-900 px-8 py-2 rounded mb-10 disabled:bg-gray-700 disabled:text-white disabled:cursor-not-allowed"
        :disabled="btnDisable"
      >
        Catch Pokemon 🎯
      </button>
    </div>
  </div>
</template>

<script>
import AppButton from "@/components/AppButton.vue";

export default {
  name: "PokemonDetail",
  components: {
    AppButton,
  },
  data() {
    return {
      btnDisable: false,
    };
  },
  asyncData({ $axios, params }) {
    return $axios
      .$get(`/pokemon/${params.name}`)
      .then((response) => {
        return {
          pokemon: response,
        };
      })
      .catch((error) => {
        console.log(error);
      });
  },
  computed: {
    moveList() {
      return this.pokemon.moves.map((item, idx) => {
        if (idx <= 5) {
          return item.move.name;
        }
      });
    },
    typeList() {
      return this.pokemon.types.map((item) => {
        return item.type.name;
      });
    },
  },
  methods: {
    handleCatch() {
      this.btnDisable = true;

      if (this.getChance()) {
        const nickname = window.prompt(
          "Pokemon catched! Please enter a nickname!..."
        );
        if (nickname) {
          this.$store.dispatch("addPokemon", {
            nickname,
            pokemonName: this.pokemon.name,
          });
        } else {
          this.$toast.error("Pokemon nickname is empty!!", {
            closeOnSwipe: false,
          });
        }
        this.btnDisable = false;
      } else {
        setTimeout(() => {
          this.btnDisable = false;
        }, 2000);
        this.$toast.error("Failed to catch pokemon, try again!!!", {
          closeOnSwipe: false,
        });
      }
    },
    getChance() {
      return Math.random() < 0.5;
    },
  },
};
</script>
