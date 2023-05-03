/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx,css } from '@emotion/react'
import {Grid} from '@mui/material'
import React,{useContext} from 'react'
import { amenData2 } from './amenData2'
import { useParams } from 'react-router-dom'
import { generateRandom } from '../SingleItems/Other/Functions'
import PropertyAmenity from './PropertyAmenity'
import { DisplayImages } from './DisplayImages'
import MoreInfo from './MoreInfo'
import SideMenu from './SideMenu'
import {ImEarth} from 'react-icons/im'
import {GrMapLocation} from 'react-icons/gr'
import {BiCurrentLocation} from 'react-icons/bi'
import { MediaQueryContext } from '../../Hooks/MediaQueryContext'

const countryData = require('country-data');

function SingleAmenity({selectedData}) {

const medias = useContext(MediaQueryContext)
const {id} = useParams()

const InfoContainer = css `
width:90%;
color:#0E1317;
margin:${medias.DT || medias.TB?"unset":"auto"};
    & h1.tag{
        font-size:${medias.DT || medias.TB?"30px":"25px"};
        text-align:${medias.DT || medias.TB?"unset":"center"};
        font-weight:500;
        margin-bottom:30px;
    }

    & p {
        line-height:25px;
        font-size:16px
    }
`
    // const selectedData = amenData2.find(amend=>amend.data.propertyInfo.summary.id == id.toString())
  return (
    <div>
        <Grid container spacing={2}>
            <Grid item lg={3} xl={3} md={3} sm={12} xs={12}>
            <div style={{position:"sticky",top:140}}>
                <SideMenu 
                    id={selectedData?.data?.propertyInfo?.summary.id}
                    coordinates = {selectedData?.data?.propertyInfo?.summary.location.coordinates}
                    />
            </div>
            </Grid>
            <Grid item lg={9} xl={9} md={9} sm={12} xs={12}>
            <div css={InfoContainer}>
                <h1 className='tag'>{selectedData?.data?.propertyInfo?.summary.tagline}</h1>
                <Grid container spacing={3} style={{marginBottom:'15px'}}>
                    <Grid item >
                    <div style={{display:"flex",gap:"10px"}}>{/*Location details section*/}
                    <BiCurrentLocation style={{color:"#b89146"}}/> <p style={{marginTop:"-3px"}}>{selectedData.data.propertyInfo.summary.location.address.addressLine}</p>
                </div>
                    </Grid>
                    <Grid item>
                    <div style={{display:"flex",gap:"10px"}}>{/*Location details section*/}
                    <ImEarth style={{color:"#b89146"}}/> <p style={{marginTop:"-3px"}}>{countryData.countries[selectedData.data.propertyInfo.summary.location.address.countryCode].name}</p>
                </div>
                    </Grid>
                </Grid>
                <div>
                    <p>{selectedData.data.propertyInfo.propertyContentSectionGroups.aboutThisProperty.sections[0].bodySubSections[0].elements[0].items[0].content.text}</p>
                </div>
                <div>{/*Images (4 images)*/}
                    <DisplayImages imgList={selectedData.data.propertyInfo.propertyGallery.images}/>
                </div>
                
                <h1 className='tag'>Special check-in instructions</h1>
                <div>
                    {selectedData.data.propertyInfo.summary.policies.checkinInstructions.map((ins,index)=>{
                        return(
                            <p style={{marginBottom:'10px'}} key={index}>{ins}</p>
                        )
                    })

                    }
                </div>
                <h1 className='tag' style={{marginBottom:"10px"}}>{selectedData.data.propertyInfo.summary.policies.needToKnow.title}</h1>
                <div>
                    {selectedData.data.propertyInfo.summary.policies.needToKnow.body.map((inf,index)=>{
                        return(
                            <p key={index} style={{whiteSpace:'pre-wrap',lineHeight:'20px',fontSize:'15px'}}>{inf.replace( /(<([^>]+)>)/ig, "\n")}</p>
                        )
                    })}
                </div>
                <div style={{margin:"10px 0px",borderTop:'1px solid #E7E7E8',padding:'10px 0px'}}>
                    {selectedData.data.propertyInfo.summary.amenities.amenities.map((amen,index)=>{
                        return(
                            <PropertyAmenity amen={amen} key={index}/>
                        )
                    })}
                </div>
                <MoreInfo 
                childBeds = {selectedData.data.propertyInfo.summary.policies.childAndBed}
                pets = {selectedData.data.propertyInfo.summary.policies.pets}
                shldMention = {selectedData.data.propertyInfo.summary.policies.shouldMention}
                others = {selectedData.data.propertyInfo.summary.amenities.amenities}
            />
            </div>
            
            </Grid>
        </Grid>
    </div>
  )
}

export default SingleAmenity

