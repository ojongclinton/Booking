import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import {BiErrorCircle} from 'react-icons/bi'

function Loading() {
  return (
    <div style={{display:'flex',justifyContent:'space-around'}}>
        <CircularProgress color="success" />
    </div>
  )
}

export const Error=()=>{
    return(
        <div style={{display:'flex',flexDirection:'column',gap:'20px',alignItems:'center'}}>
            
                <h3>An Error occured and the Data could not be Loaded!</h3>
                <BiErrorCircle size={60} color='red'/>
            
        </div>
    )
}
export default Loading
