//ACTION CREATION

import { ACTION_TYPE } from "../types/ActionTypes"

export const addtoCart = (product)=>{
    return {type: ACTION_TYPE.ADD_TO_CART,payload : product}
}

export const removeFromCart = (id)=>{
    return {type : ACTION_TYPE.REMOVE_FROM_CART, payload:id}
}

/*
    => Action creators are plain javascript function which will
     return type and payload.
    => This creators will receive type from action type and payload 
    will be received from dispatch (In the perticular Components)
*/