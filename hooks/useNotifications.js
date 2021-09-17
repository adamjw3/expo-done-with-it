import { useEffect } from 'react';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import navigation from '../navigation/rootNavigation';
import expoPushTokens from '../api/expoPushTokens';

const useNotifications = (notificationListener) => {
    const registerForPushNotifications = async () => {
        try {
            const permissions = await Permissions.askAsync(
                Permissions.NOTIFICATIONS
            );

            if (!permissions.granted) return;

            const token = await Notifications.getExpoPushTokenAsync();
            expoPushTokens.register(token);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        registerForPushNotifications();
        if (notificationListener)
            Notifications.addNotificationResponseReceivedListener(() =>
                navigation.navigate(notificationListener)
            );
    }, []);
};

export default useNotifications;
