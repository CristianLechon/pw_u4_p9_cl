<template>
  <div class="container-guardar">
    <GuardarComponent @guardar="guardar($event)"/>
  </div>
</template>

<script>
import GuardarComponent from "@/components/GuardarComponent.vue";
import { guardarFachada } from "../clients/MatriculaClient.js";
export default {
  components: {
    GuardarComponent,
  },
  methods: {
    async guardar(estudiante) {
      try {
        const res = await guardarFachada(estudiante);
        console.log("Estudiante guardado con exito: ", res);
        this.mensaje = "Estudiante guardado con exito";
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.container-guardar {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
}
</style>