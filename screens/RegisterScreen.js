import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as yup from 'yup';
import AppActivityIndicator from '../components/AppActivityIndicator';
import AppScreen from '../components/AppScreen';
import usersApi from '../api/users';
import useAuth from '../auth/useAuth';
import authApi from '../api/auth';
import useApi from '../hooks/useApi';

import {
    AppErrorMessage,
    AppForm,
    AppSubmitButton,
    AppFormField,
} from '../components/forms';

const validationSchema = yup.object().shape({
    name: yup.string().required().label('Name'),
    email: yup.string().required().email().label('Email'),
    password: yup.string().required().min(4).label('Password'),
});

const RegisterScreen = () => {
    const { logIn } = useAuth();
    const [formErrorMessage, setformErrorMessage] = useState('');
    const registerApi = useApi(usersApi.register);
    const loginApi = useApi(authApi.login);

    const handleSubmit = async (userInfo) => {
        setformErrorMessage('');
        const results = await registerApi.request(userInfo);
        if (!results.ok) {
            if (!results.data) {
                setformErrorMessage(results.data.error);
            } else {
                setformErrorMessage('something went wrong 1');
            }
        } else {
            const response = await loginApi.request(
                userInfo.email,
                userInfo.passwordd
            );
            if (!response.ok)
                return setformErrorMessage('something went wrong 2');

            setformErrorMessage('');
            return logIn(response.data);
        }
    };

    return (
        <>
            <AppActivityIndicator
                visible={registerApi.loading || loginApi.loading}
            />
            <AppScreen>
                <AppForm
                    initialValues={{
                        name: '',
                        email: '',
                        password: '',
                    }}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}>
                    <AppErrorMessage
                        errorMessage={formErrorMessage}
                        visible={formErrorMessage !== ''}
                    />
                    <AppFormField
                        autoCapitalise="none"
                        autoCorrect={false}
                        icon="account"
                        placeholder="Name"
                        textContentType="givenName"
                        name="name"
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
            </AppScreen>
        </>
    );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
