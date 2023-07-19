import { AuthClient, LoginRequestDTO, RefreshRequestDTO } from '../contexts/auth/AuthClient';
import { LogoutDTO } from '../types/authClient';

const client = new AuthClient();

export const useApi = () => ({
    
    validate: async (token: string) => {

        try {
            const response = await client.validate(token);
            return response;

        }catch(error)
        {
            throw new Error('Erro ao validar token');
        }

    },
    
    refresh: async (request: RefreshRequestDTO) => {

        try {
            const response = await client.refresh(request);

            if(response)
            {
                return response;
            }

        }catch(error) 
        {
            throw new Error('Erro ao atualizar token');
        }
    },

    signin: async (request: LoginRequestDTO) => {

        try {
            const response = await client.signin(request);

            if(response) {
                return response;
            }
        }catch(error)
        {
            throw new Error('Erro processar solicitação de login');
        }
       
    },

    signout: async (request: LogoutDTO) => {

        try {
            const response = await client.signout(request);

            if(response)
            {
                return response;
            }
        }catch(error) 
        {
            throw new Error('Erro ao tentar efetuar logout');
        }
    }
});