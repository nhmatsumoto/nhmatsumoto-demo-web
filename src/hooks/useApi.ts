import axios from 'axios';

const api = axios.create({
    baseURL: 'https://localhost:7199/api/',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
    }
})

export const useApi = () => ({

    validateToken: async (token: string) => {
        try {

            const response = await api.post('auth/validate',{ token });
            return response;

        }catch(error){
            console.log("useApi ValidateToken", error);
        }
    },
    refresh: async (token: string) => {

    },
    signin: async (email: string, senha: string) => {

        try {
            const response = await api.post('auth/signin', { email, senha });
            if(response) {
                return response.data;
            }
        }catch
        {
            throw new Error('Erro ao tentar efetuar login');
        }
       
    },
    signout: async (email: string, refreshToken: string) => {
        const response = await api.post('auth/signout', { Email: email, RefreshToken: refreshToken });

        if(response) {
            return response.data;
        }
        
        return response;

    }
});