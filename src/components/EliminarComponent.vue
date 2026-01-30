<template>
  <div>
    <form action="#">
      <h2>Ingrese el ID para eliminar un Estudiante</h2>
      <p type="Ingresa el id:">
        <input v-model.number="id" type="number" placeholder="Ingresa un ID" />
      </p>
      <div class="centrar-boton">
        <button type="button" @click="pasarPadre">Eliminar</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
    };
  },
  methods: {
    pasarPadre() {
      this.$emit("borrar", this.id);
      this.id = "";
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
  color: #b71c1c;
}

p {
  position: relative;
  margin-bottom: 25px;
}

p::before {
  content: attr(type);
  position: absolute;
  top: -10px;
  left: 12px;
  background: white;
  padding: 0 6px;
  font-size: 13px;
  color: #777;
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
  border-color: #e53935;
  box-shadow: 0 0 0 2px rgba(229, 57, 53, 0.25);
}

.centrar-boton {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

button {
  background: linear-gradient(135deg, #c62828, #ff5252);
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
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.35);
}

button:active {
  transform: scale(0.95);
}

</style>