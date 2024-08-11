import React from "react";
import "./cart.css"
import { useSelector } from "react-redux";

const Cart = () => {
  const cart_data = useSelector((state) => state.productData.cartData);
  console.log(cart_data);
  return (
    <>
      <h2 className="text-center">Cart Page</h2>
      {cart_data && cart_data.length > 0 ? (
        cart_data.map((product)=>(
            <div className="row">
                <div className="col-md-4">
                    <img src={product.image} className="img-fluid cart_img" alt="img"/>
                </div>
                <div className="col-md-6 ">
                    <h4 className="pt-3 cart_txt ">{product.title}</h4>
                    <h4 className="pt-3 cart_txt">{product.category}</h4>
                    <h4 className="pt-3 cart_txt des">{product.description}</h4>
                </div>
                <div className="col-md-2">
                    <div className="">Price : ${product.price}</div>
                    <button className="btn btn-danger">Remove</button>
                </div>
            </div>
        ))
      ) : (
        <h2 className="text-center">Cart is Empty</h2>
      )}
    </>
  );
};

export default Cart;
