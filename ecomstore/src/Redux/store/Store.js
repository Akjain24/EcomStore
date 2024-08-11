//STORE

import { createStore } from "redux";
import { reducer } from "../product-reducer/Reducer";

export const Store = createStore(reducer, {});


/* 
    => Store will create an Redux store and it will have all the 
    data which are required for application.

*/