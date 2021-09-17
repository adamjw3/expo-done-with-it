import React from 'react';
import { StyleSheet } from 'react-native';
import colors from '../../config/colors';
import AppText from '../AppText';

const AppErrorMessage = ({ errorMessage, visible }) => {
    if (!visible || !errorMessage) return null;

    return <AppText style={styles.error}>{errorMessage}</AppText>;
};

export default AppErrorMessage;

const styles = StyleSheet.create({
    error: {
        color: colors.danger,
    },
});
