import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import { Image } from 'react-native-expo-image-cache';

import AppText from './AppText';
import colors from '../config/colors';

export default function AppCard({
    title,
    price,
    imageURL,
    onPress,
    thumbnailUrl,
}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.card}>
                <Image
                    uri={imageURL}
                    style={styles.img}
                    tint="light"
                    preview={{ uri: thumbnailUrl }}
                    resizeMode="cover"
                />
                <View style={styles.detailsContainer}>
                    <AppText style={styles.title}>{title}</AppText>
                    <AppText style={styles.price}>${price}</AppText>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.white,
        borderRadius: 15,
        marginBottom: 20,
        overflow: 'hidden',
    },
    img: {
        width: '100%',
        height: 200,
    },
    detailsContainer: {
        padding: 20,
    },
    title: {
        color: colors.black,
        marginBottom: 10,
    },
    price: {
        color: colors.secondary,
    },
});
