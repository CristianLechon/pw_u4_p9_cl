<template>
  <div class="container-eliminar">
    <EliminarComponent @borrar="borrar"/>
  </div>
</template>

<script>
import EliminarComponent from "@/components/EliminarComponent.vue";
import { borrarFachada } from "../clients/MatriculaClient.js";
export default {
  components: {
    EliminarComponent,
  },
  methods:{
    async borrar(id){
      try {
        const res = await borrarFachada(id);
        console.log("Exito al eliminar estudiante");
      } catch (error) {
        console.log('Id no existe', error);
      }
    }
  }
};
</script>

<style scoped>
.container-eliminar {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
}
</style>