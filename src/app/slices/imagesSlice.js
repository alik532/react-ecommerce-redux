import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: 1, link: "https://react-shopping-cart-67954.firebaseapp.com/static/media/876661122392077-1-product.8c566b01d48c7b6964f0.webp"},
    {id: 2, link: "https://react-shopping-cart-67954.firebaseapp.com/static/media/6090484789343891-1-product.71fc50c019740fbf7e8e.webp"},
    {id: 3, link: "https://react-shopping-cart-67954.firebaseapp.com/static/media/11600983276356164-1-product.e4dadda2c10e5e458cce.webp"},
    {id: 4, link: "https://react-shopping-cart-67954.firebaseapp.com/static/media/12064273040195392-1-product.85191f0d6e809687fe4a.webp"},
    {id: 5, link: "https://react-shopping-cart-67954.firebaseapp.com/static/media/27250082398145996-1-product.1dd6d87d61bfdb92f787.webp"},
    {id: 6, link: "https://react-shopping-cart-67954.firebaseapp.com/static/media/51498472915966370-1-product.e53dc0babb7b44f7e40e.webp",}
]

export const imagesSlice = createSlice({
    name: "images",
    initialState,
    reducers: {},
})

export default imagesSlice.reducer;
export const selectAllImages = state => state.images