import styled from 'styled-components';

type CardProps = {
    titleProps: string;
    messageProps: string;
    imagemProps: string;
}

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    transition: box-shadow 0.3s ease;
    cursor: pointer;

    &:hover {
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    }
`;

const Title = styled.h2`
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
`;

const Message = styled.p`
    color: #4B5563; // text-gray-700
    margin-bottom: 1rem;
`;

const Link = styled.p`
    color: #3B82F6; // text-blue-500
    font-weight: 500;
`;

const Image = styled.img`
    margin-top: 1rem;
    width: 6rem;
    height: 6rem;
    object-fit: contain;
`;

export default function Card({ titleProps, messageProps, imagemProps }: CardProps) {
    return (
        <CardContainer>
            <Title>{titleProps}</Title>
            <Message>{messageProps}</Message>
            <Link></Link>
            <Image src={imagemProps} alt={titleProps} />
        </CardContainer>
    );
}