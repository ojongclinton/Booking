/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx,css } from '@emotion/react'
import React, { useEffect,useContext } from 'react'
import { useParams } from 'react-router-dom'
import { useGetSingleAmenityMutation } from './SingleAmenitySlice';
import Loading, { Error } from '../SingleItems/Loading/Loading';
import SingleAmenity from './SingleAmenity';
import bacPick from '../../assets/pictures/page-banner-6.jpg'
import { Rating } from '@mui/material';
import { amenData2 } from './amenData2';
import {MdLocationCity} from 'react-icons/md'
import { MediaQueryContext } from '../../Hooks/MediaQueryContext';


function SingleAmenityController() {
  const medias = useContext(MediaQueryContext)
  const {id} = useParams();
  const selectedData = amenData2.find(amend=>amend.data.propertyInfo.summary.id == id.toString())
  const requestBody = {
    currency: "USD",
    locale: "en_US",
    propertyId: `${id}`
  }

  let content;
  
  const [getAmenity,{data,isError,isLoading,isSuccess}] = useGetSingleAmenityMutation();

  useEffect(()=>{
    const controll = new AbortController()
    getAmenity(requestBody)

    return()=>{
      controll.abort()
    }
  },[])

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

const contentContainer = css `
  margin:${medias.DT || medias.TB? "100px 50px": "10px"};
`

if(isError){
  content = 
  <div>
      <div css={picHeader}>
        <div css={picContent}>
        </div>
      </div>
      <div css={contentContainer}>
        <Error />
      </div>
  </div>
} else if (isLoading){
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
}else if(isSuccess && data!=null && data?.data?.propertyInfo != null){
  content = 
  <div>
  <div css={picHeader}>
    <div css={picContent}>
      <h1>{data.data.propertyInfo.summary.name}</h1>
      <Rating readOnly value={data.data.propertyInfo.summary.overview.propertyRating.rating}/>
    </div>
  </div>
  <div css={contentContainer}>
  <SingleAmenity selectedData={data}/>
  </div>
</div>
} else{
  content = 
  <div>
  <div css={picHeader}>
    <div css={picContent}>
    </div>
  </div>
  <div css={contentContainer}>
    <Error />
  </div>
</div>
}

  return (
    <div>{content}</div>
  )
}

export default SingleAmenityController
