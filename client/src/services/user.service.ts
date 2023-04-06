import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_USER_SERVICE_URL,
});

export const getUser = async (id: string) => {
    try {
        const response = await api.get(`/${id}`);   
        return response.data;
    } catch (error) {
        if(error instanceof Error) {
        console.error(`Error fetching user with id ${id}: ${error.message}`);
        throw error;
        } else {
        console.error(`Error fetching user with id ${id}: ${error}`);
        throw error;
        }
    }
};