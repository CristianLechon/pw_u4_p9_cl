<template>
    <div>
        <p type="Nombre:">
            <input type="text" name="" id="">
        </p>
        <p type="Apellido:">
            <input type="text" name="" id="">
        </p>
        <p type="Fecha de nacimiento:">
            <input type="date" name="" id="">
        </p>
        <p type="Provincia:">
            <input type="text" name="" id="">
        </p>
        <p type="Genero:">
            <input type="text" name="" id="">
        </p>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
p::before{
    content: attr(type);
    display: block;
}
</style>