/* 
    # CHAVE API 
        2c14ecae1b01999751125cc23d7cecb9a5ffd706
*/

import axios from 'axios';

export const key = "2c14ecae1b01999751125cc23d7cecb9a5ffd706";

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        'Authorization': `Bearer ${key}`
    }
})

export default api;