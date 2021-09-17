import React from 'react';
import { StyleSheet, ImageBackground, View, Image, Text } from 'react-native';

import AppButton from '../components/AppButton';
import AppScreen from '../components/AppScreen';
import routes from '../navigation/routes';

const WelcomeScreen = ({ navigation }) => (
    <ImageBackground
        source={require('../assets/background.jpg')}
        style={styles.backgroundImage}
        blurRadius={10}>
        <View style={styles.logoContainer}>
            <Image
                source={require('../assets/logo-red.png')}
                style={styles.logo}
            />
            <Text>Sell what you don't need</Text>
        </View>
        <View style={styles.buttonContainer}>
            <AppButton
                title="LOGIN"
                type="primary"
                onPress={() => navigation.navigate(routes.LOGIN)}
            />
            <AppButton
                title="REGISTER"
                type="secondary"
                onPress={() => navigation.navigate(routes.REGISTER)}
            />
        </View>
    </ImageBackground>
);

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    logoContainer: {
        alignItems: 'center',
        position: 'absolute',
        top: 70,
    },
    logo: {
        height: 100,
        width: 100,
    },
    buttonContainer: {
        width: '100%',
        padding: 15,
    },
});

export default WelcomeScreen;
