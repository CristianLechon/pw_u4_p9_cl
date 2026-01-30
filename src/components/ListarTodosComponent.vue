<template>
  <div class="container-t-component">
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Fecha nacimiento</th>
          <th>Provincia</th>
          <th>Genero</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="estudiante in estudiantes" :key="estudiante">
          <td>{{ estudiante.nombre }}</td>
          <td>{{ estudiante.apellido }}</td>
          <td>{{ estudiante.fechaNacimiento }}</td>
          <td>{{ estudiante.provincia }}</td>
          <td>{{ estudiante.genero }}</td>
        </tr>
      </tbody>
    </table>
    <div class="btn-centrar">
      <button type="button" @click="pasarPadre">Buscar Todos</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    estudiantes: {
      type: Array,
      required: true,
    },
  },
  methods: {
    pasarPadre() {
      this.$emit("consultarTodos");
    },
  },
};
</script>

<style scoped>
.btn-centrar {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
button {
  background: linear-gradient(135deg, #185a9d, #43cea2);
  color: white;
  border: none;
  padding: 12px 50px;
  border-radius: 30px;
  font-size: 15px;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.3);
}

button:active {
  transform: scale(0.95);
}
table {
  width: 100%;
  max-width: 900px;
  border-collapse: collapse;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 10px 25px gray;
  border: none;
}

thead {
  background: blue;
  color: white;
}

th {
  padding: 14px;
  text-align: left;
  font-size: 16px;
  letter-spacing: 0.5px;
}

td {
  padding: 12px 14px;
  font-size: 15px;
  background: rgb(243, 242, 242);
}
</style>