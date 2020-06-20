import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 5px 3px;
    border-radius: 5px;

    background-color: transparent;

    transition: background-color .2s;

    > div {
        display: flex;
        align-items: center;

        > span {
            margin-left: 5px;
            color: var(--senary);
        }
    }

    &.active, &:hover {
        background-color: var(--quinary);

        > div span {
            color: var(--white);
        }
    }

    cursor: pointer;
`;

export const HashtagIcon = styled.div`

`;

export const InviteIcon = styled.div`

`;

export const SettingsIcon = styled.div`

`;
