import styled from 'styled-components';
import { Hashtag } from 'styled-icons/heroicons-outline';
import { PersonAdd, Settings } from 'styled-icons/material';

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

export const HashtagIcon = styled(Hashtag)`
    width: 20px;
    height: 20px;

    color: var(--symbol);
`;

export const InviteIcon = styled(PersonAdd)`

`;

export const SettingsIcon = styled(Settings)`

`;
