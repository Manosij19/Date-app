import * as React from 'react';
import List_Item from './ListItem.js'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Calenderbox from './Calenderbox'
import profile from './DP.png'

import NotificationsIcon from '@mui/icons-material/Notifications';
import Button from '@mui/material/Button';

export default function RightSidebar(props) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '89vw', height: "100vh" }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                {/* <Box sx={{ margin: '5% 0 5%', display: 'flex', justifyContent: 'space-between' }}> */}
                <img src={profile} width="20%" alt="dp" />
                <div style={{ padding: "auto" }}>

                    
                    <h2>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2>
                </div>
                <Button variant="text" size="large" ><NotificationsIcon fontSize='large' /></Button>
            </Box>
            <Divider />
            {/* <Calenderbox /> */}
            <Divider />
            <Typography  variant="h4" component="h4" sx= {{fontFamily: 'PT Serif'}}>
                Profiles Liked By You!
            </Typography>
            <List sx={{ width: '100%', overflow: 'auto', bgcolor: 'background.paper' }}>
                {props.notif.map((n) => {
                    return (
                        <List_Item image={n.image} message={n.message} by={n.by} />
                    )
                })}
            </List>
        </div>
    );
}