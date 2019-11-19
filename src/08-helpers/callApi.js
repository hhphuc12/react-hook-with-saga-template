import { getConfig } from '../env';
import { getTokenFromLocalStorage } from './helpers';

export const callApi = (data, options) => {
    const { endpoint, token, method } = options;
    const config = {
        method: method || 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: method === 'POST' ? JSON.stringify({
            ...data,
            token: token || getTokenFromLocalStorage(),
        }) : undefined
    };
    /*eslint-disable-next-line*/
    return fetch(`${getConfig('API_SERVER')}/${endpoint}`, config)
        .then(response => response.json())
        .catch(err => {
            return { errorMessage: err }
        });
};