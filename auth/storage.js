import * as SecureStore from 'expo-secure-store';
import jwtDecode from 'jwt-decode';

const key = 'authToken';

const storeToken = async (authToken) => {
    try {
        const isToken = await SecureStore.setItemAsync(key, authToken);
        return isToken;
    } catch (error) {
        console.log('error', error);
    }
};

const getToken = async () => {
    try {
        const authToken = await SecureStore.getItemAsync(key);
        return authToken;
    } catch (error) {
        console.log('error', error);
    }
};

const getUser = async () => {
    const token = await getToken();
    if (token) return jwtDecode(token);
    return null;
};

const removeToken = async () => {
    try {
        await SecureStore.deleteItemAsync(key);
    } catch (error) {
        console.log('error', error);
    }
};

export default {
    storeToken,
    getUser,
    removeToken,
};
