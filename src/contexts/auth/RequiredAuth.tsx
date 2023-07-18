import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import Login from "../../pages/login";
import { redirect } from "react-router-dom";

export const RequiredAuth = ({ children } : { children: JSX.Element }) => {

    const auth = useContext(AuthContext);

    if(!auth.user) {
        return <Login/>;
    }

    return children;
}