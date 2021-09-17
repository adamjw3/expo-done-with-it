import React from 'react';
import { useFormikContext } from 'formik';
import AppTextInput from '../AppTextInput';
import AppErrorMessage from './AppErrorMessage';

const AppFormField = ({ name, ...otherProps }) => {
    const { setFieldValue, setFieldTouched, errors, touched, values } =
        useFormikContext();
    return (
        <>
            <AppTextInput
                onChangeText={(text) => setFieldValue(name, text)}
                value={values[name]}
                onBlur={() => {
                    setFieldTouched(name);
                }}
                {...otherProps}
            />
            <AppErrorMessage
                errorMessage={errors[name]}
                visible={touched[name]}
            />
        </>
    );
};

export default AppFormField;
