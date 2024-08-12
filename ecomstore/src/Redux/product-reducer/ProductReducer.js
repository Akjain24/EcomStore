// REDUCER FUNCTION

const initialState = {
  cartData: [],
  products: [],
};

export const productReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartData: [...state.cartData, action.payload],
      };

    case "REMOVE_FROM_CART":
      const filteredProduct = state.cartData.filter(
        (cartItem) => cartItem.id !== action.payload
      );
      return {
        ...state,cartData : filteredProduct
      };

    default:
      return state;
  }
};

/*
    => Reducers functions will be knowing how to do the action . Which
     means all the conditions and loops will be used inside this reducer.

    => 
*/
