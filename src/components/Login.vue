<template>
  <div class="login">
    <h2>Login</h2>
    <input v-model="usuario" type="text" placeholder="Usuario" />
    <input v-model="password" type="password" placeholder="Contraseña" />
    <button @click="login">Entrar</button>
  </div>
</template>

<script>
import { obtenerTokenFachada } from "../clients/AutorizationClient.js";
export default {
  data() {
    return {
      usuario: "",
      password: "",
    };
  },
  methods: {
    async login() {
      //const TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJtYXRyaWN1bGEtYXV0aCIsInN1YiI6ImxhYmNvbSIsImdyb3VwcyI6WyJhZG1pbiJdLCJpYXQiOjE3NzAzMzczOTUsImV4cCI6MTc3MDM0MDk5NSwianRpIjoiNmNhYTgxNjEtMTA5MS00OTBhLTliNTUtMGEyODI0MGY5ZjFhIn0.I2uOhfE_ap0FQsr_jiTo4ayD2VWM3p5Xk2UeY70P-pfiMX031jiSLP6Qqwx9W-rXYeqo8OQSR-QzTOfIH0JO3ezqg-LP9zNjyLLKynlfUrYCTOgXxMYBphoX4tN5fZ-uX0WvshiFBRO25K54HpN_NJoZYuWRjRIPgJLIwLHzAm1urvQDxDrL2K0-tVsOxQRA38NccIGywmm7NehW8sKlvPOJs17j8oRTpMmSLZL9n3P3-pyG3zZllgNH7IwGp1ZaV0xq3cR-rKL0fck7UFhv3EWWul6AQf1cPokVEVXffQPg8JjO9D07EGpybweHgKjssFnEq8WCaHRAANLmEQaw1w";

      const TOKEN = await obtenerTokenFachada(this.usuario, this.password);
      if (TOKEN !== null) {
        // se genera a nivel de aplicacion
        localStorage.setItem("token", TOKEN); //funciona como cache
        localStorage.setItem("estaAutenticado", true);
        console.log("Ingreso con el usuario: ", this.usuario, "desde el localStorage");
      } else {
        console.log("Error de autenticación");
      }
    },
  },
};
</script>

<style scoped>
.login {
  width: 300px;
  margin: 100px;
  padding: 20px;
  border: 1px solid gray;
  border-radius: 8px;
  text-align: center;
}
input {
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
  box-sizing: border-box;
}
button {
  width: 100%;
  padding: 8px;
  cursor: pointer;
}
</style>