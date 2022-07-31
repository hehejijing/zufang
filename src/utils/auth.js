import storage from "./storage";
const TOKEN = "hkzf";

export const getToken = () => storage.get(TOKEN);

export const setToken = (value) => storage.set(TOKEN, value);

export const removeToken = () => storage.remove(TOKEN);
