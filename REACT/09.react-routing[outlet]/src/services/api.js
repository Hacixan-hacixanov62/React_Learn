import { BASE_URL, ENDPOINTS } from './constants';
import axios from 'axios';

export const getData =async (ENDPOINTS) => {
    try {
        const response =await axios.get(`${BASE_URL}/${ENDPOINTS.PRODUCTS}`);
    } catch (error) {
        console.log(error);
    }
}