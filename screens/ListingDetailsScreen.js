import React from 'react';
import { StyleSheet, View, KeyboardAvoidingView, Platform } from 'react-native';
import { Image } from 'react-native-expo-image-cache';

import AppText from '../components/AppText';
import AppScreen from '../components/AppScreen';
import colors from '../config/colors';
import AppContactSellerForm from '../components/AppContactSellerForm';

export default function ListingDetailsScreen({ route }) {
    const listing = route.params;

    return (
        <AppScreen>
            <Image
                uri={listing.images[0].url}
                preview={{ uri: listing.images[0].thumbnailUrl }}
                tint="light"
                style={styles.img}
                resizeMode="cover"
            />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{listing.title}</AppText>
                <AppText style={styles.price}>${listing.price}</AppText>
            </View>
            <AppContactSellerForm listing={listing} />
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    img: {
        width: '100%',
        height: 400,
    },
    detailsContainer: {
        padding: 20,
        marginBottom: 20,
    },
    title: {
        color: colors.black,
        marginBottom: 10,
    },
    price: {
        color: colors.secondary,
        marginBottom: 20,
    },
});
