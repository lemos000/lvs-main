import styled from 'styled-components';
import Mecanico from "../../../assets/mecanico.jpg";
import Carrosel from "../../../components/Carousel/Carousel";
import MovingBars from "../../../components/MovingBars/MovingBars";
import { Link } from 'react-router-dom';

const HomeContainer = styled.div`
  background-color: #00163e; // azulEscuro
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

const HeroSection = styled.div`
  position: relative;
  width: 100%;
  @media (min-width: 1024px) {
    height: 40rem;
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: black;
  opacity: 0.75;
  z-index: 10;
`;

const HeroContent = styled.div`
  position: relative;
  background-image: url(${'https://i.ibb.co/2yY3f95/mecanico.jpg'});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HeroTitle = styled.p`
  font-family: 'Oswald', sans-serif;
  position: relative;
  z-index: 20;
  color: white;
  padding: 1rem;
  font-size: 3rem;
  @media (min-width: 640px) {
    font-size: 3rem;
  }
  @media (min-width: 768px) {
    font-size: 4.5rem;
  }
  @media (min-width: 1024px) {
    font-size: 6rem;
  }
`;

const HeroContentInner = styled.div`
  z-index: 20;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BotName = styled.h1`
  font-family: 'Oswald', sans-serif;
  font-size: 2.25rem;
  color: white;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
  @media (min-width: 768px) {
    font-size: 3rem;
  }
  @media (min-width: 1024px) {
    font-size: 3.75rem;
  }
`;

const BotDescription = styled.p`
  text-align: center;
  color: white;
  font-size: 1.125rem;
  margin: 2rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const PrimaryButton = styled(Link)`
  background-color: #F1B82D;
  color: black;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  &:hover {
    background-color: #94a3b8; 
    transition: background-color 0.3s ease;
  }
  @media (max-width: 768px){
    font-size: .8rem;
    padding: .3rem;
    margin: 1rem;
    width: 30%;
  }
`;

const SecondaryButton = styled.button`
  color: white;
  font-weight: 500;
  padding: 0.5rem 1rem;
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 768px){
    font-size: .8rem;
    padding: .3rem;
    margin: 1rem;
    width: 30%;
  }
`;

const CarouselWrapper = styled.div`
  width: 70%;
  padding: 1rem;
  @media (max-width: 1024px){
    padding: 0;
    width: 100%;
  }
`;

export default function Home() {
  return (
    <HomeContainer>
      <HeroSection>
        <Overlay />
        <HeroContent>
          <HeroTitle>
            Agilize seu atendimento automotivo!
          </HeroTitle>
          <HeroContentInner>
            <BotName>
              GOAT by LVS
            </BotName>
            <BotDescription>
              Inicie o chatbot agora!
            </BotDescription>
            <ButtonContainer>
              <PrimaryButton to="/chatbot">
                Iniciar atendimento &rarr;
              </PrimaryButton>
              <SecondaryButton>
                Conheça a LVS &rarr;
              </SecondaryButton>
            </ButtonContainer>
          </HeroContentInner>
        </HeroContent>
      </HeroSection>
      <MovingBars />
      <CarouselWrapper>
        <Carrosel />
      </CarouselWrapper>
    </HomeContainer>
  );
}