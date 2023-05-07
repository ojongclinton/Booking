/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx,css } from '@emotion/react'
import React from 'react'
import { Drawer } from '@mui/material'
import {FiMenu} from 'react-icons/fi'
import {MdOutlineCancel} from 'react-icons/md'
import {GiMountaintop} from 'react-icons/gi'
import Sign from './Sign/Sign'


function MobileHeader({scroll}) {
    const [drawer, setDrawer] = React.useState(false)
    const handleDrawer = ()=>{
        setDrawer(prev => !prev)
    }


  return (
    <div className={scroll>200?'sticky-box flex-btw flex-cnt':'header-box flex-btw flex-cnt'}>
      <div className='flex-arn flex-cnt'>
        <GiMountaintop size={40} fill='#b89146'/>
        <p className='logo'>WeMove</p>
      </div>
      <div className='headerButtonContainer'>
        <FiMenu size={40} onClick={handleDrawer}/>
        <Drawer open={drawer} anchor='top'>
                <div className='mobile-drawer-container'>
                    <div className='flex-btw'>
                        <p></p>
                        <MdOutlineCancel size={40} onClick={handleDrawer} fill='#ffffff'/>
                    </div>
                    <div>
                    <Sign text='Home'/>
                    <Sign text='Around me' link='/AroundMe'/>
                    <Sign text='Search' link='/Search'/>
                    <Sign text='ABOUT ME' link='/Contact'/>
                    </div>
                </div>
        </Drawer>
      </div>
    </div>
  )
}

export default MobileHeader
