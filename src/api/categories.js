import axios from 'axios';

export const getCategories = () => {
    return axios.get('/categories')
}