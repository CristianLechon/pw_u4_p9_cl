<template>
  <div class="container-a">
    <ActualizarEstudiante @actualizar="actualizar" />
  </div>
</template>

<script>
import ActualizarEstudiante from "@/components/ActualizarEstudiante.vue";
import { actualizarFachada } from "../clients/MatriculaClient.js";
export default {
  components: {
    ActualizarEstudiante,
  },
  methods: {
    async actualizar(id, body) {
      try {
        const res = await actualizarFachada(id, body);
        console.log("Exito al actualizar", res);
      } catch (error) {
        console.log("Error al actualizar");
      }
    },
  },
};
</script>

<style scoped>
.container-a {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
}
</style>