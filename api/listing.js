import apiClient from './client';

const endPoint = '/listings';
const getListings = () => apiClient.get(endPoint);

const addListing = (listing, onUploadProgress) => {
    const formData = new FormData();

    formData.append('title', listing.title);
    formData.append('price', listing.price);
    formData.append('categoryId', listing.category.value);
    formData.append('description', listing.description);

    listing.imagesUris.forEach((image, index) => {
        formData.append('images', {
            name: `image-${index}`,
            type: 'image/jpeg',
            uri: image,
        });
    });

    if (listing.location) {
        const locObject = {
            longitude: listing.location.coords.longitude,
            latitude: listing.location.coords.latitude,
        };

        formData.append('location', JSON.stringify(locObject));
    }

    return apiClient.post(endPoint, formData, {
        onUploadProgress: (progress) =>
            onUploadProgress(progress.loaded / progress.total),
    });
};

export default {
    getListings,
    addListing,
};
