import { Link } from "react-router-dom";
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #f3f4f6;
  color: #374151;
  padding: 2.5rem 0;
`;

const FooterContent = styled.div`
  max-width: 72rem;
  margin: 0 auto;
  padding: 0 1rem;
`;

const SubscriptionSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const SubscriptionText = styled.div`
  text-align: center;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    text-align: left;
    margin-bottom: 0;
  }
`;

const SubscriptionTitle = styled.h2`
  font-weight: bold;
  font-size: 1.125rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
`;

const SecondaryButton = styled(Button)`
  background-color: #e5e7eb;
  color: #374151;
`;

const PrimaryButton = styled(Button)`
  background-color: #3b82f6;
  color: white;
`;

const LinksSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const LinkGroup = styled.div``;

const LinkGroupTitle = styled.h3`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const LinkList = styled.ul``;

const StyledLink = styled(Link)`
  &:hover {
    text-decoration: underline;
  }
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #e5e7eb;
  padding-top: 1rem;
`;

const Copyright = styled.p``;

const LegalLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <SubscriptionSection>
          <SubscriptionText>
            <SubscriptionTitle>Assine o plano Premium agora!</SubscriptionTitle>
            <p>Assine o LVS premium e tenha exclusividade na procura de oficinas</p>
          </SubscriptionText>
          <ButtonGroup>
            <SecondaryButton>Saiba mais</SecondaryButton>
            <PrimaryButton>Assinar</PrimaryButton>
          </ButtonGroup>
        </SubscriptionSection>
        
        <LinksSection>
          <LinkGroup>
            <LinkGroupTitle>Empresa</LinkGroupTitle>
            <LinkList>
              <li><StyledLink target="_blank" to="#">Projeto LVS</StyledLink></li>
              <li><StyledLink target="_blank" to="#">Sobre nós</StyledLink></li>
              <li><StyledLink target="_blank" to="#">Fiap</StyledLink></li>
            </LinkList>
          </LinkGroup>
          <LinkGroup>
            <LinkGroupTitle>Social</LinkGroupTitle>
            <LinkList>
              <li><StyledLink target="_blank" to="">Gmail</StyledLink></li>
              <li><StyledLink target="_blank" to="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Youtube</StyledLink></li>
              <li><StyledLink target="_blank" to="https://github.com/lemos000">GitHub</StyledLink></li>
            </LinkList>
          </LinkGroup>
        </LinksSection>
        
        <BottomSection>
          <Copyright>© 2023 LVS ltda. All rights reserved.</Copyright>
          <LegalLinks>
            <StyledLink to="#">Terms</StyledLink>
            <StyledLink to="#">Privacy</StyledLink>
            <StyledLink to="#">Cookies</StyledLink>
          </LegalLinks>
        </BottomSection>
      </FooterContent>
    </FooterContainer>
  );
}