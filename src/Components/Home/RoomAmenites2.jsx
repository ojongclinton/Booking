/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import React from 'react'
import back1 from '../../assets/pictures/amenity2/feature-1.jpg'
import back2 from '../../assets/pictures/amenity2/feature-2.jpg'
import back3 from '../../assets/pictures/amenity2/feature-3.jpg'
import back4 from '../../assets/pictures/amenity2/feature-4.jpg'
import Button from '../SingleItems/Button/Button'

const amenities = [
    {
        smallTitle:"Our Food",
        bigTitle:"Restaurant Silo",
        description:"Proin massa augue, lacinia at blandit ac, fringilla scelerisque tortor. Mauris sit amet lectus porta,",
        picture:back1,
        direction:"PT"
    },
    {
        smallTitle:"Read Our Books",
        bigTitle:"The Library",
        description:"Proin massa augue, lacinia at blandit ac, fringilla scelerisque tortor. Mauris sit amet lectus porta,",
        picture:back2,
        direction:"TP"
    },
    {
        smallTitle:"Fitness Equipment",
        bigTitle:"Exercise equipment",
        description:"Proin massa augue, lacinia at blandit ac, fringilla scelerisque tortor. Mauris sit amet lectus porta,",
        picture:back3,
        direction:"PT"
    },
    {
        smallTitle:"Experiences",
        bigTitle:"Swimming Pool",
        description:"Proin massa augue, lacinia at blandit ac, fringilla scelerisque tortor. Mauris sit amet lectus porta,",
        picture:back4,
        direction:"TP"
    }
]

const parentDiv=css`
    margin-bottom:100px;
    padding:90px 0px;
    display:flex;
    gap:50px;
    position:relative;
    & h1 {
        color:white;
        font-weight:500;
        font-size:40px;
        line-height:60px;
    }
    & p:not(.gold) {
        color:white;
        line-height:26px;
        font-weight:400;
        margin-bottom:70px !important;
    }
    & p,h1{
        margin-bottom:20px !important;
    }

    & button {
        display:none;
    }

    &::before{
        content:'';
        position: absolute;
        top:0px;
        left:0px;
        height:100%;
        width:90%;
        background-color:#0e1317;
        left:10%;
    }
`
const textDiv = css`
width:400px;
padding:30px;
z-index:1;
`

const PictureText=({amenity})=>{
    const pictureDiv = css`
        height:350px;
        width:550px;
        background-image:url(${back1});
        background-position:center;
        background-repeat:no-repeat;
        z-index:1;        
`

    return(
        <div css={parentDiv}>
            <div css={pictureDiv}>
            </div>
            <div css={textDiv}>
                <p className='gold'>{amenity.smallTitle}</p>
                <h1>{amenity.bigTitle}</h1>
                <p>{amenity.description}</p>
                <Button text='READ MORE' width='fit-content'/>
            </div>
        </div>
    )
}
const TextPicture=({amenity})=>{
    const pictureDiv = css`
    height:350px;
    width:550px;
    background-image:url(${back1});
    background-position:center;
    background-repeat:no-repeat;
    z-index:1;        
`
const style =css `
    &::before{
        width:90% !important;
        left:0px !important;
    }
`
    return(
        <div css={[parentDiv,style]}>
            <div css={textDiv}>
                <p className='gold'>{amenity.smallTitle}</p>
                <h1>{amenity.bigTitle}</h1>
                <p>{amenity.description}</p>
                <Button text='READ MORE' width='fit-content'/>
            </div>
            <div css={pictureDiv}>
            </div>
        </div>
    )
}

function RoomAmenites2() {
  return (
    <div>
        {amenities.map(amenityObj=>{
            if(amenityObj.direction == "TP"){
                return(
                    <TextPicture amenity={amenityObj}/>
                )
                }
            else if(amenityObj.direction == "PT"){
                return(
                    <PictureText amenity={amenityObj}/>
                )
            }
        })}
    </div>
  )
}

export default RoomAmenites2
