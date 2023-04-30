/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx,css } from '@emotion/react'
import { Grid } from '@mui/material'
import React from 'react'
import { amenData2 } from './amenData2'
import { useParams } from 'react-router-dom'
import { generateRandom } from '../SingleItems/Other/Functions'

import PropertyAmenity from './PropertyAmenity'
import { DisplayImages } from './DisplayImages'


const InfoContainer = css `
width:90%;
color:#0E1317;
    & h1.tag{
        font-size:30px;
        font-weight:500;
        margin-bottom:30px;
    }

    & p {
        line-height:25px;
        font-size:16px
    }
`

function SingleAmenity({amenityData}) {
const {id} = useParams()

    const selectedData = amenData2.find(amend=>amend.data.propertyInfo.summary.id == id.toString())
  return (
    <div>
        <Grid container spacing={2}>
            <Grid item lg={3} xl={3} md={3} sm={12} xs={12}>
            <div>

            </div>
            </Grid>
            <Grid item lg={9} xl={9} md={9} sm={12} xs={12}>
            <div css={InfoContainer}>
                <h1 className='tag'>{selectedData.data.propertyInfo.summary.tagline}</h1>
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
                            <p key={index} style={{whiteSpace:'pre-wrap',lineHeight:'14px',fontSize:'15px'}}>{inf.replace( /(<([^>]+)>)/ig, "\n")}</p>
                        )
                    })}
                </div>
                <div style={{margin:"10px 0px",borderTop:'1px solid #E7E7E8',padding:'10px 0px'}}>
                    {selectedData.data.propertyInfo.summary.amenities.amenities.map((amen,index)=>{
                        return(
                            <PropertyAmenity amen={amen}/>
                        )
                    })}
                </div>
            </div>
            </Grid>
        </Grid>
    </div>
  )
}

export default SingleAmenity

