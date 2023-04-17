import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AddIcon from '@mui/icons-material/Add';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';


export default function Add() {
    return (
        <div >
            <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                    <React.Fragment>
                        <Button variant="contained" sx={{borderRadius: "45px"}} {...bindTrigger(popupState)}> <AddIcon sx={{width: "45px", height: "45px"}} /> </Button>
                        <Menu {...bindMenu(popupState)}>
                            <MenuItem onClick={popupState.close}><Button variant="contained" component="label">
                                Add files
                                <input hidden accept="image/*" multiple type="file" />
                            </Button></MenuItem>
                            <MenuItem onClick={popupState.close}><Button variant="contained" component="label">
                                Add Folder
                                <input hidden accept="image/*" multiple type="file" />
                            </Button></MenuItem>
                        </Menu>
                    </React.Fragment>
                )}
            </PopupState>
        </div>
    )
}