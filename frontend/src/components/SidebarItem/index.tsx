import { Link } from 'react-router-dom';
import * as Styled from './styles';
import {ReactComponent as ProfileIcon } from '../../svgs/profile.svg';
import {ReactComponent as BookIcon } from '../../svgs/book.svg';
import {ReactComponent as MailIcon } from '../../svgs/mail.svg';

type Props = {
    title: string;
    description: string;
    icon: string;
    path: string;
    active: boolean;
}
export const SidebarItem = ({ title, description, icon, path, active }: Props) => {
    return(
        <Styled.Container>
            <Link to={path}>
                <Styled.Info>
                    <Styled.Title>{title}</Styled.Title>
                    <Styled.Description>{description}</Styled.Description>
                </Styled.Info>
                <Styled.IconArea active={active}>
                    {
                        icon === 'profile' && (
                            <ProfileIcon fill="white" width={24} height={24}/>
                        )
                    }
                    {
                        icon === 'book' && (
                            <BookIcon fill="white" width={24} height={24}/>
                        )
                    }
                    {
                        icon === 'mail' && (
                            <MailIcon fill="white" width={24} height={24}/>
                        )
                    }
                </Styled.IconArea>
                <Styled.Point active={active}></Styled.Point>

            </Link>
        </Styled.Container>
    )
}