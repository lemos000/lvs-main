import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #00163e; // azulEscuro
  width: 100%;
  height: 100%;
  color: white;
  padding: 2rem;
`;

const Title = styled.h2`
  font-size: 1.875rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
`;

const StyledSwiper = styled(Swiper)`
  width: 95%;
`;

const SlideContent = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.25rem;
  margin: 1.25rem;
`;

const Card = styled.div`
  flex: none;
  padding: 1.5rem;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  min-height: 22rem;
  width: 100%;
  max-width: 24rem;
  text-align: center;
  border: 1px solid #e5e7eb;
  margin: 1.5rem;
  color: black;
`;

const Icon = styled.div`
  font-size: 2.25rem;
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const CardDescription = styled.p`
  color: #4B5563;
  margin-bottom: 1rem;
`;

export default function Carrosel() {
  const items = [
    { icon: '🤖', title: 'IA', description: 'O LVSBot te ajuda a gerar diagnósticos precisos e rápidos sobre o problema automotivo, agilizando seu atendimento' },
    { icon: '🏃‍♀️', title: 'Velocidade', description: 'O LVSBot diagnostica o problema relatado e já distribui seu pedido para as diversas oficinas na sua região' },
    { icon: '🤳', title: 'Facilidade', description: 'O LVSBot está a apenas um clique de distância, disponível no seu celular, tablet ou computador' },
    { icon: '🔧', title: 'Confiabilidade', description: 'O LVSBot oferece soluções confiáveis baseadas em dados reais e atualizados.' },
    { icon: '🔍', title: 'Diagnóstico Avançado', description: 'O LVSBot utiliza algoritmos avançados para identificar problemas complexos em veículos, garantindo precisão nos diagnósticos.' },
    { icon: '🌐', title: 'Conectividade', description: 'O LVSBot integra-se com diversos sistemas e dispositivos, oferecendo uma experiência de usuário fluida e conectada.' },
    { icon: '💡', title: 'Inovação', description: 'Sempre à frente, o LVSBot incorpora as mais recentes tecnologias para oferecer soluções inovadoras no mercado automotivo.' },
    { icon: '🔒', title: 'Segurança', description: 'Com protocolos de segurança robustos, o LVSBot protege seus dados e garante a confidencialidade das informações.' },
  ];

  return (
    <CarouselContainer>
      <Title>Coloque o LVSBot pra trabalhar para você!</Title>
      <StyledSwiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1.5,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 2,
          },
          1440: {
            slidesPerView: 3 ,
          },
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <SlideContent>
              <Card>
                <Icon>{item.icon}</Icon>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </Card>
            </SlideContent>
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </CarouselContainer>
  );
}