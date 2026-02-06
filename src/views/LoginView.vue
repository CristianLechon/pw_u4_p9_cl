<template>
  <div class="container">
    <Login />
  </div>
</template>

<script>
import Login from "../components/Login.vue";
export default {
  components: {
    Login,
  },
};
</script>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>