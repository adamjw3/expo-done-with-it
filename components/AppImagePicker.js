import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Button, View, Platform, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const AppImagePicker = () => {
    const [image, setImage] = useState([]);

    const requestPermissions = async () => {
        const { granted } =
            await ImagePicker.requestMediaLibraryPermissionsAsync();
        // eslint-disable-next-line no-alert
        if (!granted) alert('not granted');
    };

    useEffect(() => {
        requestPermissions();
    }, []);

    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                title="Pick an image from camera roll"
                onPress={pickImage}
            />
            {image && (
                <Image
                    source={{ uri: image }}
                    style={{ width: 200, height: 200 }}
                />
            )}
        </View>
    );
};

export default AppImagePicker;

const styles = StyleSheet.create({});
