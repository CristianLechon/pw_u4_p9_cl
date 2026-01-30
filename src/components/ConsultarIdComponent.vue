<template>
  <div>
    <form action="#">
      <h2>Ingrese un ID para Consultar un Estudiante</h2>
      <p type="Ingresa el id:">
        <input v-model.number="id" type="number" placeholder="Ingresa un ID"/>
      </p>
      <div class="centrar-boton">
        <button type="button" @click="pasarPadre">Consultar</button>
      </div>
    </form>
  </div>
  <div>
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
        <tr v-for="estudiante in estudiantes" :key="estudiante.id">
          <td>{{ estudiante.nombre }}</td>
          <td>{{ estudiante.apellido }}</td>
          <td>{{ estudiante.fechaNacimiento }}</td>
          <td>{{ estudiante.provincia }}</td>
          <td>{{ estudiante.genero }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  emits: ["estudianteId"],
  data() {
    return {
      id: null,
    };
  },
  methods: {
    pasarPadre() {
      this.$emit("estudianteId", this.id);
      this.id = "";
    },
  },
  props: {
    estudiantes: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style scoped>
* {
  font-family: "Segoe UI", Roboto, sans-serif;
  box-sizing: border-box;
}

form {
  background: white;
  padding: 35px 40px;
  border-radius: 18px;
  width: 380px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
  margin: auto;
  text-align: center;
}

h2 {
  margin-bottom: 25px;
  color: #333;
}

p {
  position: relative;
  margin-bottom: 25px;
}

p::before {
  content: attr(type);
  position: absolute;
  top: -10px;
  left: 10px;
  background: white;
  padding: 0 6px;
  font-size: 13px;
  color: #666;
}

input {
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 15px;
  transition: 0.3s;
}

input:focus {
  outline: none;
  border-color: #185a9d;
  box-shadow: 0 0 0 2px rgba(24, 90, 157, 0.25);
}

.centrar-boton {
  display: flex;
  justify-content: center;
  margin-top: 20px;
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
  width: 90%;
  margin: 40px auto;
  border-collapse: collapse;
  background: white;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
}

thead {
  background: blue;
  color: white;
}

th {
  padding: 15px;
  text-align: left;
  font-size: 15px;
  letter-spacing: 0.5px;
}

td {
  padding: 14px;
  font-size: 14px;
  color: #333;
}


</style>