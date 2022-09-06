<template>
  <div>
    <h1 class="text-4xl font-bold mb-5 text-center">My List</h1>
    <p class="text-center text-gray-300 mb-5">You don't have data yet</p>
    <div class="flex justify-center">
      <AppButton link="/pokemon">Search Pokemon ▶</AppButton>
    </div>
  </div>
</template>

<script>
import AppButton from "@/components/AppButton.vue";

export default {
  name: "Index",
  components: {
    AppButton,
  },
};
</script>
