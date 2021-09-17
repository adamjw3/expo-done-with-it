import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useFormikContext } from 'formik';
import AppImageInputList from '../AppImageInputList';
import AppErrorMessage from './AppErrorMessage';

const AppFormImagePicker = ({ name }) => {
    const { setFieldValue, errors, touched, values } = useFormikContext();
    const imageUris = values[name];

    const handleAdd = (uri) => {
        setFieldValue(name, [...imageUris, uri]);
    };

    const handleRemove = (uri) => {
        setFieldValue(
            name,
            imageUris.filter((imageUri) => imageUri !== uri)
        );
    };

    return (
        <View>
            <AppImageInputList
                imageUris={imageUris}
                onRemoveImage={handleRemove}
                onAddImage={handleAdd}
            />
            <AppErrorMessage
                errorMessage={errors[name]}
                visible={touched[name]}
            />
        </View>
    );
};

export default AppFormImagePicker;
