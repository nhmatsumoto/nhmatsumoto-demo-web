import { useContext, useEffect, useState } from "react";
import { User } from "../../types/user";
import { useApi } from "../../hooks/useApi";
import { AuthContext } from "./AuthContext";
import { LoginRequestDTO, LogoutRequestDTO } from "./AuthClient";
import { UsuarioDTO } from "../../types/authClient";


export const AuthProvider = ({ children } : { children: JSX.Element | JSX.Element[]}) => {

    const [user, setUser] = useState<UsuarioDTO | null>(null);

    const api = useContext(AuthContext);

    useEffect( () => {

        const validateToken = async () => {

            const storageData = localStorage.getItem('nhm-demo-web-app-token');

            if(storageData)
            {
                try {
                    //retornar usuário?
                    //passa token retorna usuário?
                    const data = await validate(storageData);

                    return data;
                
                }catch(error) {
                    throw new Error('Erro ao validar token');
                }
            }
        }

        validateToken();
    }, [api]);


    const signin = async (email: string, senha: string) => {

        
        const data = await api.signin(email, senha);

            if(data?.user && data.accessToken)
            {
                setUser(data.user);
                setToken(data.accessToken);
                return data;
            }
    }

    const signout = (request: LogoutRequestDTO) => {
        
    }

    const validate = async(token: string) => {

        const data = await api.validate(token);

        if(data)
            return data;

        return data;
    }

    const setToken = (token: string) => {
        localStorage.setItem('nhm-demo-web-app-token', token);
    }

    return (
        <AuthContext.Provider value={{ user, signin, signout, validate }}>
            {children}
        </AuthContext.Provider>
    );   
}