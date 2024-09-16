import { Link } from "react-router-dom";
import styled from "styled-components";


const NaoEncontrado = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #00050e;
`
const NaoEncontradoTitle = styled.h1`
    color: white;
    font-weight: 900;
    font-size: 5vw;
`
const NaoEncontradoLink = styled(Link)`
    color: #ffbb00;
    font-weight: 400;
    font-size: 3vw;
    
    &:hover{
        text-decoration: underline;
    }
`
export default function Error(){
    return(
        <NaoEncontrado>
        
            <NaoEncontradoTitle>404 | Página não encontrada</NaoEncontradoTitle>
            <NaoEncontradoLink to={"/login"}>Voltar</NaoEncontradoLink>
           

        </NaoEncontrado>
    )
}