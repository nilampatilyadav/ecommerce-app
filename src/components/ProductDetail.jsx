import useFetch from '../hooks/useFetch';
import { useParams } from 'react-router-dom';
import AddToCart from './AddToCart';

const ProductDetail = () => {
  const  {id}= useParams();
  const {data:product, isLoading, error} = useFetch(`https://fakestoreapi.com/products/${id}`,`products/${id}`);
  if(isLoading) return <p>Loading...</p>
  
  if(error) return <p>Error: {error}</p>

  return (
    <div className='text-black flex gap-4 p-15'>
      <div className='m-4'>
        <img src={product.image} />
      </div>
      <div className='flex flex-col gap-2'>
        <h1>{product.title}</h1>

        <p>{product.description}</p>

        <h2>$ {product.price}</h2>
        
        <AddToCart product={product} id={product.id}/>
      </div>
    </div>
  )
}

export default ProductDetail
