import axios from 'axios';
import { AuthClient } from '../contexts/auth/AuthClient';

const client = new AuthClient();

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
            
            
            const response = await client.validate(token);
            
            return response;

        }catch(error){
            console.log("useApi ValidateToken", error);
        }
    },
    refresh: async (token: string) => {

    },
    signin: async (email: string, senha: string) => {

        try {
            const response = await client.signin({email, senha});

            if(response) {
                return response;
            }
        }catch
        {
            throw new Error('Erro ao tentar efetuar login');
        }
       
    },
    signout: async (email: string, refreshToken: string) => {
        
        

    }
});