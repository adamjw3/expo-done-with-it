import React, { useState } from 'react';
import * as yup from 'yup';
import {
    AppForm,
    AppErrorMessage,
    AppFormField,
    AppSubmitButton,
} from './forms';
import * as Notifications from 'expo-notifications';

import messageApi from '../api/message';

const validationSchema = yup.object().shape({
    message: yup.string().required().label('Message'),
});

const AppContactSellerForm = ({ listing }) => {
    const [formErrorMessage, setformErrorMessage] = useState('');

    const handleSubmit = async ({ message }, { resetForm }) => {
        setformErrorMessage('');
        const result = await messageApi.send(message, listing.id);

        if (!result.ok) {
            return console.log('Error');
        }

        resetForm();
    };
    return (
        <AppForm
            initialValues={{
                message: '',
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
                placeholder="Message"
                name="message"
            />
            <AppSubmitButton title="Login" type="primary" />
        </AppForm>
    );
};

export default AppContactSellerForm;
