import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cart from './Cart'
import { useQuery } from '@tanstack/react-query';

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle Menu
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  // Array of navigation items
  const navItems = [
    { id: 1, text: 'Home', path: '/' },
    { id: 2, text: 'Product', path: '/products' },
    { id: 3, text: 'Offers', path: '/offers' },
    { id: 4, text: 'Contact', path: '/contact' },
  ];

  return (
    <div className='bg-black flex justify-between items-center h-24 mx-auto px-4 text-white shadow-md'>
      <h1 className='w-full text-3xl font-bold text-[#DDD]'>Logo</h1>

      {/* Desktop Navigation  */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-2 m-2 border-b-2 border-black hover:border-gray-700 cursor-pointer duration-100 hover:text-[#DDD]'>
            <Link to={item.path}>{item.text}</Link>
          </li>
        ))}
      </ul>

      <div onClick={handleNav} className='block md:hidden'>
        {menuOpen ? 'X' : 'Menu' }
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          menuOpen
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'}>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 border-b rounded-xl hover:bg-[#DDD] duration-300 hover:text-black cursor-pointer border-gray-600'
          >
            <Link to={item.path}>{item.text}</Link>
          </li>
        ))}
      </ul>
      <Cart />
    </div>
  );
};

export default Menu;


function useFetch(url, key) {
    return useQuery({
        queryKey: [key || url],
        queryFn: async () => {
            const res = await axios.get(url);
            return res.data;
        },
    });
}



