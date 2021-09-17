import React from 'react';
import { StyleSheet, View, TextInput, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';

const AppTextInput = ({ icon, width = '100%', ...otherProps }) => (
    <View style={[styles.container, { width: width }]}>
        {icon && (
            <MaterialCommunityIcons
                name={icon}
                size={20}
                color={colors.black}
                style={styles.icon}
            />
        )}
        <TextInput style={styles.textInput} {...otherProps} />
    </View>
);

export default AppTextInput;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        padding: 15,
        marginVertical: 10,
    },
    icon: {
        marginRight: 10,
    },
    textInput: {
        fontSize: 18,
        color: colors.dark,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    },
});
