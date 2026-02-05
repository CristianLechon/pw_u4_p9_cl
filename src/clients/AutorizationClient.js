import axios from "axios";

const user = "labcom";
const password = "labcom,2015"
const URL = `http://localhost:8082/autorizacion/token?user=${user}&password=${password}`;
let tokenCache = null;

const obtenerToken = async () => {

    if (tokenCache) {
        console.log("Reutilizando token", tokenCache);
        return tokenCache;
    }
    const data = await axios.get(`${URL}`).then(r => r.data);
    tokenCache = data.accessToken;
    console.log(tokenCache);
    return tokenCache;
};

export const obtenerTokenFachada = async () => {
    return await obtenerToken();
};
