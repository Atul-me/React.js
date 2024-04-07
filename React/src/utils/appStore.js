import {configureStore} from '@reduxjs/toolkit';
import cartSlice from './cartSlice';

const appStore = configureStore({
    //It is a whole big appstore reducer which contains slice's reducers 
    reducer:{
        cart: cartSlice,
    },
});

export default appStore;