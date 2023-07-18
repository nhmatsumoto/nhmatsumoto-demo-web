import axios from 'axios';

const api = axios.create({
    baseURL: ' http://localhost:5247/api/'
})

export const useApi = () => ({

    validateToken: async (token: string) => {
        try {

            const headers = {
                'Content-Type': 'application/json',
            };

            const response = await api.post('auth/validate',{ token }, { headers });

            if(response) {
                return response.data;
            }
        }catch(error){
            console.log(error);
        }
    },
    refresh: async (token: string) => {

    },
    signin: async (email: string, senha: string) => {

        const headers = {
            'Content-Type': 'application/json', 
        };

        try {

            const response = await api.post('auth/signin', { email, senha }, { headers });

            if(response) {
                return response.data;
            }
        }catch
        {
            throw new Error('Erro ao tentar efetuar login');
        }
       
    },
    signout: async (email: string, refreshToken: string) => {

        const headers = {
            'Content-Type': 'application/json', 
        };

        const response = await api.post('auth/signout', { Email: email, RefreshToken: refreshToken }, { headers });

        if(response) {
            return response.data;
        }
        
        return response;

    }
});