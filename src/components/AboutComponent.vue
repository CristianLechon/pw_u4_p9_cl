<template>
  <div>
    <button>Guardar</button>
    <button>Actualizar</button>
    <button>Actualizar Parcial</button>
    <button @click="consultarTodos()">Buscar Todos</button>
    <button @click="consultarPorId(1)">Buscar Id</button>
    <button>Borrar</button>
  </div>
</template>

<script>
import {
  consultarTodosFachada,
  consultarPorIdFachada,
  guardarFachada,
  actualizarFachada,
  actualizarParcialFachada,
  borrarFachada,
} from "../clients/MatriculaClient.js";
export default {
    methods:{
        async consultarTodos(){
            const res = await consultarTodosFachada();
            console.log(res);
        },
        async consultarPorId(id){
            const res = await consultarPorIdFachada(id);
            console.log(res);
        },
        async guardar(){
            const res = await guardarFachada();
            console.log(res);
        }
    }
};
</script>

<style>
</style>