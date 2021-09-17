import React from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import { useNetInfo } from '@react-native-community/netinfo';
import AppText from './AppText';
import colors from '../config/colors';

const AppOffline = () => {
    const netInfo = useNetInfo();

    if (netInfo.type !== 'unknown' && netInfo.isInternetReachable === false)
        return (
            <View style={styles.container}>
                <AppText style={styles.text}>No Internet Connection</AppText>
            </View>
        );

    return null;
};

export default AppOffline;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        top: Constants.statusBarHeight,
        width: '100%',
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        zIndex: 1,
    },
    text: {
        color: colors.white,
    },
});
