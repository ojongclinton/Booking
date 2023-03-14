import React from 'react'
import styles from './Button.module.css'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

function Button({text='submit',from='#b89146',to='white'}) {
const [hover,setHover] = React.useState(false);


    const btnStyleDiv={
        display:'flex',
        gap:'8px',
        background:`linear-gradient(to right, white 50%, ${from} 50%)`,
        backgroundSize: '230% 80%',
        backgroundPosition:hover?'left bottom':'right bottom',
        alignItems:'center',
        padding:'15px 40px',
        cursor:'pointer',
        transition: 'all .5s ease-out'
    }

    const inner = {
        transition: 'all .6s ease-out',
        color:hover?'black':to,
    }
  return (
    <div style={{...btnStyleDiv}} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
        <a style={{...inner}}>{text} <HiOutlineArrowNarrowRight style={{position:'relative',top:'2px',left:'5px'}}/></a>
        {/*  */}
    </div>
  )
}

export default Button
