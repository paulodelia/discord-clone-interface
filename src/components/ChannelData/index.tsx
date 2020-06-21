import React, { useRef, useEffect } from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';
import ChannelMessage, { Mention } from '../ChannelMessage';

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;

        if(div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef]);

    return (
        <Container>
            <Messages ref={messagesRef}>
                {Array.from(Array(15).keys()).map((n) => (
                    <ChannelMessage 
                        author="Paulo D'Elia"
                        date="20/06/2020"
                        content="React não é tão difícil que nem eu imaginava!"
                    />
                ))}
                
                <ChannelMessage 
                    author="Jhonson"
                    date="20/06/2020"
                    content={
                        <>
                            <Mention>@Paulo D'Elia</Mention>, Boa noite!
                        </>
                    }
                    hasMention
                    isBot
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