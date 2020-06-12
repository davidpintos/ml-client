import axios from 'axios';

import { getItems, getItem } from './index';

import {ITEMS_LIMIT, SERVER_URL} from '../components/constants';

jest.mock('axios');

describe('getItems', () => {

  it('calls properly the getItems API', async () => {
    const resp = {};
    axios.get.mockResolvedValue(resp);

    await getItems('iphone');

    expect(axios.get).toBeCalled();
    expect(axios.get.mock.calls[0][0]).toBe(`${SERVER_URL}/api/items?q=iphone&limit=${ITEMS_LIMIT}`);
  });

  it('calls properly the getItems API, defining another limit', async () => {
    const resp = {};
    axios.get.mockResolvedValue(resp);

    await getItems('mochila', 10);

    expect(axios.get).toBeCalled();
    expect(axios.get.mock.calls[0][0]).toBe(`${SERVER_URL}/api/items?q=mochila&limit=10`);
  });

  it('calls properly the getItems API and checking the response', async () => {
    const resp = {
      data: {
        categories: ['Mochilas', 'Ropa de Viaje'],
        items:[{
          id: 'MLA12345',
          title: 'Mochila de Viaje',
        }]
      }
    };
    axios.get.mockResolvedValue(resp);

    const result = await getItems('mochila', 1);

    expect(axios.get).toBeCalled();
    expect(axios.get.mock.calls[0][0]).toBe(`${SERVER_URL}/api/items?q=mochila&limit=1`);
    expect(result).toEqual({
      data: {
      categories: ['Mochilas', 'Ropa de Viaje'],
      items: [{
        id: 'MLA12345',
        title: 'Mochila de Viaje',
      }],
    }});
  });

  it('calls properly the getItem API', async () => {
    const resp = {};
    axios.get.mockResolvedValue(resp);

    await getItem('MLA12345');

    expect(axios.get).toBeCalled();
    expect(axios.get.mock.calls[0][0]).toBe(`${SERVER_URL}/api/items/MLA12345`);
  });

  it('calls properly the getItem API and checks the response', async () => {
    const resp = {
      data: {
        categories: ['Mochilas', 'Ropa de Viaje'],
        item: {
          id: 'MLA12345',
          title: 'Mochila de Viaje',
        },
      }
    };
    axios.get.mockResolvedValue(resp);

    const result = await getItem('MLA12345');

    expect(axios.get).toBeCalled();
    expect(axios.get.mock.calls[0][0]).toBe(`${SERVER_URL}/api/items/MLA12345`);
    expect(result).toEqual({
      data: {
      categories: ['Mochilas', 'Ropa de Viaje'],
      item: {
        id: 'MLA12345',
        title: 'Mochila de Viaje',
      },
    }});
  });


});