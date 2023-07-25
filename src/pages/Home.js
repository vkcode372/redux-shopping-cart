import { Grid, Typography,Box } from '@mui/material'
import React, { useState } from 'react'
import Card from '@mui/material/Card';
import { experimentalStyled as styled } from '@mui/material/styles';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Cardsdata from '../Components/CardsData';
import Paper from '@mui/material/Paper';
import { useSelector ,useDispatch} from 'react-redux';
import { addData } from '../Feature/cartSlice';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
 const Home = () => {
    const [ProductData,setProductData]=useState(Cardsdata);
    const items=useSelector((state)=>state.allcart.items);
    const dispatch=useDispatch();
  return (
    <>
    <Typography>Shoping card</Typography>
<Box width="480px" sx={{width:{xl:'1488px', md:"990px",sm:"600px",xs:"240px"}}} m="auto" mt="10px">


  <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 ,lg:12}} sx={{justifyContent:"center"}} >

    {
        ProductData.map((Element,index)=>{
            return( 
            <Grid  key={index} item xs={1} sm={4} md={4} lg={3} sx={{justifyContent:"center"}}>
                <Item>   <Card sx={{ maxWidth: "400px" ,justifyContent:"center"}} p={10}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={`${Element.imgdata}`}
              />
              <CardContent sx={{textAlign:"left"}}>
                <Typography gutterBottom variant="h5" component="div">
                 {`${Element.rname}`}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                 Price:{Element.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                 Rating:{Element.rating}
                </Typography>

              </CardContent>
              <CardActions sx={{justifyContent:"center",width:"100%"}}>
                <Button size="large" variant="contained" onClick={()=>dispatch(addData(Element))}>Add to cart</Button>
               
              </CardActions>
            </Card>
        </Item>
              

            
            </Grid>
        )})
    }
  </Grid>
  </Box>
    </>
  )
}

export default Home