import React, { useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import * as yup from 'yup';
import AppScreen from '../components/AppScreen';
import authApi from '../api/auth';

import {
    AppErrorMessage,
    AppForm,
    AppSubmitButton,
    AppFormField,
} from '../components/forms';
import useAuth from '../auth/useAuth';

const validationSchema = yup.object().shape({
    email: yup.string().required().email().label('Email'),
    password: yup.string().required().min(4).label('Password'),
});

const LoginScreen = () => {
    const { logIn } = useAuth();
    const [formErrorMessage, setformErrorMessage] = useState(false);

    const handleSubmit = async ({ email, password }) => {
        const response = await authApi.login(
            email.toLowerCase(),
            password.toLowerCase()
        );

        if (!response.ok) return setformErrorMessage(true);

        setformErrorMessage(false);
        return logIn(response.data);
    };
    return (
        <AppScreen>
            <View style={styles.container}>
                <Image
                    source={require('../assets/logo-red.png')}
                    style={styles.logo}
                />
                <AppForm
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}>
                    <AppErrorMessage
                        errorMessage="Password and email do not match"
                        visible={formErrorMessage}
                    />
                    <AppFormField
                        autoCapitalise="none"
                        autoCorrect={false}
                        icon="email"
                        keyboardType="email-address"
                        placeholder="Email"
                        textContentType="emailAddress"
                        name="email"
                    />
                    <AppFormField
                        autoCapitalise="none"
                        autoCorrect={false}
                        icon="lock"
                        placeholder="Password"
                        secureTextEntry
                        textContentType="password"
                        name="password"
                    />
                    <AppSubmitButton title="Login" type="primary" />
                </AppForm>
            </View>
        </AppScreen>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20,
    },
});
