<template>
  <button
    @click="handleRedirect"
    class="bg-yellow-400 transition-all hover:bg-yellow-500 hover:scale-95 font-bold text-slate-900 px-8 py-2 rounded"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    link: {
      type: String,
    },
  },
  methods: {
    handleRedirect() {
      if (this.link) {
        this.$router.push(this.link);
      }
    },
  },
};
</script>
