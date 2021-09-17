import { useContext } from 'react';
import jwtDecode from 'jwt-decode';
import AuthContext from './context';
import AuthStorage from './storage';

const useAuth = () => {
    const { user, setUser } = useContext(AuthContext);

    const logOut = () => {
        setUser(null);
        AuthStorage.removeToken(user);
    };

    const logIn = (authToken) => {
        setUser(jwtDecode(authToken));
        AuthStorage.storeToken(authToken);
    };

    return { user, setUser, logOut, logIn };
};

export default useAuth;
