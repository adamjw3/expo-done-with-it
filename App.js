import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import navigationTheme from './navigation/navigationTheme';
import AppNavigator from './navigation/AppNavigator';
import AuthContext from './auth/context';
import AuthNavigator from './navigation/AuthNavigator';
import AppOffline from './components/AppOffline';
import authStorage from './auth/storage';
import { navigationRef } from './navigation/rootNavigation';

export default function App() {
    const [user, setUser] = useState(null);
    const [isReady, setIsReady] = useState(false);

    const restoreToken = async () => {
        const userToken = await authStorage.getUser();
        if (userToken) setUser(userToken);
    };

    if (!isReady)
        return (
            <AppLoading
                startAsync={restoreToken}
                onFinish={() => setIsReady(true)}
                onError={console.warn}
            />
        );

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            <AppOffline />
            <NavigationContainer ref={navigationRef} theme={navigationTheme}>
                {user ? <AppNavigator /> : <AuthNavigator />}
            </NavigationContainer>
        </AuthContext.Provider>
    );
}
