import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../config/colors';

export default function AppListItemSeparator() {
    return (
        <View style={styles.container}>
            <View style={styles.separator} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
    },
    separator: {
        backgroundColor: colors.light,
        width: '100%',
        height: 1,
    },
});
