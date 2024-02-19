import axios from 'axios';
import strings from '../../strings';

const BASE_URL = strings.API_ROUTE;

export const axiosPrivate = axios.create({
    baseURL: BASE_URL
});
