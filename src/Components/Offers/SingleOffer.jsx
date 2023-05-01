/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx,css } from '@emotion/react'
import { Grid } from '@mui/material'

import React from 'react'

function SingleOffer({offerData}) {

const parentContainer = css `
    border:1px solid black;
    margin:10px 0px;
`


  return (
    <div css={parentContainer}>
        <div>
            <Grid container spacing={2}>
                {offerData.unitGallery.gallery.map((pic,index)=>{
                    const image = pic.image.url.split('?')[0];
                    const picDiv = css `
                        background-image:url(${image});
                        width:100%;
                        background-position:center;
                        background-size:cover;
                        height:250px;
                    `
                    return(
                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                            <div css={picDiv}>

                            </div>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
        <div>

        </div>
    </div>
  )
}

export default SingleOffer
