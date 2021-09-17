import { useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';

export default function useImagePicker() {
    const requestPermissions = async () => {
        const { granted } =
            await ImagePicker.requestMediaLibraryPermissionsAsync();
        // eslint-disable-next-line no-alert
        if (!granted) alert('not granted');
    };

    useEffect(() => {
        requestPermissions();
    }, []);
}
