<template>
  <div class="container-todos">
    <ListarTodosComponent :estudiantes="estudiantesArr" @consultarTodos="consultarTodos($event)"/>
  </div>
</template>

<script>
import ListarTodosComponent from "@/components/ListarTodosComponent.vue";
import { consultarTodosFachada } from "../clients/MatriculaClient.js";
export default {
  components: {
    ListarTodosComponent,
  },
  methods: {
    async consultarTodos() {
      this.estudiantesArr = await consultarTodosFachada();
      //console.log(this.estudiantesArr);
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
.container-todos {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
}

</style>