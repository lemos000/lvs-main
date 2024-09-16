import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from 'styled-components';
import Logo from "../../assets/logo.svg";
import { endpointsHome } from "../../endpoints";
import { BiArrowFromLeft, BiUser, BiMenu } from "react-icons/bi";


const HeaderContainer = styled.header`
  padding: 1rem;
  background-color: #00163e; // azulEscuro
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const LogoImage = styled.img`
  height: 3.5rem;
  @media (min-width: 640px) {
    height: 7rem;
  }
`;

const MenuButton = styled.button`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    display: none;
  }
`;

const MenuIcon = styled(BiMenu)`
  width: 1.5rem;
  height: 1.5rem;
`;

const NavDesktop = styled.nav`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    color: white;
    font-weight: bold;
    gap: 1rem;
    align-items: center;
    font-size: 1.4rem;
    gap: 4rem;
  }
`;

const NavLink = styled(Link)`
  &:hover {
    color: #F1B82D; // amarelo
    transition: all 0.2s ease-in-out;
  }
`;

const GoatLink = styled(Link)`
  z-index: 30;
  display: flex;
  align-items: center;
  background-color: white;
  color: black;
  font-weight: bold;
  border-radius: 1rem;
  padding: 0.5rem;
  margin: 0.5rem;
  transition: all 0.2s ease-in-out;
  position: relative;
  &:hover {
    color: #F1B82D; // amarelo
    background-color: #111827;
  }
`;



const UserMenuButton = styled.button`
  color: white;
`;

const UserMenu = styled.div`
  z-index: 50;
  position: absolute;
  right: 30px;
  margin-top: 0.5rem;
  width: 12rem;
  background-color: white;
  color: black;
  border-radius: 0.25rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);

`;

const UserName = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #e5e7eb;
`;

const LogoutButton = styled.button`
  width: 100%;
  text-align: left;
  padding: 1rem;
  &:hover {
    background-color: #e5e7eb;
  }
`;

const MobileMenu = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  z-index:30;
  right: 0;
  height: 100%;
  width: 50%;
  background: linear-gradient(to left, #00163e, #0f172a);
  color: white;
  transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s;
  @media (min-width: 768px) {
    display: none;
  }
`;

const CloseButton = styled.button`
  color: white;
  padding: 1rem;
`;

const NavMobile = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

const MobileLink = styled(Link)`
  &:active {
    background-color: #60a5fa;
  }
`;

const UserPerfil = styled(BiUser)`
  width: 2rem;
  margin: 1rem;
  height: auto;
  @media (max-width: 768px){
    width: 1.3rem;
  }
`

export default function Header(props: { nameProps: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/login");
  };

  const userName = props.nameProps;

  return (
    <HeaderContainer>
      <LogoImage src={Logo} alt="Logo da LVS" />

      <MenuButton onClick={() => setIsMenuOpen(true)}>
        <MenuIcon />
      </MenuButton>

      <NavDesktop>
        {endpointsHome.map((endpoint, index) => (
          <NavLink key={index} to={endpoint.caminho}>
            {endpoint.nome}
          </NavLink>
        ))}
        <GoatLink
          to={'/chatbot'}

        >
          Goat by LVS
        </GoatLink>  
       
      </NavDesktop>

      <div>
        <UserMenuButton onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}>
          <UserPerfil />
        </UserMenuButton>

        {isUserMenuOpen && (
          <UserMenu>
            <UserName>{userName}</UserName>
            <LogoutButton onClick={handleLogout}>
              Sair
            </LogoutButton>
          </UserMenu>
        )}
      </div>

      <MobileMenu isOpen={isMenuOpen}>
        <CloseButton onClick={() => setIsMenuOpen(false)}>
          <BiArrowFromLeft className="h-12" />
        </CloseButton>
        <NavMobile>
          {endpointsHome.map((endpoint, index) => (
            <MobileLink key={index} to={endpoint.caminho}>
              {endpoint.nome}
            </MobileLink>
          ))}
          <MobileLink
            to={"/chatbot"}
          >
            Goat by LVS
             </MobileLink>
        </NavMobile>
      </MobileMenu>
    </HeaderContainer>
  );
}