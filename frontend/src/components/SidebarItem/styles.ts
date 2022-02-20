import styled from 'styled-components';

export const Container = styled.aside`
    margin: 1.8rem 0;
    cursor: pointer;

    a {
        display: flex;
        align-items: center;
        text-decoration: none;
    }

    a:click
`;

export const Info = styled.div`
    flex: 1;
    margin-right: 1.25rem;
`;

export const Title = styled.div`
    text-align: right;
    font-weight: 800;
    margin-bottom: 0.3rem;
    font-size: 0.9rem;
    color: #FFF;
`;

export const Description = styled.div`
    text-align: right;
    font-size: 0.8rem;
    color; #B8B8D4;
`;

type IconAreaProps = {
    active: boolean;
}
export const IconArea = styled.div<IconAreaProps>`
    width: 3.125rem;
    height: 3.125rem;
    border-radius: 50%;
    background-color: ${({ active }) => active ? '#25CD89' : '#494A7C'};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Point = styled.div<IconAreaProps>`
    width: .5rem;
    height: .5rem;
    border: 0.02rem solid #494A7C;
    border-radius: 50%;
    margin-left: 1.8rem;
    background-color: ${({ active }) => active ? '#25CD89' : '#494A7C'};
`;

