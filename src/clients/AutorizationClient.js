import axios from "axios";

const URL = "http://localhost:8082/autorizacion/token?user=labcom&password=labcom,2015";

const obtenerToken = async () => {
    const data = await axios.get(URL).then(r => r.data);
    console.log("Token:", data.accessToken);
    console.log("Rol:", data.role);
    const token = data.accessToken;
    localStorage.setItem("token", token);
    return token;
};

export const obtenerTokenFachada = async () => {
    return await obtenerToken();
};
