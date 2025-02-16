import CryptoJS from "crypto-js";

const SECRET_KEY = "hola";

// Guardar el token en localStorage (encriptado)
export const setToken = (token) => {
    const encryptedToken = CryptoJS.AES.encrypt(token, SECRET_KEY).toString();
    localStorage.setItem("token", encryptedToken);
};

// Obtener el token desencriptado
export const getToken = () => {
    const encryptedToken = localStorage.getItem("token");
    if (!encryptedToken) return null;

    try {
        const bytes = CryptoJS.AES.decrypt(encryptedToken, SECRET_KEY);
        return bytes.toString(CryptoJS.enc.Utf8);
    } catch (error) {
        console.error("Error desencriptando el token:", error);
        return null;
    }
};

// Eliminar el token
export const removeToken = () => {
    localStorage.removeItem("token");
};
