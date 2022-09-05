<template>
  <div
    class="flex flex-col gap-6 items-center justify-center h-[100vh] text-center"
  >
    <h1 class="text-4xl font-bold">
      <div>404</div>
      <div>Page Not Found</div>
    </h1>
    <AppButton link="/">Home</AppButton>
  </div>
</template>

<script>
import AppButton from "@/components/AppButton.vue";

export default {
  name: "Error",
  components: {
    AppButton,
  },
};
</script>
