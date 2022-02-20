import { Header } from '../Header';
import * as Styled from './styles';
import { SidebarItem } from '../SidebarItem';
import { useForm } from '../../contexts/FormContext';

export const Theme: React.FC = ({ children }) => {

    const { state } = useForm();

    return(
        <Styled.Container>
            <Styled.Area>
                <Header />
                <Styled.Steps>
                    <Styled.Sidebar>
                        <SidebarItem
                            title="Pessoal"
                            description="Identifique-se"
                            icon="profile"
                            path="/"
                            active={state.currentStep === 1}
                        />
                        <SidebarItem
                            title="Profissional"
                            description="Seu grau de experiência"
                            icon="book"
                            path="/step2"
                            active={state.currentStep === 2}
                        />
                        <SidebarItem
                            title="Contato"
                            description="Como te achar"
                            icon="mail"
                            path="/step3"
                            active={state.currentStep === 3}
                        />
                    </Styled.Sidebar>
                    <Styled.Page>
                        {children}
                    </Styled.Page>                    
                </Styled.Steps>
            </Styled.Area>
        </Styled.Container>
    )
}