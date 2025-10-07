import React, {useState} from 'react'
import Menu from './Menu'
import PortalComponent from './PortalComponent'

const Header = () => {
  const [showModal, setShowModal] = useState(true);
  return (
    <header>
      <Menu/>
      { showModal && 
      <PortalComponent onClose={()=>setShowModal(false)}>Hi this is content of modal</PortalComponent> }
    </header>
  )
}

export default Header

