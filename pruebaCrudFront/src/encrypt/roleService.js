import CryptoJS from "crypto-js";

const SECRET_KEY = "hola";

// Guardar un rol en localStorage (encriptado)
export const setRole = (role) => {
    const encryptedRole = CryptoJS.AES.encrypt(role, SECRET_KEY).toString();
    localStorage.setItem("role", encryptedRole);
};

// Obtener el rol desencriptado desde localStorage
export const getRole = () => {
    const encryptedRole = localStorage.getItem("role");
    if (!encryptedRole) return null;

    try {
        const bytes = CryptoJS.AES.decrypt(encryptedRole, SECRET_KEY);
        return bytes.toString(CryptoJS.enc.Utf8);
    } catch (error) {
        console.error("Error desencriptando el rol:", error);
        return null;
    }
};

// Eliminar el rol de localStorage
export const removeRole = () => {
    localStorage.removeItem("role");
};
