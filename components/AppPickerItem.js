import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import AppText from './AppText';

const AppPickerItem = ({ item, onPress }) => (
    <TouchableOpacity onPress={onPress}>
        <AppText style={styles.text}>{item.label}</AppText>
    </TouchableOpacity>
);

export default AppPickerItem;

const styles = StyleSheet.create({
    text: {
        padding: 20,
    },
});
