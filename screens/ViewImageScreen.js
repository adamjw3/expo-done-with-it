import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppScreen from '../components/AppScreen';

const ViewImageScreen = () => (
    <AppScreen>
        <View style={styles.container}>
            <Image
                resizeMode="contain"
                source={require('../assets/chair.jpg')}
                style={styles.image}
            />
            <MaterialCommunityIcons
                name="close"
                size={32}
                color="#ffffff"
                style={styles.closeButton}
            />
            <MaterialCommunityIcons
                name="trash-can-outline"
                size={32}
                color="#ffffff"
                style={styles.deleteButton}
            />
        </View>
    </AppScreen>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        flexDirection: 'row',
    },
    closeButton: {
        width: 50,
        height: 50,
        position: 'absolute',
        left: 30,
        top: 50,
    },
    deleteButton: {
        width: 50,
        height: 50,
        position: 'absolute',
        right: 30,
        top: 50,
    },
    image: {
        width: '100%',
        height: '100%',
    },
});

export default ViewImageScreen;
