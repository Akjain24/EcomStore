// COMBINE REDUCER

import {combineReducers} from "redux";
import { productReducer } from "./ProductReducer";

export const reducer = combineReducers({productData : productReducer}) 
//For multiple reducer function we can putting coma

/* 
    => Combine reducre are going to combine the multiple reducer functions
    into  single reducer function.  
*/