import { FaChevronRight } from "react-icons/fa";
import styled from "styled-components";


const Main = styled.main`
  padding: 1rem;
  flex-grow: 1;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Message = styled.div`
  background-color: #002a6e;
  color: #ffffff;
  padding: 1rem;
  border-radius: 0.5rem;
  text-align: center;
  font-size: 1.2rem;
  max-width: 80%;
`;


const Footer = styled.footer`
  display: flex;
  justify-content: center;
  background-color: #00163e;
  padding: 1rem;
  border-top: 1px solid #3b82f6;
  @media (max-width:768px){
    padding: .2rem
  }
`;

const InputWrapper = styled.div`
  width: 100%;
  max-width: 50rem;
  display: flex;
  align-items: center;
  background-color: #3b82f6;
  border-radius: 9999px;
  padding: 0.5rem;
`;

const Input = styled.input`
  flex-grow: 1;
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0 1rem;
  color: #00163e;
  &::placeholder {
    color: #00163e;
  }
`;

const SendButton = styled.button`
  background-color: #F1B82D;
  color: #00163e;
  border: none;
  border-radius: 9999px;
  padding: 0.5rem;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: #3b82f6;
    color: #F1B82D;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;


`

export default function Bot(){
    return(
      <Container>
            <Main>
                <Message>
                    O LVSBot ainda está em produção!
                </Message>
            </Main>
            <Footer>
                <InputWrapper>
                    <Input
                    type="text"
                    placeholder="Envie uma mensagem para o LVSBot..."
                    />
                    <SendButton>
                        <FaChevronRight />
                    </SendButton>
                </InputWrapper>
            </Footer>
       </Container>
    )


}