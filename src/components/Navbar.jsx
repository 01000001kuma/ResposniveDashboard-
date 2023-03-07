import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri'; 
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile } from '.'
import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position='BottomCenter' >
    <button type='button' onClick={customFunc} style={{ color }} className='relative text-xl rouded-full p-3 hover:bg-light-gray' >
      <spam style={{ background: dotColor}} className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2' >
        {icon}
      </spam>
    </button>
  </TooltipComponent>
)

const Navbar = () => {
  const { activeMenu, setActiveMenu } = useStateContext();
  
  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
        <NavButton title = 'Menu' customFunc = {() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} icon = {<AiOutlineMenu />} color = 'blue' />

      <div className='flex'>
        <NavButton title = 'Cart' customFunc = {() => handleClick('cart')} icon = {<FiShoppingCart  />} color = 'blue' />
        <NavButton title = 'Chat' dotColor='#03C9D7' customFunc = {() => handleClick('chat')} icon = {<BsChatLeft  />} color = 'blue' />
        <NavButton title = 'Notification' dotColor='#03C9D7' customFunc = {() => handleClick('notification')} icon = {<RiNotification3Line  />} color = 'blue' />
        <TooltipComponent
          content = 'Profile'
          position = 'BottomCenter'
        >

          <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg' onClick={() => handleClick('userProfile')} >
            <img src={avatar} alt='avatar' className='w-8 h-8 rounded-full' />
            <p>
              <span className='text-gray-400 text-14' >Hi, </span>{' '}
              <span className='text-gray-400 font-bold m1-1 text-14'>Michael</span>
            </p>
            <MdKeyboardArrowDown className='text-gray-400 text-14' />

          </div>

        </TooltipComponent>
      </div>

    </div>
  )
}

export default Navbar;