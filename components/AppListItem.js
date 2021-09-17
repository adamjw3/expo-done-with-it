import React from 'react';
import { StyleSheet, View, Image, TouchableHighlight } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import colors from '../config/colors';

import AppText from './AppText';

export default function AppListItem({
    title,
    subtitle,
    image,
    IconComponent,
    onPress,
    renderRightActions,
    chevron,
}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
                <View style={styles.container}>
                    {IconComponent}
                    {image && (
                        <Image
                            source={image}
                            style={styles.img}
                            resizeMode="cover"
                        />
                    )}
                    <View style={styles.detailContainer}>
                        <AppText style={styles.title}>{title}</AppText>
                        {subtitle && (
                            <AppText style={styles.subtitle}>
                                {subtitle}
                            </AppText>
                        )}
                    </View>
                    {chevron && (
                        <MaterialCommunityIcons
                            name="chevron-right"
                            size={20}
                            color={colors.black}
                            style={styles.chevron}
                        />
                    )}
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 20,
        backgroundColor: colors.white,
    },
    img: {
        width: 70,
        height: 70,
        borderRadius: 100,
    },
    detailContainer: {
        justifyContent: 'center',
        marginLeft: 10,
    },
    title: {
        fontSize: 20,
    },
    subtitle: {
        fontSize: 16,
    },
    chevron: {
        marginLeft: 'auto',
        alignSelf: 'center',
    },
});
