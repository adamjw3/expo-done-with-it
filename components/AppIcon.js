import React from 'react';
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';

const AppIcon = ({
    name,
    size = 40,
    iconColor = colors.white,
    backgroundColor = 'red',
}) => (
    <View
        style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
        <MaterialCommunityIcons
            name={name}
            size={size * 0.5}
            color={iconColor}
        />
    </View>
);

export default AppIcon;
