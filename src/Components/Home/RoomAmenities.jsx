/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { css } from '@emotion/react'
import React from 'react'
import {MdWifiPassword} from 'react-icons/md'
import {TbMapSearch} from 'react-icons/tb'
import {GiMagicBroom} from 'react-icons/gi'


const styles = css`
    display:flex;
    gap:20px;
    width:350px;

    h4{
        line-height:25px;
        font-size:20px;
        color:#333334;
    }
    p{
        line-height:26px;
        color:#333334;
    }
    .ammenityIcon{
        display:flex;
        justify-content:space-around;
        align-items:center;
        width:200px;
        border-radius:50%;
        background-color:#eeeeee;
    }
`

const amenities = [
    {
        name:"Room Cleaning",
        icon:<GiMagicBroom size={35} color='#b89146'/>,
        description:"Proin massa augue, lacinia at blandit ac, fringilla scelerisque tortor"
    },
    {
        name:"Room Wifi",
        icon:<MdWifiPassword size={35} color='#b89146'/>,
        description:"Proin massa augue, lacinia at blandit ac, fringilla scelerisque tortor"
    },
    {
        name:"Pickup & Drop",
        icon:<TbMapSearch size={35} color='#b89146'/>,
        description:"Proin massa augue, lacinia at blandit ac, fringilla scelerisque tortor"
    }
]

function RoomAmenities() {
  return (
    <div className='flex-btw'>
        {amenities.map((amenitiy,index)=>{
            return(
                <div css={styles}>
                    <div className='ammenityIcon'>
                        {amenitiy.icon}
                    </div>
                    <div>
                        <h4>{amenitiy.name}</h4>
                        <p>{amenitiy.description}</p>
                    </div>
                </div>
                )
        })}
    </div>
  )
}

export default RoomAmenities
