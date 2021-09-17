import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useNetInfo } from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import navigationTheme from './navigation/navigationTheme';
import AppNavigator from './navigation/AppNavigator';

export default function App() {
    const netInfo = useNetInfo();

    const storeData = async () => {
        try {
            await AsyncStorage.setItem(
                'person',
                JSON.stringify({
                    id: 1,
                    title: 'mr',
                    name: 'dave',
                    age: 30,
                    nationailty: 'british',
                })
            );
            const value = await AsyncStorage.getItem('person');
            const person = JSON.parse(value);
            console.log('person', person);
        } catch (e) {
            // log using sentary
            console.log('e', e);
        }
    };

    console.log('netinfo', netInfo);

    storeData();

    return (
        <NavigationContainer theme={navigationTheme}>
            <AppNavigator />
        </NavigationContainer>
    );
}
