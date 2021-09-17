import React, { useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Alert,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';
import useImagePicker from '../hooks/useImagePicker';

const AppImageInput = ({ imageUri, onChangeImage }) => {
    useImagePicker();

    const handlePress = () => {
        if (!imageUri) {
            selectImage();
        } else {
            Alert.alert('Delete', 'Do you want to delete', [
                {
                    text: 'Yes',
                    onPress: () => onChangeImage(null),
                },
                {
                    text: 'No',
                },
            ]);
        }
    };

    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 0.5,
            });

            if (!result.cancelled) {
                onChangeImage(result.uri);
            }
        } catch (error) {
            console.log('error', error);
        }
    };

    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={styles.container}>
                {!imageUri && (
                    <MaterialCommunityIcons
                        name="camera"
                        size={60}
                        color={colors.dark}
                    />
                )}
                {imageUri && (
                    <Image source={{ uri: imageUri }} style={styles.image} />
                )}
            </View>
        </TouchableOpacity>
    );
};

export default AppImageInput;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        alignItems: 'center',
        borderRadius: 15,
        height: 100,
        width: 100,
        justifyContent: 'center',
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
    },
});
