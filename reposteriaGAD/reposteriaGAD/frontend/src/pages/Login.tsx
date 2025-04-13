import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 👈 Importamos useNavigate
import styled from 'styled-components';
import { TextField, Button } from '@mui/material';
import axios from 'axios';
import { useAuth } from '../context/AuthContext'; // 👈 Importamos el contexto de autenticación

const LoginContainer = styled.div`
    display: flex;
    height: 100vh;
    background: linear-gradient(135deg, rgb(241, 186, 234), rgb(240, 156, 212));
    justify-content: center;
    align-items: center;
`;

const LoginCard = styled.div`
    display: flex;
    background: white;
    border-radius: 15px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    max-width: 900px;
    width: 100%;
`;

const LoginForm = styled.div`
    flex: 1;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const LoginTitle = styled.h1`
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 20px;
`;

const StyledButton = styled(Button)`
    && {
        background-color: #ff6b6b;
        color: white;
        margin-top: 20px;
        padding: 10px;
        font-size: 1rem;
        border-radius: 5px;
        text-transform: none;

        &:hover {
            background-color: #ff5252;
        }
    }
`;

const LoginImage = styled.div`
    flex: 1;
    background: url('/imagenes/loginfoto.jpg') no-repeat center center;
    background-size: cover;
`;

const Login = () => {
    const [email, setEmail] = useState(''); // Ensure email is empty initially
    const [password, setPassword] = useState(''); // Ensure password is empty initially
    const navigate = useNavigate(); // 👈 Hook para redirigir
    const { login } = useAuth(); // 👈 Usa el contexto para guardar el usuario

    const handleLogin = async () => {
        if (!email || !password) {
            alert('Por favor, completa todos los campos.');
            return;
        }
        console.log('Datos enviados al backend:', { email, password });

        try {
            const response = await axios.post(
                'http://localhost:5005/api/auth/login',
                { email, password },
                { headers: { 'Content-Type': 'application/json' } }
            );

            const userData = response.data; // { token, user: { name, email, ... } }

            // Guardar token y datos del usuario
            localStorage.setItem('token', userData.token);
            login(userData.user); // 👈 Guarda usuario en contexto global

            // Redirigir a Home
            navigate('/Home'); 
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                console.error('Error en el login:', error.response.data);
                alert(error.response.data.message || 'Error al iniciar sesión');
            } else {
                console.error('Error inesperado:', error);
                alert('Error inesperado. Por favor, intenta nuevamente.');
            }
        }
    };

    return (
        <LoginContainer>
            <LoginCard>
                <LoginForm>
                    <LoginTitle>Iniciar Sesión</LoginTitle>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Correo Electrónico"
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Contraseña"
                        type="password"
                        variant="outlined"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <StyledButton variant="contained" fullWidth onClick={handleLogin}>
                        Ingresar
                    </StyledButton>
                </LoginForm>
                <LoginImage />
            </LoginCard>
        </LoginContainer>
    );
};

export default Login;
