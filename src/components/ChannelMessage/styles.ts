import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    align-items: center;

    padding: 4px 16px;
    margin-right: 4px;

    background-color: transparent;

    &.mention {
        background-color: var(--mention-message);

        border-left: 2px solid var(--mention-detail);
        padding-left: 14px;
    }

    & + div {
        margin-top: 13px;
    }
`;

export const Avatar = styled.div`
    
`;

export const Message = styled.div`

`;

export const Header = styled.div`

`;

export const Content = styled.div`

`;

// export const Mention = styled.span``;