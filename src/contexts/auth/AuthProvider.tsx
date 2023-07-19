import { useEffect, useState } from "react";
import { User } from "../../types/user";
import { useApi } from "../../hooks/useApi";
import { AuthContext } from "./AuthContext";
import { LoginRequestDTO } from "./AuthClient";
import { UsuarioDTO } from "../../types/authClient";

export const AuthProvider = ({ children } : { children: JSX.Element | JSX.Element[]}) => {

    const [user, setUser] = useState<UsuarioDTO | null>(null);
    const api = useApi();

    useEffect( () => {

        const validateToken = async () => {

            const token = localStorage.getItem('nhm-demo-web-app-token');

            if(token)
            {
                try {
                    
                    const data = await validate(token);
                
                    console.log('AuthProvider validate token ', data);
                }catch(error) {
                    console.log("AuthProvider validateToken", error);
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
            return true;
        }

        return false;
    }

    const signout = () => {
        
    }

    const validate = async(token: string) => {

        const data = await api.validateToken(token);

        if(data)
            return true;

        return false;
    }

    const setToken = (token : string) => {
        localStorage.setItem('nhm-demo-web-app-token', token);
    }

    return (
        <AuthContext.Provider value={{ user, signin, signout }}>
            {children}
        </AuthContext.Provider>
    );   
}