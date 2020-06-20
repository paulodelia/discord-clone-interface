import React from 'react';

import { Container, Role, User, Avatar} from './styles';

interface UserProps {
    nickname: string;
    isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({
    nickname,
    isBot
}) => {
    return (
        <User>
            <Avatar className={isBot ? 'bot' : ''} />

            <strong>{nickname}</strong>
            {isBot && <span>Bot</span>}
        </User>
    )
}

const UserInfo: React.FC = () => {
    return (
        <Container>
            <Role>Disponível - 2</Role>
            <UserRow nickname="Paulo D'Elia" />
            <UserRow nickname="OMucho" />

            <Role>Offline - 23</Role>
            <UserRow nickname="Ralphyx" />
            <UserRow nickname="Jhonson" isBot/>
            <UserRow nickname="TheDooooooooo" isBot />
        </Container>
    );
}

export default UserInfo;