import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../assets/logo.png';
import backgroundImage from '../../assets/background-lvs.png';


const Card = styled.div`
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

const BackgroundImage = styled.div`
  display: none;
  width: 50%;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;

  @media (min-width: 1024px) {
    display: block;
  }
`;

const FormContainer = styled.div`
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

const LogoImage = styled.img`
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

const StyledForm = styled.form`
  width: 100%;
  max-width: 20rem;

  @media (min-width: 1024px) {
    max-width: 24rem;
  }
`;

const InputContainer = styled.div`
  margin-bottom: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.25rem;
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
`;

const SignUpButton = styled.button`
  background-color: #FFC107;
  color: black;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  transition: background-color 0.15s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #3b82f6;
  }
`;

const BackButton = styled.button`
  background-color: #6B7280;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  transition: background-color 0.15s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #4B5563;
  }
`;

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  function handleSignUp(event: React.FormEvent) {
    event.preventDefault();

    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (user.email === email) {
        setErrorMessage('Usuário já cadastrado!');
        return;
      }
    }
    if (!email || !name || !password){
      setErrorMessage("Preencha os campos necessários")
      return
    }
    
    localStorage.setItem('user', JSON.stringify({ name, email, password }));
    console.log('Usuário cadastrado!');
    navigate('/login');
  }

  return (
      <Card>
        <BackgroundImage />
        <FormContainer>
          <LogoImage src={Logo} alt="Logo da LVS" />
          <Title>Crie sua conta</Title>
          <StyledForm onSubmit={handleSignUp}>
            <InputContainer>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Insira seu nome"
              />
            </InputContainer>
            <InputContainer>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Insira seu email"
              />
            </InputContainer>
            <InputContainer>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Insira sua senha"
              />
            </InputContainer>
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            <ButtonContainer>
              <SignUpButton type="submit">Sign Up</SignUpButton>
              <BackButton type="button" onClick={() => navigate('/login')}>Voltar</BackButton>
            </ButtonContainer>
          </StyledForm>
        </FormContainer>
      </Card>
    );
}