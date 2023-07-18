import React, { HtmlHTMLAttributes, useContext, useState }  from 'react';
import { Container } from '../../styles/GlobalStyled';
import { AuthContext } from '../../contexts/auth/AuthContext';
import { redirect } from 'react-router-dom';

const Login = () => {
  
    const auth = useContext(AuthContext);


    const [successMessage, setSuccessMessage] = useState(false);
    const [hiddenForm, setHiddenForm] = useState(false);

    const [email, setEmail] = useState('joao@example.com');
    const [senha, setSenha] = useState('senha123');

    const handleLogin = async (event :any ) => {

        event.preventDefault();

        if(email && senha) {
            const isLoggedIn = await auth.signin(email, senha);

            return redirect('/home');
        }
    }

    return (
        <Container>
            <span hidden={!successMessage}>Login efetuado</span>
          
            <form onSubmit={handleLogin} hidden={hiddenForm}>
                <label>Email</label><br/>
                <input value={email} onChange={(e) => setEmail(e.target.value)} /><br/>

                <label>Password</label><br/>
                <input value={senha} onChange={(e) => setSenha(e.target.value)} /><br/>

                <button name={'login'} type="submit">Login</button>
            </form>
    
         </Container>
    );
}

export default Login;