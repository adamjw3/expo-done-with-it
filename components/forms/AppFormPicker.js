import React from 'react';
import { useFormikContext } from 'formik';
import { AppErrorMessage } from '../forms/';
import AppPicker from '../AppPicker';

const AppFormPicker = ({
    items,
    name,
    placeholder,
    width,
    PickerItemComponent,
    numberOfColumns,
}) => {
    const { setFieldValue, errors, touched, values } = useFormikContext();
    return (
        <>
            <AppPicker
                items={items}
                placeholder={placeholder}
                onSelectItem={(item) => setFieldValue(name, item)}
                selectedItem={values[name]}
                width={width}
                PickerItemComponent={PickerItemComponent}
                numberOfColumns={numberOfColumns}
            />
            <AppErrorMessage
                errorMessage={errors[name]}
                visible={touched[name]}
            />
        </>
    );
};

export default AppFormPicker;
