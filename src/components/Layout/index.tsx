import React from 'react';

import { Grid } from './styles';

import ChannelData from '../ChannelData';
import ChannelInfo from '../ChannelInfo';
import ChannelList from '../ChannelList';

import ServerList from '../ServerList';
import ServerName from '../ServerName';

import UserInfo from '../UserInfo';
import UserList from '../UserList';

const Layout: React.FC = () => {
    return (
        <Grid>
            <ChannelData />
            <ChannelInfo />
            <ChannelList />
            <ServerList />
            <ServerName />
            <UserInfo />
            <UserList />
        </Grid>
    );
}

export default Layout;