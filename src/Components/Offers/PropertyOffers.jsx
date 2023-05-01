/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx,css } from '@emotion/react'
import React, { useEffect,useContext } from 'react'
import { useGetPropertyOffersMutation } from './offerSlice'
import { useLocation } from 'react-router-dom'
import bacPick from '../../assets/pictures/page-banner-6.jpg'
import Loading, { Error } from '../SingleItems/Loading/Loading'
import { MediaQueryContext } from '../../Hooks/MediaQueryContext'
import RoomOffers from './RoomOffers'

const picHeader = css`
  background-image:url(${bacPick});
  height:400px;
  background-position:center;

  & h1{
    text-align:center;
    font-size:45px;
    color:white;
    font-weight:500;
  }

  &::after{
    content:'';
    width:100%;
    height:400px;
    position:absolute;
    left:0px;
    right:0px;
    background-color:#0E1317;
    opacity:0.8;
  }
`
const picContent = css`
z-index:100;
left:0px;
right:0px;
margin:230px auto;
width:fit-content;
position:absolute;
color:white;
display:flex;
flex-direction:column;
align-items:center;
gap:10px;
`


function PropertyOffers() {
    const medias = useContext(MediaQueryContext)
    const contentContainer = css `
  margin:${medias.DT || medias.TB? "100px 50px": "10px"};
`
    const location = useLocation()
    const dataObject = location.state

    const [getOffers,{data,isLoading,isError,isSuccess}] = useGetPropertyOffersMutation()

    useEffect(()=>{
        const signal = new AbortController()
        getOffers(dataObject)

        return()=>{
            signal.abort()
        }
    },[])

let content;

if (isLoading){
    content = 
<div>
    <div css={picHeader}>
        <div css={picContent}>
            <h1>...</h1>
        </div>
    </div>
    <div css={contentContainer}>
        <Loading />
    </div>
</div>
} else if(isError){
    content =  
    <div>
    <div css={picHeader}>
        <div css={picContent}>
            <h1>Hotel Offers</h1>
        </div>
    </div>
    <div css={contentContainer}>
    <RoomOffers offers = {data}/>
    </div>
</div>
{/* <div>
    <div css={picHeader}>
        <div css={picContent}>
            <h1></h1>
        </div>
    </div>
    <div css={contentContainer}>
        <Error />
    </div>
</div> */}
} else if(isSuccess && data!=null && data?.data?.units.length > 0){
    content = <RoomOffers offers = {data}/>
}else{

}

  return (
    <div>{content}</div>
  )
}

export default PropertyOffers
