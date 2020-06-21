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
    width: 40px;
    height: 40px;

    background-color: var(--secondary);
    border-radius: 50%;

    &.bot {
        background-color: var(--mention-detail);
    }
`;

export const Message = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 17px;

    min-height: 40px;

`;

export const Header = styled.div`

`;

export const Content = styled.div`

`;

// export const Mention = styled.span``;