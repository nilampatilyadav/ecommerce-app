import { useSelector, useDispatch } from 'react-redux';

const Cart = () => {
    const cartCount = useSelector((state)=>state.cart.cartItems.reduce((total,item) => total + item.quantity , 0));
    
  return (
    <div className='inline-block pl-2 text-amber-300 cursor-pointer'>Cart {cartCount}</div>
  )
}

export default Cart