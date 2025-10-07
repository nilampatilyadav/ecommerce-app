import React from 'react'
import { createPortal } from 'react-dom'; 

function PortalComponent({onClose, children}) {
  return createPortal(
    <div className='w-full h-full fixed top-0 left-0 z-10 bg-[rgba(0,0,0,0.3)] justify-items-center justify-self-center'>
    <div className='bg-white text-black border-b-gray-200 p-20 mt-20 shadow-blue-700 relative'> 
       {children}
        <div className='text-white bg-black absolute right-0 top-0 cursor-pointer p-2' onClick={onClose}>close</div>
    </div>
    </div>,
    document.getElementById("portal-root")
  )
}

export default PortalComponent
