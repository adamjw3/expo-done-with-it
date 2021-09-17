import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';

const CACHE_PREFIX = '@cache';
const exipiryInMinutes = 5;

const store = async (value, key) => {
    try {
        const item = {
            value,
            timestamp: Date.now(),
        };
        await AsyncStorage.setItem(
            `${CACHE_PREFIX}-${key}`,
            JSON.stringify(item)
        );
    } catch (error) {
        console.log('cache error', error);
    }
};

const isExpired = (item) => {
    const now = moment(Date.now);
    const cache = moment(item.timestamp);
    return now.diff(cache, 'minutes') > exipiryInMinutes;
};

const getItem = async (key) => {
    try {
        const item = await AsyncStorage.getItem(`${CACHE_PREFIX}-${key}`);

        if (item !== null) {
            if (isExpired(item)) {
                await AsyncStorage.removeItem(`${CACHE_PREFIX}-${key}`);
                return null;
            }

            return JSON.parse(item.value);
        }

        return null;
    } catch (error) {
        console.log('error', error);
    }
};

export default {
    store,
    getItem,
};
