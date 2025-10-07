import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addProduct, deleteProduct } from './cartSlice';

const AddToCart = ({product, id}) => {
  const dispatch = useDispatch();
  return (
    <>
        <button 
          type="button" 
          onClick={()=>(dispatch(addProduct(product)))}
          className="w-1/3 cursor-pointer text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
            Add to Cart
        </button>
         <button 
          type="button" 
          onClick={()=>(dispatch(deleteProduct(id)))}
          className="w-1/3 cursor-pointer text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
            delete product
        </button>
    </>
  )
}

export default AddToCart