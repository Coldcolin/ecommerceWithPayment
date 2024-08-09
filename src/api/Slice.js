import {createSlice} from "@reduxjs/toolkit";

const AppReducer= createSlice({
    name: "App",
    initialState: {
        cart: [],
        total: 0,
        ecomUsers:[],
        isLoggedIn: false,
        loggedInUser:{}
    },
    reducers:{
        addToCart: (state, {payload})=>{
            const check = state.cart.findIndex((e)=> e.id == payload.id);
            if(check === -1){
                state.cart.push({...payload, QTY: 1})
                state.total = state.cart.reduce((p, e)=> p + (e.QTY * e.price), 0)
            }else{
                let value = state.cart[check];
                value.QTY += 1;
                state.total = state.cart.reduce((p, e)=> p + (e.QTY * e.price), 0)
            }
        },
        clearCart: (state)=>{
            state.cart = []
        },
        signUp: (state, {payload})=>{
            state.ecomUsers.push(payload)
        },
        login: (state, {payload})=>{
            const check = state.ecomUsers.findIndex((e)=> e.email === payload.email);
            if(check !== -1){
                if(state.ecomUsers[check].password === payload.password){
                    state.isLoggedIn = true;
                    state.loggedInUser = state.ecomUsers[check]
                }else{
                    alert("Password Incorrect")
                }
            }else{
                alert("user not found")
            }
        },
        logout:(state)=>{
            state.isLoggedIn = false;
            state.loggedInUser = {}
        }
    }
})

export const {addToCart, clearCart, signUp, login, logout} = AppReducer.actions;
export default AppReducer.reducer;