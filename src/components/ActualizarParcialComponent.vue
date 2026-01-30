<template>
  <div class="container-parcial">
    <form action="#">
      <h2>Actualizar Parcial</h2>
      <p type="Ingresa el id:">
        <input v-model.number="id" type="number" placeholder="Ingresa un ID" />
      </p>
      <p type="Nombre:">
        <input v-model="nombre" type="text" />
      </p>
      <p type="Apellido:">
        <input v-model="apellido" type="text" />
      </p>
      <p type="Fecha de nacimiento:">
        <input v-model="fechaNacimiento" type="date" />
      </p>
      <p type="Provincia:">
        <input v-model="provincia" type="text" />
      </p>
      <p type="Genero:">
        <input v-model="genero" type="text" />
      </p>
      <div class="centrar-boton">
        <button type="button" @click="pasarPadre">Actualizar</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  emits: ["actualizarParcial"],
  data() {
    return {
      id: null,
      nombre: null,
      apellido: null,
      fechaNacimiento: null,
      provincia: null,
      genero: null,
    };
  },
  methods: {
    pasarPadre() {
      const estudiante = {
        nombre: this.nombre,
        apellido: this.apellido,
        fechaNacimiento: this.fechaNacimiento? this.fechaNacimiento + "T00:00:00": null,
        provincia: this.provincia,
        genero: this.genero,
      };
      this.$emit("actualizarParcial", this.id, estudiante);
      this.id = "";
      this.nombre = "";
      this.apellido = "";
      this.fechaNacimiento = "";
      this.provincia = "";
      this.genero = "";
    },
  },
};
</script>

<style scoped>
* {
  font-family: "Segoe UI", Roboto, sans-serif;
  box-sizing: border-box;
}

.container-parcial {
  display: flex;
  justify-content: center;
  align-items: center;
}

form {
  background: white;
  padding: 40px 45px;
  border-radius: 18px;
  width: 360px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
}

h2 {
  text-align: center;
  margin-bottom: 30px;
  font-size: 26px;
  color: #333;
  border-bottom: 2px solid #333;
}

p {
  position: relative;
  margin-bottom: 25px;
}

p::before {
  content: attr(type);
  position: absolute;
  top: -10px;
  left: 5px;
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
  border-color: #43cea2;
  box-shadow: 0 0 0 2px rgba(67, 206, 162, 0.25);
}

.centrar-boton {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

button {
  background: linear-gradient(135deg, #43cea2, #185a9d);
  color: white;
  border: none;
  padding: 12px 50px;
  border-radius: 30px;
  font-size: 15px;
  cursor: pointer;
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

button:active {
  transform: scale(0.96);
}
</style>