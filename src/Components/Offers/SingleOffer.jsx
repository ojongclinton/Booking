/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx,css } from '@emotion/react'
import { Grid,Accordion,AccordionSummary,AccordionDetails } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React,{useContext} from 'react'
import { MediaQueryContext } from '../../Hooks/MediaQueryContext';
import {IoIosExpand} from 'react-icons/io'
import {AiOutlineCheckSquare} from 'react-icons/ai'

function SingleOffer({offerData}) {

const medias = useContext(MediaQueryContext)
const parentContainer = css `
    border:1px solid #E7E7E8;
    margin:10px 0px;
    padding:5px;
    & h1{
        font-size:${medias.DT || medias.TB?"25px":"25px"};
        text-align:${medias.DT || medias.TB?"unset":"center"};
        font-weight:500;
        margin-bottom:20px;
    }

    & strong , b{
        color:#b89146;
    }
`
const accStyle = css `
    box-shadow:unset;
    border;none;

    & p{
        line-height:30px;
    }
    
`
const image = offerData.unitGallery.gallery[0].image.url.split('?')[0];
console.log(image)

const picStyle = css `
    height:250px;
    background-image:url(${image});
    background-size:cover;
    background-color:#0e1317;
    background-position:center;
    width:100%;
`
const contentStyle =css `
    padding:10px 0px;
`

  return (
    <div css={parentContainer}>
        <div>
            <div>
            <Grid container spacing={2}>
                        <Grid item xl={3} lg={3} md={6} sm={12} xs={12}>
                            <div css={picStyle}>

                            </div>
                        </Grid>
                        <Grid item xl={9} lg={9} md={6} sm={12} xs={12}>
                            <div css={contentStyle}>
                                <h1 className='tag'>{offerData.header.text}</h1>
                                <Grid container gap={1}>

                                {offerData.roomAmenities.bodySubSections[0].contents.map((content,index)=>{
                                    return(
                                        <Grid item xl={5} lg={5} md={5} sm={12} xs={12}>
                                            <div style={{display:"flex",gap:"5px",margin:"0px 0px"}}>
                                             <p><AiOutlineCheckSquare color='#b89146' size={20}/></p>
                                             <p> {content.header.text} : {content.items[0].content.text.replace( /(<([^>]+)>)/ig, "- ")} </p>
                                            </div>
                                            {/* <div dangerouslySetInnerHTML={{__html:content.items[0].content.text}}></div> */}
                                        </Grid>
                                        )
                                    })}
                                    </Grid>
                            </div>
                        </Grid>
                    </Grid>
            </div>
            <Accordion css={accStyle}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <div style={{display:"flex",gap:"15px"}}>
                        <IoIosExpand size={30} color='#b89146'/>
                        <h1 style={{marginBottom:"0px"}}>Read More</h1>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        <div dangerouslySetInnerHTML={{__html:offerData.description}}></div>
                    </div>
                    <Accordion css={accStyle} >
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} >More Pictures</AccordionSummary>
                        <AccordionDetails>
                            <Grid container spacing={2}>
                                {
                                    offerData.unitGallery.gallery.map((pic,index)=>{
                                        let img=pic.image.url.split('?')[0];
                                        const morePicStyle = css`
                                            background-image:url(${img});
                                            height:300px;
                                            width:100%;
                                            background-size:cover;
                                            background-repeat:no-repeat;
                                            margin:auto;
                                        `
                                        return(
                                            <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
                                                <div css={morePicStyle}>

                                                </div>
                                            </Grid>
                                        )
                                    })
                                }
                            </Grid>
                        </AccordionDetails>
                    </Accordion>
                </AccordionDetails>
            </Accordion>
        </div>
        <div>

        </div>
    </div>
  )
}

export default SingleOffer
