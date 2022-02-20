import { Theme } from "../../components/Theme"
import { useNavigate, Link } from "react-router-dom";
import { useForm, FormActions } from '../../contexts/FormContext';
import * as Styled from './styles';
import { useEffect } from "react";
import { SelectOption } from "../../components/SelectOption";

export const FormStep2 = () => {


    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if(state.name === '') {
            navigate('/');
        };

        dispatch({
            type: FormActions.setCurrentStep,
            payload: 2,
        });
    },[]);

    const handleNextStep = () => {
        if(state.name) {
            navigate(`/step${state.currentStep + 1}`)
        } else {
            alert("Preencha os dados"); 
        };
    };

    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level,
        });
    };


    return(
        <Theme>
            <Styled.Container>
                <p>Passo {state.currentStep}/3</p>
                <h1>Olá, {state.name}! O que melhor descreve sua situação?</h1>
                <p>Escolha a opção que melhor condiz com sua situação profissional atual.</p>
                <hr />

               <SelectOption
                    title="Sou iniciante"
                    description= "Ainda não tive minha primeira experiência ou estou nela há menos de 02 anos"
                    icon="👶"
                    selected={state.level === 1}
                    onClick={() => setLevel(1)}
               />
               <SelectOption
                    title="Sou Experiente"
                    description= "Já estou atuando na área há pelo menos 02 anos"
                    icon="😎"
                    selected={state.level === 0}
                    onClick={() => setLevel(0)}
                    
               />
                <Link to="/step3" className="back-button">Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button>
            </Styled.Container>
        </Theme>
    )
}