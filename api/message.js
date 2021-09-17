import client from './client';

const send = (message, listingId) =>
    client.post('/messaages', { message, listingId });

export default {
    send,
};
