import React from 'react'
import { Button, Typography } from '@material-ui/core'
import folder from './Folder.png'
import file from './File.png'
export default function Folder(props) {
  return (
    <Button>
      <div style={{
        display: "flex", alignItems: 'center', justifyContent: "space-around", backgroundImage: (props.type === "folder") ? (`url(${folder})`) : (`url(${file})`), backgroundSize: "100% 100%", width: "20vh", height: "20vh", color: 'white'
      }}>
        <Typography sx={{ textSizeAdjust: 'auto' }}>
          {props.heading}
        </Typography>
      </div>
    </Button >
  )
}
