import React from "react";

const CreateContext=React.createContext({
    cartList:[],
    addCart:()=>{},
    deleteCart:()=>{},
    incrementCartQuantity:()=>{},
    decrementCartQuantity:()=>{},
    removeAllCartItems:()=>{},
})

export default CreateContext