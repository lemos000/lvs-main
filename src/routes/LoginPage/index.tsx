import React, {  useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../assets/logo.png';
import backgroundImage from '../../assets/background-lvs.png';


const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 200rem;
  height: 100vh;
  background-color: white;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: 0.5rem;
  overflow: hidden;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2rem;

  @media (min-width: 1024px) {
    width: 50%;
  }
`;

const StyledLogo = styled.img`
  margin-bottom: 2rem;
  width: 6rem;

  @media (min-width: 1024px) {
    width: 8rem;
  }
`;

const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

const Form = styled.form`
  width: 100%;
  max-width: 20rem;

  @media (min-width: 1024px) {
    max-width: 24rem;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.25rem;
  margin-bottom: 1rem;
  transition: border-color 0.15s ease-in-out;

  &:focus {
    outline: none;
    border-color: #3b82f6;
  }
`;

const ErrorMessage = styled.p`
  color: #ef4444;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  background-color: #3b82f6;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  transition: background-color 0.15s ease-in-out;

  &:hover {
    background-color: #2563eb;
  }
`;

const ImageSection = styled.div`
  display: none;
  width: 100%;
  background-image: url(${backgroundImage});
  background-size: cover;

  @media (min-width: 1024px) {
    display: block;
    width: 50%;
  }
`;

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  function handleLogin(event: React.FormEvent) {
    event.preventDefault();

    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (user.email === email && user.password === password) {
        console.log('Usuário autenticado!');
        navigate('/principal/home');
      } else {
        setErrorMessage('Email ou senha incorretos!');
      }
    } else {
      setErrorMessage('Usuário não cadastrado!');
    }
  }

  return (
      <LoginContainer>
        <FormSection>
          <StyledLogo src={Logo} alt="Logo da LVS" />
          <Title>Acesse <strong>sua conta</strong></Title>
          <Form onSubmit={handleLogin}>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Insira seu email"
            />
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Insira sua senha"
            />
            <p>Não tem um usuário? <Link style={{color: '#70a2ff'}} to="/signup">Inscreva-se agora</Link></p>
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            <Button type="submit">Login</Button>
          </Form>
        </FormSection>
        <ImageSection />
      </LoginContainer>
      );
}