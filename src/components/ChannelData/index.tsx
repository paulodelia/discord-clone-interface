import React from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';
import ChannelMessage, { Mention } from '../ChannelMessage';

const ChannelData: React.FC = () => {
    return (
        <Container>
            <Messages>
                <ChannelMessage 
                    author="Paulo D'Elia"
                    date="20/06/2020"
                    content="React não é tão difícil que nem eu imaginava!"
                />
                
                <ChannelMessage 
                    author="Jhonson"
                    date="20/06/2020"
                    content={
                        <>
                            <Mention>@Paulo D'Elia</Mention>, Bom noite!
                        </>
                    }
                />
            </Messages>
                
            <InputWrapper>
                <Input type="text" placeholder="Conversar em #chat-livre" />
                <InputIcon />
            </InputWrapper>
        </Container>
    );
}

export default ChannelData;