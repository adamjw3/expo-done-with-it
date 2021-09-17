import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View, ActivityIndicator } from 'react-native';
import LottieView from 'lottie-react-native';

import useApi from '../hooks/useApi';
import AppButton from '../components/AppButton';
import AppCard from '../components/AppCard';
import AppScreen from '../components/AppScreen';
import AppText from '../components/AppText';
import routes from '../navigation/routes';
import listingsApi from '../api/listing';
import colors from '../config/colors';
import AppActivityIndicator from '../components/AppActivityIndicator';

const ListingScreen = ({ navigation }) => {
    const {
        data,
        error,
        loading,
        request: loadingListings,
    } = useApi(listingsApi.getListings);

    useEffect(() => {
        loadingListings();
    }, []);

    return (
        <>
            <AppActivityIndicator visible={loading} />
            <AppScreen>
                <View style={styles.container}>
                    {error && (
                        <>
                            <AppText>Couldn't retrieve the listings..</AppText>
                            <AppButton
                                title="retry"
                                type="primary"
                                onPress={loadingListings}
                            />
                        </>
                    )}
                    <FlatList
                        data={data}
                        keyExtractor={(listing) => listing.id.toString()}
                        renderItem={({ item }) => (
                            <AppCard
                                title={item.title}
                                price={item.price}
                                imageURL={item.images[0].url}
                                thumbnailUrl={item.images[0].thumbnailUrl}
                                onPress={() =>
                                    navigation.navigate(
                                        routes.LISTING_DETAILS,
                                        item
                                    )
                                }
                            />
                        )}
                    />
                </View>
            </AppScreen>
        </>
    );
};

export default ListingScreen;

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
});
