import axios from "axios";

//const user = "labcom";
//const password = "labcom,2015";
const URL = `http://localhost:8082/autorizacion/token`;

const obtenerToken = async (user, password) => {
    const data = await axios.get(`${URL}?user=${user}&password=${password}`).then(r => r.data);
    const tokenCache = data.accessToken;
    console.log(tokenCache);
    return tokenCache;
};

export const obtenerTokenFachada = async (user, password) => {
    return await obtenerToken(user, password);
};
