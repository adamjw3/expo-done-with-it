import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import colors from '../config/colors';

export default function AppButton({ title, type, onPress }) {
    return (
        <TouchableOpacity
            style={[styles.button, styles[type]]}
            onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 25,
        color: colors.white,
        width: '100%',
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
    },
    primary: {
        backgroundColor: colors.primary,
    },
    secondary: {
        backgroundColor: colors.secondary,
    },
    text: {
        fontSize: 18,
        textTransform: 'uppercase',
        color: colors.white,
        fontWeight: 'bold',
    },
});
