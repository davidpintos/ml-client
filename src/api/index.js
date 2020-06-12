import axios from 'axios';

import {ITEMS_LIMIT, SERVER_URL} from '../components/constants';


export const getItems = (query, limit = ITEMS_LIMIT) =>
    axios.get(`${SERVER_URL}/api/items?q=${query}&limit=${limit}`)
        .then((response) => response)

export const getItem = (itemId) =>
    axios.get(`${SERVER_URL}/api/items/${itemId}`)
        .then((response) => response)