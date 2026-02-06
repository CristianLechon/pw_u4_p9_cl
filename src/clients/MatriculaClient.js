import axios from "axios";

//const TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJtYXRyaWN1bGEtYXV0aCIsInN1YiI6ImxhYmNvbSIsImdyb3VwcyI6WyJhZG1pbiJdLCJpYXQiOjE3NzAyNTI0MDgsImV4cCI6MTc3MDI1NjAwOCwianRpIjoiYjBiMTgyY2YtNWRjMS00YjI5LWJlZTgtMjI1ZjlhNjNjZjYwIn0.m4Nmw3wPIL23LMkgXtsmxRuQdk7Ke_F0ByLCUDMWU42w0f6D1YLQM76tDcdcYfENfaDEgiILm8qsHFCHGdoWG_fLJ358Pl4H3X1qTE-k05souxHhhMPfFTcUIiYbWJ4rOnlllqFenZtAYncMVI6DRLaDYQxc_mxXRxpilvZjiLuGY5Lkysi2PwSpkxWyo4dlp80JaJBa9zlMq10YCMwHr3HvRyBwMMgMTImBeZGDEBz-9fhCSSUZ6QEAT6k8p75bRuz6j2MZ2pHkFj9eRBuaq1isc5QT6TKVk8YJOy2sV7KMnquvHg8ujd_7KIJMThD22oruF3FjHb1d4sisjxR8Jg";
const URL = "http://localhost:8081/matricula/api/v1.0/estudiantes";

const consultarTodos = async () => {
    const TOKEN = getToken();
    const data = await axios.get(`${URL}`, { headers: { Authorization: `Bearer ${TOKEN}`, } }).then(r => r.data);
    return data;
}

const consultarPorId = async (id) => {
    const TOKEN = getToken();
    const data = await axios.get(`${URL}/${id}`, { headers: { Authorization: `Bearer ${TOKEN}` } }).then(r => r.data);
    return data;
}

const guardar = async (body) => {
    /*const objeto = {
        nombre: "Cristian",
        apellido: "Lechon"
    }*/
    const TOKEN = getToken();
    const data = await axios.post(`${URL}`, body, { headers: { Authorization: `Bearer ${TOKEN}` } });
    //console.log(data);
    return data;
}

const actualizar = async (id, body) => {
    const TOKEN = getToken();
    const data = await axios.put(`${URL}/${id}`, body, { headers: { Authorization: `Bearer ${TOKEN}` } }).then(r => r.data);
    return data;
}

const actualizarParcial = async (id, body) => {
    const TOKEN = getToken();
    const data = await axios.patch(`${URL}/${id}`, body, { headers: { Authorization: `Bearer ${TOKEN}` } }).then(r => r.data);
    return data;
}

const borrar = async (id) => {
    const TOKEN = getToken();
    await axios.delete(`${URL}/${id}`, { headers: { Authorization: `Bearer ${TOKEN}` } }).then(r => r.data);
}

const getToken = () => {
  return localStorage.getItem("token");
};


export const consultarTodosFachada = async () => {
    return await consultarTodos();
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

