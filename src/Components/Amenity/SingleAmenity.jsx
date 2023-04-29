/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx,css } from '@emotion/react'
import { Grid } from '@mui/material'
import React from 'react'
import { amenData2 } from './amenData2'

const InfoContainer = css `
color:#0E1317;
    & h1.tag{
        font-size:30px;
        font-weight:500;
    }
`

function SingleAmenity({amenityData}) {
  return (
    <div>
        <Grid container spacing={2}>
            <Grid item lg={3} xl={3} md={3} sm={12} xs={12}>
            <div>

            </div>
            </Grid>
            <Grid item lg={9} xl={9} md={9} sm={12} xs={12}>
            <div css={InfoContainer}>
                <h1 className='tag'>{amenData2.data.propertyInfo.summary.tagline}</h1>
            </div>
            </Grid>
        </Grid>
    </div>
  )
}

export default SingleAmenity
