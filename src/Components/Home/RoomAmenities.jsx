/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { css } from '@emotion/react'
import {MdWifiPassword} from 'react-icons/md'
import {TbMapSearch} from 'react-icons/tb'
import {GiMagicBroom} from 'react-icons/gi'
import { MediaQueryContext } from '../../Hooks/MediaQueryContext'
import { useContext } from 'react'


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
    const medias = useContext(MediaQueryContext)

    const parentContainer = css `
        display:${medias.DT?"flex":"unset"};
        justify-content:space-between;
    `

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

  return (
    <div css={parentContainer}>
        {amenities.map((amenitiy,index)=>{
            return(
                <div css={styles} key={index}>
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
