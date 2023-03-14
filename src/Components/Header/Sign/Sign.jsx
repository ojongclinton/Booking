import React from 'react'
import {HiPlusSm} from 'react-icons/hi'
import {TbMinus} from 'react-icons/tb'
import './Sign.css'

function Sign({text='Default'}) {
    const [hover,setHover] = React.useState(false)
    const divStyle ={
        color:hover?'#b89146':'white',
        transition:'.3s',
        cursor:'pointer',
    }
  return (
    <div onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} style={{...divStyle}} >
        <a style={{fontSize:'18px'}}>{text}
        {hover?<TbMinus size={13} style={{position:'relative',top:'2px',left:'5px'}} className='keyChange'/>:
        <HiPlusSm size={13} style={{position:'relative',top:'2px',left:'3px'}} className='keyChange'/>}
        </a>
    </div>
  )
}

export default Sign
