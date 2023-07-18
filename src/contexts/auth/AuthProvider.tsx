import { useEffect, useState } from "react";
import { User } from "../../types/user";
import { useApi } from "../../hooks/useApi";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children } : { children: JSX.Element | JSX.Element[]}) => {

    const [user, setUser] = useState<User | null>(null);
    const api = useApi();

    useEffect( () => {

        const validateToken = async () => {

            const token = localStorage.getItem('nhm-demo-web-app-token');

            if(token)
            {
                try {
                    const data = await api.validateToken(token);
                
                    console.log(data);
                }catch(error) {
                    console.log(error);
                }
            }
        }

        validateToken();
    }, [api])


    const signin = async (email: string, senha: string) => {

        const data = await api.signin(email, senha);

        if(data.user && data.accessToken)
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
        localStorage.setItem('nhm-demo-web-app-token', JSON.stringify(token));
    }

    return (
        <AuthContext.Provider value={{ user, signin, signout }}>
            {children}
        </AuthContext.Provider>
    );   
}