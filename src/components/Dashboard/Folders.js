import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Folder from './Folder';
import Add from './Add';

export default function FolderList(props) {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CssBaseline />
            <AppBar
                position="sticky"
                sx={{ display: "flex", flexDirection: "column", height: "10vh", justifyContent: 'space-around' }}
            >
                <Typography variant="h3" marginLeft={5}>
                    Dashboard
                </Typography>
            </AppBar>
            <div style={{ position: "fixed", bottom: "10%", right: "320px", zIndex: "1" }}>
                <Add />
            </div>
            <Box sx={{ display: "flex", height: "90vh", overflow: "scroll", flexWrap: "wrap" }}>
                {
                    props.heading.map((e) => {
                        return (
                            <Folder heading={e.heading} type={e.type} />
                        )
                    })
                }
            </Box>
        </Box >
    );
}