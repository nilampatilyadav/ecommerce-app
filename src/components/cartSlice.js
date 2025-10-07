import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    cartItems:[]
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action) => { 
            const item = action.payload;
            const exstingItem = state.cartItems.find((i)=> i.id === item.id);
            if(exstingItem){
                exstingItem.quantity +=1 ;
            console.log(JSON.parse(JSON.stringify(state.cartItems)));

            } else {
                state.cartItems.push({...item, quantity:1});
                            console.log(JSON.parse(JSON.stringify(state.cartItems)));

            }
        },
        deleteProduct: (state, action) => {
            const id = action.payload;
            console.log(JSON.parse(JSON.stringify(state.cartItems)));
            console.log(state.cartItems,'product id')
            state.cartItems = state.cartItems.filter((item)=>{item.id !== id})

        },
        increaseQuantity: (state, action) => {
            const id = action.payload;
            const item = state.cartItems.find((item)=>{ item.id === id});
            if(item) {
                item.quantity +=1;
            }
        },
        decreaseQuantity: (state, action) => {
            const id = action.payload;
            const item = state.cartItems.find((item)=>{ item.id === id});
            if(item && item.quantity > 1) {
                item.quantity -=1;
            } else {
                state.cartItems = state.cartItems.filter((item)=>{item.id !== id})
            }
        },
        clearCart: (state, action) => {
            state.cartItems = [];
        }
    }
})

export const {addProduct, deleteProduct, increaseQuantity, decreaseQuantity,clearCart} = cartSlice.actions;
export default cartSlice.reducer