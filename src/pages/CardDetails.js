import React from 'react'
import { Box, CardMedia, Grid, IconButton, Typography } from '@mui/material'
import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Divider from '@mui/material/Divider';
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import { removeItem ,incrementByValue,decreseByValue} from '../Feature/cartSlice';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
const CardDetails = () => {
   const {cart,totalQuantity,totalPrice}=useSelector((state)=>state.allcart);
   const dispatch=useDispatch()
  return (
    <>
      <Box width="480px" sx={{width:{xl:'1488px', md:"990px",sm:"600px",xs:"331px"}}} m="auto" mt="10px">
              <Typography  variant='h2'>
                Your items
              </Typography>

        <Grid container  spacing={2} columns={{md:12,sm:8}}>
        <Grid item  sm={4} md={8} >
          <Item >
            {
                cart.map((cartValue)=>{return(
                   
                    <Grid  key={cartValue.id} container spacing={2} gap={1}  sx={{
                        flexWrap:{xl:'nowrap',md:'nowrap'},
                        display: { xs: 'block', md: 'flex' },
                        }}>
                    <Grid item>
                        <Card>
                            <CardMedia
                             component="img"
                             alt="green iguana"
                             height="140"
                             image={`${cartValue.imgdata}`}
                            />
    
                          
                           
                        </Card>
                      
                    </Grid>
                    <Grid item   sx={{paddingTop:"10px",textAlign:"left"}}>
                    <Typography><span style={{fontWeight:"bold"}}>Restaurant:</span> {cartValue.rname} </Typography>
                    <Typography><span style={{fontWeight:"bold"}}>Price:</span>{cartValue.price} </Typography>
                    <Typography><span style={{fontWeight:"bold"}}>Dishes:</span>{cartValue.address
                    }</Typography>
                    <Typography><span style={{fontWeight:"bold"}}>Total:</span>{cartValue.price}</Typography>
                    <IconButton sx={{background:"blue",width:"30px",height:"30px",borderRadius:"50%"}}>
                        <AddIcon onClick={()=>dispatch(incrementByValue(cartValue))}></AddIcon>
                       </IconButton>
                        <input style={{width:"30px",margin:"10px"}}type='text' value={cartValue.quantity} readOnly></input>
                       <IconButton sx={{background:"blue",width:"30px",height:"30px",borderRadius:"50%"}}>
                        <RemoveIcon onClick={()=>dispatch(decreseByValue(cartValue))}></RemoveIcon>
                       </IconButton>
                    </Grid>
                    <Grid  item    sx={{paddingTop:"10px",textAlign:"left"}}>
                    <Typography><span style={{fontWeight:"bold"}}>Rating:</span>{cartValue.rating}</Typography>
                        <Typography sx={{wordWrap:"break-word"}}><span style={{fontWeight:"bold"}}>Order Review :</span>{cartValue.somedata} </Typography>
                        <Typography><span style={{fontWeight:"bold"}} >Remove:</span><DeleteIcon onClick={()=>dispatch(removeItem(cartValue))}></DeleteIcon></Typography>
                    </Grid>
                    
                </Grid>
                )})
            }
         
            
          </Item>
         
        </Grid>
        <Grid item md={4} sm={4} sx={{width:{sm:"100%"}}} >
          <Item>
            <Typography variant='h6' sx={{textAlign:"left"}}>Summary</Typography>
            <Divider />
             <Box >
                <Box sx={{display:"flex",justifyContent:"space-between"}}>
                <Typography variant='p' >Total Quantity</Typography>
                <Typography variant='p' >{totalQuantity}</Typography></Box>
               
              
             </Box>
           
             <Divider />
             <Box >
                <Box sx={{display:"flex",justifyContent:"space-between"}}>
                    <Typography variant='p' sx={{fontWeight:"bold"}} >Total Amount</Typography>
                   <Typography variant='p' >{totalPrice}</Typography></Box>
              
             </Box>
          </Item>
        </Grid>
        </Grid>
   </Box>
    </>
  )
}

export default CardDetails