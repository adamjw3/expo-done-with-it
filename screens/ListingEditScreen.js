import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import * as yup from 'yup';

import listingsApi from '../api/listing';
import useLocation from '../hooks/useLocation';
import AppScreen from '../components/AppScreen';
import AppFormPicker from '../components/forms/AppFormPicker';
import AppCategoryPickerItem from '../components/AppCategoryPickerItem';
import AppFormImagePicker from '../components/forms/AppFormImagePicker';

import { AppForm, AppSubmitButton, AppFormField } from '../components/forms';
import { Formik } from 'formik';
import UploadScreen from './UploadScreen';

const validationSchema = yup.object().shape({
    title: yup.string().required().label('Title'),
    price: yup.string().required().label('Price'),
    category: yup.object().required().nullable().label('Category'),
    description: yup.string().required().label('Description'),
});

const items = [
    {
        label: 'cameras',
        value: 1,
        backgroundColor: 'pink',
        icon: 'apps',
    },
    {
        label: 'cars',
        value: 2,
        backgroundColor: 'green',
        icon: 'apps',
    },
    {
        label: 'furniture',
        value: 3,
        backgroundColor: 'yellow',
        icon: 'apps',
    },
];

const ListingEditScreen = () => {
    const location = useLocation();
    const [uploadVisible, setUploadVisible] = useState(false);
    const [progress, setProgress] = useState(0);

    const handleSubmit = async (listing, { resetForm }) => {
        setProgress(0);
        setUploadVisible(true);
        const result = await listingsApi.addListing(
            { ...listing, location },
            (progress) => setProgress(progress)
        );

        if (!result.ok) {
            setUploadVisible(false);
            return alert('something went wrong');
        }

        resetForm();
    };

    const onDone = () => {
        setUploadVisible(false);
    };

    return (
        <AppScreen>
            <UploadScreen
                progress={progress}
                visible={uploadVisible}
                onDone={onDone}
            />
            <AppForm
                initialValues={{
                    title: '',
                    price: '',
                    category: null,
                    description: '',
                    imagesUris: [],
                }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}>
                <AppFormImagePicker name="imagesUris" />
                <AppFormField
                    autoCapitalise="none"
                    autoCorrect={false}
                    icon="email"
                    placeholder="Title"
                    name="title"
                />
                <AppFormField
                    autoCapitalise="none"
                    autoCorrect={false}
                    icon="email"
                    placeholder="Price"
                    name="price"
                    width="25%"
                />
                <AppFormPicker
                    items={items}
                    name="category"
                    placeholder="Category"
                    width="50%"
                    PickerItemComponent={AppCategoryPickerItem}
                    numberOfColumns={3}
                />
                <AppFormField
                    multiline
                    autoCapitalise="none"
                    autoCorrect={false}
                    icon="email"
                    placeholder="Description"
                    name="description"
                />
                <AppSubmitButton title="Login" type="primary" />
            </AppForm>
        </AppScreen>
    );
};

export default ListingEditScreen;

const styles = StyleSheet.create({});
