<template>
  <div class="container-ap">
    <ActualizarParcialComponent @actualizarParcial="actualizarParcial" />
  </div>
</template>

<script>
import ActualizarParcialComponent from "@/components/ActualizarParcialComponent.vue";
import { actualizarParcialFachada } from "../clients/MatriculaClient.js";
export default {
  components: {
    ActualizarParcialComponent,
  },
  methods: {
    async actualizarParcial(id, body) {
      try {
        const res = await actualizarParcialFachada(id, body);
        console.log("Exito al actualizar Parcialmente");
      } catch (error) {
        console.log("Error al actualizar Parcialmente");
        
      }
    },
  },
};
</script>

<style scoped>
.container-ap {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
}
</style>