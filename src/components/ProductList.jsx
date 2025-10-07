import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';

const MainContent = () => {
  const {data:products, isLoading, error} = useFetch('https://fakestoreapi.com/products', 'products');

  if(isLoading) return <button disabled type="button" className="py-2.5 px-5 me-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center">
    <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
    </svg>
    Loading...
    </button>

  if(error) return <p>Error: {error}</p>

  return (
      <div className='mt-4 flex justify-between items-center mx-auto px-4 text-white min-h-screen'>
        <ul className='flex flex-wrap -mx-2'>
          {products.map(product => (
            <li key={product.id} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4 items-center justify-center text-center'>
              <div className='flex flex-wrap justify-center mx-4 bg-gray-200'>
                <Link to={`/products/${product.id}`}>
                  <img src={product.image} 
                      className='h-[200px] items-center m-2' 
                      alt={product.title} 
                      title={product.title}/>
                </Link>

                <Link to={`/products/${product.id}`} title={product.title}>
                  <h3 className='open-sans-semibold line-clamp-2 mb-2 min-h-[48px] text-black'>
                    {product.title}
                  </h3>
                </Link>

                <p className='open-sans-bold w-full mb-2 text-black'>
                  ${product.price}
                </p>

                <button type="button" className="cursor-pointer text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
                  Add to Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default MainContent
