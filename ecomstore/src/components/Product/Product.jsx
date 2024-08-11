import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../Loading/Loading'
import { useDispatch } from 'react-redux'
import { addtoCart } from '../../Redux/productAction/ProductActions'

//UseParams will take the endpoint of the  url 

const Product = () => {
    const [product,setProduct] = useState([])
    const {id} = useParams()
    const dispatch = useDispatch();


    useEffect(()=>{
        getProduct();
    },[])
    
    const getProduct = async()=>{
        const data = await fetch(`https://fakestoreapi.com/products/${id}`)
        const res = await data.json();
        setProduct(res);
    }

  return (
    <>
       <h2 className='text-center'>Products</h2>
       {
        Object.keys(product).length ? (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 border'>
                        <img src={product.image} alt='' className='img-fluid'/>
                    </div>
                    <div className='col-md-6 mt-2 border'>
                        <h2 className='pt-3'>Title : {product.title}</h2>
                        <div className='mt-3'>
                            <span className='bg-info text-light p-2'>
                                Price : {product.price}
                            </span>
                            <p className='mt-3'>{product.description }</p>
                        </div>
                        <div className='mt-3'>
                            <button className='btn btn-info px-3 py-2' 
                            onClick={()=>dispatch(addtoCart(product))}>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                    
                </div>

            </div>
            ) : (
            <div>
                <Loading />
            </div>)
       }
    </>
  )
}

export default Product


/*UseParams hook will Returns an object of key/value pairs of the dynamic params from
 the current URL that were matched by the route path. */

 /* obj ={}
 Object.value(obj).length
 Object.keys(obj).length
 */