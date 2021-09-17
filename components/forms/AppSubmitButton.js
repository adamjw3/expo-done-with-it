import React from 'react';
import { StyleSheet } from 'react-native';
import { useFormikContext } from 'formik';
import AppButton from '../AppButton';

const AppSubmitButton = ({ title, type }) => {
    const { handleSubmit } = useFormikContext();
    return <AppButton title={title} type={type} onPress={handleSubmit} />;
};

export default AppSubmitButton;

const styles = StyleSheet.create({});
