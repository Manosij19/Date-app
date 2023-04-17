import * as React from 'react';
import { ListItem, ListItemAvatar, Avatar, ListItemText, Typography } from '@mui/material';

export default function List_Item(props) {
    return (<ListItem alignItems="flex-start">
        <ListItemAvatar sx={{ margin: "auto" }}>
            <Avatar src={props.image} alt="dp" />
        </ListItemAvatar>
        <ListItemText
            primary={
                <React.Fragment>
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="h6"
                        color="text.primary"
                    >
                        {props.message}
                    </Typography>
                </React.Fragment>
            }   
            secondary={
                <React.Fragment>
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body1"
                        color="text.primary"
                    >
                        By - {props.by}
                    </Typography>
                </React.Fragment>
            }
        />
    </ListItem >);
}