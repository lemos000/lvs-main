import { useState } from 'react';
import styled from 'styled-components';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { oficinas } from './Oficinas';
const Container = styled.div`
  padding: 20px;
  background-color: #000000;
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  background-color: #00163e;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.09s ease-in;
  &:hover {
    background-color: #f1b82d;
    cursor: pointer;
  }
`;

const Image = styled.div`
  width: 50px;
  height: 50px;
  background-color: #ffbb00;
  border-radius: 50%;
  margin-right: 15px;
`;

const Info = styled(Link)`
  flex: 1;
`;

const Title = styled.h2`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
`;

const Details = styled.div`
  font-size: 14px;
  color: #666;
  margin-top: 5px;
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

const Status = styled.span<{ status: string }>`
  font-size: 14px;
  color: ${props => (props.status === 'Aberto' ? 'green' : 'red')};
`;

const HeartIcon = styled(FaHeart)<{ favorited: boolean }>`
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: ${props => (props.favorited ? 'red' : '#ccc')};
`;


export default function Oficinas() {
  const [favorites, setFavorites] = useState<{ [key: number]: boolean }>({});

  const toggleFavorite = (index: number) => {
    setFavorites(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };



  return (
    <Container>
      {oficinas.map((oficina, index) => (
        <ListItem key={index}>
          <Image />
          <Info to={`/payment/${index}`}>
            <Title>{oficina.nome}</Title>
            <Details>{oficina.localizacao} • {oficina.contato}</Details>
            <Status status={oficina.status}>{oficina.status}</Status>
          </Info>
          <HeartIcon
            favorited={favorites[index] || false}
            onClick={() => toggleFavorite(index)}
          />
        </ListItem>
      ))}
    </Container>
  );
}