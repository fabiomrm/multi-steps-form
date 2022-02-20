import styled from 'styled-components';

export const Container = styled.div`
    p {
        color: #B8B8D4;
        font-size: 1.2rem;
    }

    h1 {
        margin: 1.25rem 0;
        padding:0;
        font-size: 1.6rem;
    }

    hr {
        height: 0.06rem;
        border: 0;
        background-color: #16195C;
        margin: 1.9rem 0;
    }

    label {
        font-size: 1.2rem;
        input {
            display: block;
            margin-top: 0.5rem;
            width: 100%;
            padding: 1.25rem 0.625rem;
            border: 0.12rem solid #35CD89;
            border-radius: 0.625rem;
            color: #FFF;
            outline: 0;
            font-size: 1rem;
            background-color: #02044A;
        }
    }

    button {
        background-color: #25CD89;
        color: #FFF;
        font-size: 0.9rem;
        font-weight: 800;
        padding: 1rem 2.5rem;
        border:0;
        border-radius: 1.9rem;
        cursor: pointer;
        margin-top: 1.8rem;
    }
`;