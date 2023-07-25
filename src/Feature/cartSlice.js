import { createSlice } from "@reduxjs/toolkit";
import Cardsdata from "../Components/CardsData";
//  console.log(Cardsdata);
const initialState={
   cart:[],
   items:Cardsdata,
   totalQuantity:0,
   totalPrice:0,
}
export const  cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
         addData:(state,action)=>{
  
            let find = state.cart.findIndex((item) => item.id === action.payload.id);
            if (find >= 0) {
              state.cart[find].quantity += 1;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }

            state.totalQuantity += 1;
            state.totalPrice += action.payload.price;
           
         },
         removeItem:(state,actions)=>{
            state.cart=state.cart.filter((item)=>item.id!==actions.payload.id);
            state.totalQuantity -= 1;
            state.totalPrice -= actions.payload.price; 
         },
         incrementByValue:(state,actions)=>{
            let find = state.cart.findIndex((item) => item.id === actions.payload.id);
            if (find >= 0) {
              state.cart[find].quantity += 1;
              state.totalQuantity += 1;
              state.totalPrice += actions.payload.price; // Assuming the item has a 'price' property
            }
         },
         decreseByValue:(state,actions)=>{
            let find = state.cart.findIndex((item) => item.id === actions.payload.id);
            if (find >= 0 && state.cart[find].quantity > 1) {
              state.cart[find].quantity -= 1;
              state.totalQuantity -= 1;
              state.totalPrice -= actions.payload.price; // Assuming the item has a 'price' property
            }
         }
         }

})
export const {addData,removeItem,incrementByValue,decreseByValue}=cartSlice.actions;
export default cartSlice.reducer;