import axios from 'axios';

const instance = axios.create({
    baseURL: `http://localhost:4000`,
});

export const getItems = (query, limit = 4) =>
    instance.get(`/api/items?q=${query}&limit=${limit}`)
        .then((response) => response)

export const getItem = (itemId) =>
    instance.get(`/api/items/${itemId}`)
        .then((response) => response)