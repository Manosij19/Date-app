import React from 'react'
import Sidebar from './LeftSidebar'
import RightSidebar from './RightSidebar';
import profile from './DP.png'



const list = [
  { heading: "name", type: "folder" },
  { heading: "name", type: "folder" },
  { heading: "name", type: "folder" },
  { heading: "name", type: "folder" },
  { heading: "name", type: "folder" },
  { heading: "name", type: "folder" },
  { heading: "name", type: "folder" },
  { heading: "name", type: "folder" },
  { heading: "name", type: "file" },
  { heading: "name", type: "file" },
  { heading: "name", type: "folder" },
  { heading: "name", type: "folder" },
  { heading: "name", type: "folder" },
  { heading: "name", type: "folder" },
  { heading: "name", type: "folder" },
  { heading: "name", type: "file" },
  { heading: "name", type: "file" },
  { heading: "name", type: "folder" },
  { heading: "name", type: "folder" },
  { heading: "name", type: "folder" },
  { heading: "name", type: "folder" },
  { heading: "name", type: "folder" },
  { heading: "name", type: "file" },
  { heading: "name", type: "file" },
  { heading: "name", type: "folder" },
  { heading: "name", type: "folder" },
  { heading: "name", type: "folder" },
  { heading: "name", type: "folder" },
  { heading: "name", type: "folder" },
  { heading: "name", type: "file" },
  { heading: "name", type: "file" },
  { heading: "name", type: "file" },
]
const notif = [
  { image: profile, message: "message", by: "Manosij" },
  { image: profile, message: "message", by: "Manosij" },
  { image: profile, message: "message", by: "Manosij" },
  { image: profile, message: "message", by: "Manosij" },
  { image: profile, message: "message", by: "Manosij" },
  { image: profile, message: "message", by: "Manosij" },
  { image: profile, message: "message", by: "Manosij" },
  
 
]




export default function Dashboard() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "row" }}>
      <Sidebar />
      <RightSidebar notif={notif} />
    </div>
  )
}
