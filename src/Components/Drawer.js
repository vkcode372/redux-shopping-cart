import React, { useState } from 'react'
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';

  import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
const DrawerComponent = () => {
    const [openDrawer,setDrawer]=useState(false);
  return (
   <>
   <Drawer open={openDrawer} onClose={()=>setDrawer(false)}>
     <List>
        <ListItem onClick={() => setDrawer(false)}>
            <ListItemText>
            <Link to="/">Home</Link>
            </ListItemText>
        </ListItem>
        <ListItem onClick={() => setDrawer(false)}>
            <ListItemText>
            <Link to="/">About</Link>
            </ListItemText>
        </ListItem>
        <ListItem onClick={() => setDrawer(false)}>
            <ListItemText>
            <Link to="/">Contact</Link>
            </ListItemText>
        </ListItem>
        <ListItem onClick={() => setDrawer(false)}>
            <ListItemText>
            <Link to="/">Faq</Link>
            </ListItemText>
        </ListItem>
          
     </List>
   </Drawer>
   <IconButton onClick={() => setDrawer(!openDrawer)}>
      <MenuIcon></MenuIcon>
      </IconButton>
   </>
  )
}

export default DrawerComponent