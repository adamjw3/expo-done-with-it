import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import AppText from './AppText';
import AppIcon from './AppIcon';

const AppCategoryPickerItem = ({ onPress, item }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <AppIcon
                name={item.icon}
                backgroundColor={item.backgroundColor}
                size={80}
            />
            <AppText style={styles.text}>{item.label}</AppText>
        </TouchableOpacity>
    );
};

export default AppCategoryPickerItem;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 25,
        paddingVertical: 10,
        alignItems: 'center',
        width: '33%',
    },
    text: {
        marginTop: 5,
        textAlign: 'center',
    },
});
