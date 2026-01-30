<template>
  <div class="container-guardar">
    <GuardarComponent />
  </div>
</template>

<script>
import GuardarComponent from "@/components/GuardarComponent.vue";
export default {
  components: {
    GuardarComponent,
  },
};
</script>

<style scoped>
.container-guardar{
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
}
</style>