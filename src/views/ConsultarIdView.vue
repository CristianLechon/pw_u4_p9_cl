<template>
  <div class="container-ci">
    <ConsultarIdComponent
      :estudiantes="estudiantesArr"
      @estudianteId="consultarId"
    />
  </div>
</template>

<script>
import ConsultarIdComponent from "@/components/ConsultarIdComponent.vue";
import { consultarPorIdFachada } from "../clients/MatriculaClient.js";
export default {
  components: {
    ConsultarIdComponent,
  },
  methods: {
    async consultarId(id) {
      try {
        const res = await consultarPorIdFachada(id);
        this.estudiantesArr.push(res);
        console.log("respuesta ", this.estudiantesArr);
      } catch (error) {
        console.log("No esxiste ese id", error);
      }
    },
  },
  data() {
    return {
      estudiantesArr: [],
    };
  },
};
</script>

<style scoped>
.container-ci {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
}
</style>