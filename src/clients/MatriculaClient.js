import axios from "axios";


const consultarTodos = async () => {
    const data = await axios.get('http://localhost:8081/matricula/api/v1.0/estudiantes').then(r => r.data);
    return data;
}

const consultarPorId = async (id) => {
    const data = await axios.get(`http://localhost:8081/matricula/api/v1.0/estudiantes/${id}`).then(r => r.data);
    return data;
}

const guardar = async (body) => {
    /*const objeto = {
        nombre: "Cristian",
        apellido: "Lechon"
    }*/
    const data = await axios.post('http://localhost:8081/matricula/api/v1.0/estudiantes', body).then(r => r.data);
    //console.log(data);
    return data;
}

const actualizar = async (id, body) => {
    const data  = await axios.put(`http://localhost:8081/matricula/api/v1.0/estudiantes/${id}`, body).then(r => r.data);
    return data;
}

const actualizarParcial = async (id, body) => {
    const data  = await axios.patch(`http://localhost:8081/matricula/api/v1.0/estudiantes/${id}`, body).then(r => r.data);
    return data;
}

const borrar = async (id) => {
    await axios.delete(`http://localhost:8081/matricula/api/v1.0/estudiantes/${id}`).then(r => r.data);
}


export const consultarTodosFachada = async () => {
    return  await consultarTodos();
}

export const consultarPorIdFachada = async (id) => {
    return await consultarPorId(id);
}

export const guardarFachada = async (body) => {
    return await guardar(body);
}

export const actualizarFachada = async (id, body) => {
    return await actualizar(id, body);
}

export const actualizarParcialFachada = async (id, body) => {
    return await actualizarParcial(id, body);
}

export const borrarFachada = async (id) => {
    await borrar(id);
}
   

