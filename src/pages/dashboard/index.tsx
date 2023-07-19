import React, {useContext, useEffect, useState} from 'react';
import './style';
import { Container } from '../../styles/GlobalStyled';
import { AuthContext } from '../../contexts/auth/AuthContext';

const Dashboard = () => {

    const auth = useContext(AuthContext);

    return (
        <Container>
            <h1>Olá {auth.user?.name}, seja bem-vindo!</h1>
        </Container>
    );
}

export default Dashboard;