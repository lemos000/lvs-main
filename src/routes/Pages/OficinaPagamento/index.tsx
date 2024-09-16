import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { oficinas } from '../Oficinas/Oficinas';

const Container = styled.div`
  background-color: #1E3A8A; // Azul escuro
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #FCD34D; // Amarelo
`;

const PlanContainer = styled.div`
  background-color: #3B82F6; // Azul
  border-radius: 1rem;
  padding: 2rem;
  width: 100%;
  max-width: 400px;
`;

const OfficinaNome = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #FCD34D; // Amarelo
`;

const PrecoSugerido = styled.p`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Problema = styled.p`
  font-size: 1.2rem;
  color: #E5E7EB; // Cinza claro
`;

const BackButton = styled(Link)`
  background-color: #FCD34D; // Amarelo
  color: #1E3A8A; // Azul escuro
  border: none;
  border-radius: 9999px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #F59E0B; // Amarelo mais escuro
  }
`;

const PlanUpgrade = () => {
  const {id} = useParams<{id:string}>();

  return (
    <Container>
      <ContentWrapper>
        <Title>Detalhes do Serviço</Title>
        
        <PlanContainer>
          <OfficinaNome>Oficina  {oficinas[Number(id)]?.nome}</OfficinaNome>
          <PrecoSugerido>Preço Sugerido: R$ 250,00</PrecoSugerido>
          <Problema>Problema: Ainda não definido</Problema>
        </PlanContainer>
      </ContentWrapper>

      <BackButton to="/chatbot/oficinas">
        Voltar ao Chatbot
      </BackButton>
    </Container>
  );
};

export default PlanUpgrade;