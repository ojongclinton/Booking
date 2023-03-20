import React from 'react'



function CustomImagePositioned({image,top,left,bottom,right,height,width,text}) {
    const style={
        position:'absolute',
        height:`${height}`,
        width:`${width}`,
        backgroundImage:`url(${image})`,
        top:`${top}`,
        left:`${left}`,
        right:`${right}`,
        bottom:`${bottom}`,
        backgroundSize:'contain',
        backgroundRepeat:'no-repeat'

    }
  return (
    <div style={{...style}}>

    </div>
  )
}

export default CustomImagePositioned
