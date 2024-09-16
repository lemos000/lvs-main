import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { FaChevronLeft, FaBars, FaTimes } from 'react-icons/fa';
import { BsBoxSeam } from 'react-icons/bs';
import styled from 'styled-components';
import Goat from "../../../assets/theGoat.png";

const ChatbotContainer = styled.div`
  background-color: #00163e;
  min-height: 100vh;
  color: #3b82f6;
  display: flex;
`;

const MainContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  background-color: #00163e;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const HeaderTitle = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  border-radius: 2rem;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const HeaderIcon = styled.img`
  width: 5rem;
  height: 5rem;
  margin-right: 0.5rem;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const HeaderText = styled.h1`
  font-weight: 800;
  font-size: 1.5rem;
  color: #F1B82D;
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #F1B82D;
  font-size: 1.5rem;
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);

  @media (max-width: 768px) {
    display: block;
  }
`;

const Sidebar = styled.div<{ isOpen: boolean }>`
  width: 300px;
  background-color: #001e4d;
  padding: 1rem;
  overflow-y: auto;
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(-100%)'};
    z-index: 1000;
  }
`;

const SidebarTitle = styled.h2`
  color: #F1B82D;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
`;

const WorkshopList = styled.ul`
  list-style-type: none;
  padding: 0;
  flex-grow: 1;
`;

const WorkshopItem = styled(Link)`
  display: block;
  margin-bottom: 1rem;
  padding: 0.75rem;
  background-color: #002a6e;
  border-radius: 0.5rem;
  color: #ffffff;
  font-size: 0.9rem;
  text-decoration: none;
  transition: background-color 0.2s;

  &:hover {
    background-color: #003a9e;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: auto;
  padding-top: 1rem;
`;

const SidebarButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem;
  background-color: #F1B82D;
  color: #00163e;
  text-decoration: none;
  border-radius: 0.5rem;
  font-weight: bold;
  transition: background-color 0.2s;

  &:hover {
    background-color: #e0a81d;
  }
`;

const CloseButton = styled.button`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem;
    background-color: #3b82f6;
    color: #ffffff;
    border: none;
    border-radius: 0.5rem;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.2s;
    &:hover {
      background-color: #2563eb;
    }
  }
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #3b82f6;
  padding: 0.7rem;

`;

const StyledLink = styled(Link)<{ isActive: boolean }>`
  margin: 0 1rem;
  padding: 0.5rem;
  color: #ffffff;
  text-decoration: none;
  font-weight: ${(props) => (props.isActive ? 'bold' : 'normal')};
  


  @media (max-width: 768px){
    font-size: small;
  }

  


`;

const OutletContainer = styled.div`
  flex-grow: 1;
  padding: 1rem;
  background-color: #00163e;
  height: 100%;

  

`;

export default function Chatbot() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <ChatbotContainer>
      <Sidebar isOpen={isSidebarOpen}>
        <SidebarTitle>
          <BsBoxSeam style={{ marginRight: '0.5rem' }} />
          Oficinas Sugeridas
        </SidebarTitle>
        <WorkshopList>
          <WorkshopItem to="/payment/0">Oficina A - R$ 100,00</WorkshopItem>
          <WorkshopItem to="/payment/1">Oficina B - R$ 150,00</WorkshopItem>
          <WorkshopItem to="/payment/2">Oficina C - R$ 200,00</WorkshopItem>
        </WorkshopList>
        <ButtonContainer>
          <SidebarButton to="/principal/home">
            <FaChevronLeft style={{ marginRight: '0.5rem' }} />
            Voltar à página principal
          </SidebarButton>
          <CloseButton onClick={toggleSidebar}>
            <FaTimes style={{ marginRight: '0.5rem' }} />
            Fechar
          </CloseButton>
        </ButtonContainer>
      </Sidebar>
      <MainContent>
        <Header>
          <MenuButton onClick={toggleSidebar}>
            <FaBars />
          </MenuButton>
          <HeaderTitle>
            <HeaderText>Goat by LVS</HeaderText>
          </HeaderTitle>
          <HeaderIcon src={Goat} alt="LVS Logo" />
        </Header>
        <LinkContainer>
          <StyledLink to="/chatbot/bot" isActive={location.pathname === '/chatbot/bot'}>
            Chat
          </StyledLink>
          <StyledLink to="/chatbot/oficinas" isActive={location.pathname === '/chatbot/oficinas'}>
            Oficinas
          </StyledLink>
        </LinkContainer>
        <OutletContainer>
          <Outlet />
        </OutletContainer>
      </MainContent>
    </ChatbotContainer>
  );
}