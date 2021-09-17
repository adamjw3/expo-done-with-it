import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ViewImageScreen from '../screens/ViewImageScreen';
import MessagesScreen from '../screens/MessagesScreen';
import AccountScreen from '../screens/AccountScreen';
import AuthNavigator from './AuthNavigator';
import ListingScreen from '../screens/ListingScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import routes from './routes';

const Stack = createStackNavigator();

const AccountNavigator = () => {
    return (
        <Stack.Navigator mode="modal">
            <Stack.Screen name={routes.ACCOUNT} component={AccountScreen} />
            <Stack.Screen name={routes.MESSAGE} component={MessagesScreen} />
        </Stack.Navigator>
    );
};

export default AccountNavigator;
