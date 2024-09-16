import Time from "../../../assets/time.jpg"
import styled from "styled-components"
import Lavinia from "../../../assets/lavinia.jpeg"
import Lemos from "../../../assets/lemos.jpg"
import Samuel from "../../../assets/samuel.png"

const PageAbout = styled.div`
    background-color: #00112e;
    padding: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    @media (max-width: 768px){
        padding: 0.2rem

    }
`
const AboutTitle = styled.h1`
    color: #ffffff;
    font-weight: 800;
    font-family: "Oswald";
    font-size: 10rem;
    @media (max-width: 768px){
        font-size: 4rem;
    }

`

const AboutSection = styled.div`
    display: flex;
    margin-top: 8rem;
    background-color: #00050e;
    width: 90%;
    @media (max-width:1024px){
        flex-direction: column;
    }


`
const SectionTitle = styled.h2`
    color: white;
    font-size:3rem;
    font-weight: 700;
`

const SubtitleDaSilva = styled.p`
    width: 60%;
    color: white;
    font-size: 1.3rem;
    @media (max-width: 768px){
        font-size: .8rem;
    }

`
const SectionImage = styled.img`
    width: 50%;
    @media (max-width:1024px){
        width: 100%;
    }
    height: auto;
`

const SectionDescription = styled.p`
    text-align: left;
    color: #fff;
    padding: 3rem;
    font-size: 1.2rem;
    @media (max-width:768px){
        font-size: .9rem;
        padding: .3rem;
    }
    @media (max-width:1440px){
        font-size: .9rem;
        padding: .3rem;
    }

`
const CardIntegrante = styled.div`
    background-color: rgb(0,0,0,0.6);
    width: 90%;
    display: flex;
    margin: 5rem;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 1024px){
        flex-direction: column;
        padding: 1rem;
    }

`
const CardIntegrante2 = styled.div`
    background-color: rgb(0,0,0,0.6);
    width: 90%;
    display: flex;
    margin: 5rem;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 1024px){
        flex-direction: column-reverse;
        padding: 1rem;
    }

`
const IntegranteImg = styled.img`
    width: 40%;
    @media (max-width: 1024px){
        width: 20rem;
        border-radius: 8px;
        border: 2px solid #705000;
    }

`
const TurmaIntegrante = styled.p`
    color: white;
`
const TitleIntegrante = styled.h3`
    color: white;
    font-size:6rem;
    font-weight: 500;
    @media (max-width:768px){
        font-size:3rem
    }

`
const DescIntegrante = styled.div`
    font-family: "Oswald";
    padding: 0rem 8rem 0rem 8rem;
    @media (max-width: 768px){
        padding: 0rem 4rem 0rem 4rem;
    }
`
const TitleEquipe = styled.h2`
    color: white;
    font-weight: 700;
    margin-top: 8rem;
    font-size: 5rem;
    filter: drop-shadow(10px 10px rgb(0,0,0,0.7));
    @media (max-width: 768px){
        font-size: 2rem
    }


`

const FirstContainer = styled.div`
    padding: 2rem;
    

`

export default function About(){
    return(
        <PageAbout>
            <AboutTitle>Sobre nós</AboutTitle>
            <SubtitleDaSilva>A LVS é uma empresa de pesquisa e desenvolvimento com IA. Nossa missão é assimilar o mundo de seguros automotivos à realidade das inteligências artificiais emergentes no mercado</SubtitleDaSilva>
            <AboutSection>
                <FirstContainer style={{padding:'2rem'}}>
                <SectionTitle>Visão da LVS</SectionTitle>
                    <SectionDescription>
                        A LVS está na vanguarda da revolução tecnológica no setor automotivo, incorporando inteligência artificial (IA) para transformar e agilizar processos essenciais. No dinâmico mundo dos veículos, onde a eficiência e a precisão são cruciais, nossa empresa se destaca ao implementar soluções de IA que estão redefinindo os padrões da indústria. <br /><br /> Desde o diagnóstico avançado de problemas mecânicos até a otimização de rotas para frotas, a IA da LVS está presente em cada etapa do ciclo de vida automotivo. Nossos sistemas inteligentes analisam vastos conjuntos de dados em tempo real, permitindo uma manutenção preditiva que antecipa falhas antes que elas ocorram, reduzindo drasticamente o tempo de inatividade dos veículos e os custos associados.
                    </SectionDescription>
                </FirstContainer>
              <SectionImage src={Time} alt="Time" />
            </AboutSection>
            <TitleEquipe>Conheça nossa equipe</TitleEquipe>
            <CardIntegrante>
              <IntegranteImg src={Lavinia} alt="" />
              <DescIntegrante>
                <TitleIntegrante>Lavinia Park</TitleIntegrante>
                <TurmaIntegrante>1TDSPF RM555679</TurmaIntegrante>
              </DescIntegrante>
            </CardIntegrante>

            <CardIntegrante2>
                <DescIntegrante>
                    <TitleIntegrante>Samuel Yariwake</TitleIntegrante>
                    <TurmaIntegrante>1TDSPV RM556461</TurmaIntegrante>
                </DescIntegrante>
                <IntegranteImg src={Samuel} alt="" />

            </CardIntegrante2>

            <CardIntegrante>
              <IntegranteImg src={Lemos} alt="" />
                <DescIntegrante>
                    <TitleIntegrante>Gabriel Lemos</TitleIntegrante>
                    <TurmaIntegrante>1TDSPV RM554819</TurmaIntegrante>
                </DescIntegrante>
            </CardIntegrante>
        </PageAbout>
        
    )
}