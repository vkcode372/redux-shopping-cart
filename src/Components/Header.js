import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import DrawerComponent from './Drawer';
import { IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { useSelector } from 'react-redux';

const useStyle=makeStyles((theme)=>({
  logo:{
    flexGrow:1,
    textAlign:'left'
  },
  logotext:{
    color:"#ffffff"
  },
  navlink:{
   display:"flex",
  },
  link:{
    margin:"15px",
    textDecoration: "none",
    color:"#ffffff",
    border:"1px",
  }
}))

const Navbar = () => {
  const classes=useStyle();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const {totalQuantity}=useSelector((stata)=>stata.allcart);
  return (
    <AppBar position="static">
  <Toolbar variant="dense">
    <Typography className={classes.logo}><Link to="/" className={classes.logotext}>Shoping cart</Link></Typography>
    {
      isMobile?(<DrawerComponent></DrawerComponent>):(
        <div className={classes.navlink}>
         <Link to="/about" className={classes.link}>about</Link>
         <Link to="/conatct" className={classes.link}>Contact</Link>
         
          
        </div>
      )
    }
     <Link  className={classes.link} sx={{padding:"0px"}} to="/carddetails"><IconButton>
          <Badge badgeContent={totalQuantity} color="success">
          <ShoppingCartIcon></ShoppingCartIcon>
</Badge>
         
          </IconButton></Link>
  </Toolbar>
</AppBar>
  )
}

export default Navbar