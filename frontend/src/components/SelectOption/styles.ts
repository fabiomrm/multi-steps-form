import styled from 'styled-components';

type ContainerProps = {
    selected: boolean;
};

export const Container = styled.div<ContainerProps>`
    display: flex;
    border: 0.125rem solid ${({ selected }) => selected ? '#25CD89' : '#16195C'};
    border-radius: 0.625rem;
    padding: 1.25rem;
    margin-bottom: 1rem;
    align-items: center;
    cursor: pointer;

    &:hover {
        border: 0.125rem solid #496459;
    }
`;

export const Icon = styled.div`
    width: 3.75rem;
    height: 3.75rem;
    border-radius: 50%;
    background-color: #191A59;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;
    
`;

export const Info = styled.div`
    flex: 1;
    margin-left: 1.25rem;
    
`;

export const Title = styled.h4`
    font-size: 1.1rem;
`;

export const Description = styled.div`
    font-size: 0.8rem;
    color: #B8B8D4;
`;