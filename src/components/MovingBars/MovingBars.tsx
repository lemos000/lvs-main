import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ScrollContainer = styled.div`
  display: flex;
  overflow: hidden;
  white-space: nowrap;
  padding: 1rem;
  width: 99.1vw;
  scroll-behavior: smooth;
`;

const PhraseBox = styled(Link)`
  display: inline-block;
  background-color: #F1B82D; // amarelo
  color: black;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  padding: 1rem;
  margin: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #94a3b8; // Aproximação de blue-gray-200
  }
`;

export default function ScrollableBars() {
    const containerRef = useRef<HTMLDivElement>(null);
    const phrases = [
        "Agende uma revisão para meu carro usando IA",
        "Peça à IA para diagnosticar problemas no motor",
        "Descubra dicas para economizar combustível",
        "Configure alertas de manutenção automotiva",
        "Use IA para encontrar as melhores oficinas na área",
        "Automatize o agendamento de trocas de óleo",
        "Receba notificações sobre recalls de veículos",
        "Obtenha sugestões de melhorias para o desempenho do carro",
        "Use IA para calcular o valor de revenda do meu carro",
        "Saiba como a IA pode ajudar na segurança automotiva",
        "Descubra tendências de tecnologia automotiva com IA"
    ];
    const duplicatedPhrases = [...phrases, ...phrases];

    useEffect(() => {
        const container = containerRef.current;
        let scrollAmount = 0;

        const scrollInterval = setInterval(() => {
            if (container) {
                scrollAmount += 1; // Ajuste a velocidade conforme necessário
                container.scrollLeft = scrollAmount;

                if (scrollAmount >= container.scrollWidth / 2) {
                    scrollAmount = 0;
                }
            }
        }, 50);

        return () => clearInterval(scrollInterval);
    }, []);

    return (
        <ScrollContainer ref={containerRef}>
            {duplicatedPhrases.map((phrase, index) => (
                <PhraseBox to="/chatbot" key={index}>
                    {phrase} &rarr;
                </PhraseBox>
            ))}
        </ScrollContainer>
    );
}