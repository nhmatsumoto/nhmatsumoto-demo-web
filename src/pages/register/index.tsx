import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {  RegisterTitle } from './style';
import { Container } from '../../styles/GlobalStyled';

interface UserRegister {
    name: string,
    email: string, 
    dataNascimento: string,
    senha: string,
    confirmaSenha: string
}

const Register = () => {

    const [formData, setFormData] = useState<UserRegister>({
        name: '',
        email: '',
        dataNascimento: '',
        senha: '',
        confirmaSenha: '',
    }) ;
    
    const handleFormSubmit = (e : React.FormEvent) => {
        e.preventDefault();
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      };

    return (
        <Container>
            <RegisterTitle>Register</RegisterTitle>
            
            <form onClick={handleFormSubmit}>
                <div>
                    <label>Nome:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                    <label>Data de Nascimento:</label>
                    <input
                        type="text"
                        name="dataNascimento"
                        value={formData.dataNascimento}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Senha:</label>
                    <input type="password" name="senha" value={formData.senha} onChange={handleChange} required /> 
                </div>
                <div>
                    <label>Confirmação de Senha:</label>
                    <input
                        type="password"
                        name="confirmaSenha"
                        value={formData.confirmaSenha}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Cadastrar</button>
            </form>
            <Link to={`/home`}>Home</Link>
        </Container>
    );
}

export default Register;