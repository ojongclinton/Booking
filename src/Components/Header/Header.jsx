import React, { useEffect } from 'react'
import './Header.css'
import Button from '../SingleItems/Button/Button'
import {GiMountaintop} from 'react-icons/gi'
import Sign from './Sign/Sign'

function Header() {

  const [scroll,setScroll] = React.useState('absolute')
  useEffect(() => {
    const handleScroll = (e) => {
      setScroll(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={scroll>300?'sticky-box flex-arn flex-cnt':'header-box flex-arn flex-cnt'}>
      <div className='flex-arn flex-cnt'>
        <GiMountaintop size={40} />
        <p className='logo'>WeMove</p>
      </div>
      <div>
        <div className='links'>
          <Sign text='Home'/>
          <Sign text='Pages'/>
          <Sign text='Room'/>
          <Sign text='Blog'/>
          <Sign text='Contact'/>
        </div>
      </div>
      <div>
        {/* <button>BOOK NOW <AiOutlineArrowRight/></button> */}
        <Button text='BOOK NOW'/>
      </div>
    </div>
  )
}

export default Header
