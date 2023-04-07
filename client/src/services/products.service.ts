import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_PRODUCT_SERVICE_URL,
});

export const getProducts = async () => {
    try {
        const response = await api.get('/');
        return response.data;
    } catch (error) {
        if(error instanceof Error) {
        console.error(`Error fetching products: ${error.message}`);
        throw error;
        } else {
        console.error(`Error fetching products: ${error}`);
        throw error;
        }
    }
};

export const getProduct = async (id: string) => {
    
};

export const createProduct = async (product: any) => {
    const response = await api.post('/', product);
    return response.data;
}

export const updateProduct = async (id: string, product: any) => {
    const response = await api.put(`/${id}`, product);
    return response.data;
}

export const deleteProduct = async (id: string) => {
    const response = await api.delete(`/${id}`);
    return response.data;
}

export const getCategories = async () => {
    const response = await api.get('/categories');
    console.log(response.data)
    return response.data;
}