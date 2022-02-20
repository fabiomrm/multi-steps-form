import { Theme } from "../../components/Theme"
import { useNavigate } from "react-router-dom";
import { useForm, FormActions } from '../../contexts/FormContext';
import * as Styled from './styles';
import { ChangeEvent, useEffect } from "react";

export const FormStep1 = () => {


    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1,
        })
    },[])

    const handleNextStep = () => {
        if(state.name) {
            navigate(`/step${state.currentStep + 1}`)
        } else {
            alert("Preencha os dados"); 
        }
    }

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value,
        })
    }

    return(
        <Theme>
            <Styled.Container>
                <p>Passo {state.currentStep}/3</p>
                <h1>Vamos começar com o seu nome</h1>
                <p>Preencha o campo abaixo com seu nome completo</p>
                <hr />

                <label htmlFor="">
                    Nome completo: 
                    <input 
                        type="text" 
                        name="name" 
                        value={state.name} 
                        onChange={handleNameChange} 
                        autoFocus
                    />
                </label>

                <button onClick={handleNextStep}>Próximo</button>
            </Styled.Container>
        </Theme>
    )
}