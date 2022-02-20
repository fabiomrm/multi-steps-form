import { Theme } from "../../components/Theme"
import { Link, useNavigate } from "react-router-dom";
import { useForm, FormActions } from '../../contexts/FormContext';
import * as Styled from './styles';
import { ChangeEvent, useEffect } from "react";

export const FormStep3 = () => {


    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if(state.name === '') {
            navigate('/');
        };
        
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 3,
        })
    },[])

    const handleNextStep = () => {
        


        if(state.name && state.email && state.github) {
            console.log({state});
            alert("Dados cadastrados!")
            
            navigate("/");
        } else {
            alert("Preencha os dados"); 
        }
    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value,
        })
    }

    const handleGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value,
        })
    }

    return(
        <Theme>
            <Styled.Container>
                <p>Passo {state.currentStep}/3</p>
                <h1>Que massa, {state.name}! Onde te achamos?</h1>
                <p>Preencha seus dados para contato</p>
                <hr />

                <label htmlFor="">
                    Qual o seu melhor e-mail?
                    <input 
                        type="email" 
                        name="name" 
                        value={state.email} 
                        onChange={handleEmailChange} 
                        autoFocus
                    />
                </label>

                <label htmlFor="">
                    Qual o link para o seu Github?
                    <input 
                        type="url" 
                        name="github" 
                        value={state.github} 
                        onChange={handleGithubChange} 
                        autoFocus
                    />
                </label>

                <Link to="/step2" className="back-button">Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button>
            </Styled.Container>
        </Theme>
    )
}