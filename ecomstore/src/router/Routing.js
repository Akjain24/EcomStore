import { Route,Routes } from "react-router-dom";
import Products from "../components/Products/Products";
import Product from "../components/Product/Product";
import Cart from "../components/Cart/Cart";

const Routing = () =>{
    return(
        <Routes>
            <Route path="/" element={<Products />}/>
            <Route path="/product/:id" element={<Product />}/>
            <Route path="/cart" element={<Cart />}/>
        </Routes>
    )
}

export default Routing;