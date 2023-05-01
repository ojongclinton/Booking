/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx,css } from '@emotion/react'
import React,{useContext} from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion,AccordionSummary,AccordionDetails } from '@mui/material'
import { MediaQueryContext } from '../../Hooks/MediaQueryContext';


function MoreInfo({shldMention=[],pets=[],childBeds=[],others=[]}) {

const medias = useContext(MediaQueryContext)
const accStyle = css `
    margin:3px 0px;
    background-color:#f7f7f7;
    box-shadow:none;
    width:100%;
    & h2{
        font-size:20px;
        line-height:20px;
        font-weight:500;
        color:#0E1317;
    }
     & p{
        padding:5px;
     }
`


let longAmenities = [];

others.forEach(other=>{
    other.contents.forEach(item=>{
        item.items.forEach(single=>{
            if(single.text.length >= 100){
                longAmenities.push(single.text)
            }
        })
    })
})

  return (
<div>
        <div>
            <Accordion css={accStyle}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} 
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                        <h2>Child and Beds</h2>
                </AccordionSummary>
                <AccordionDetails>
                    {childBeds?.body?.map((bod,index)=>{
                        return (
                            <p key={index}>{bod}</p>
                        )
                    })}
                </AccordionDetails>
            </Accordion>
        </div>
        <div>
            <Accordion css={accStyle}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                        <h2>Pets</h2>
                </AccordionSummary>
                <AccordionDetails>
                    {pets?.body?.map((bod,index)=>{
                        return(
                            <p key={index}>{bod}</p>
                        )
                    })}
                </AccordionDetails>
            </Accordion>
        </div>
        <div>
            <Accordion css={accStyle}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <h2>We should mention !</h2>
                </AccordionSummary>
                <AccordionDetails>
                    {shldMention?.body?.map((bod,index)=>{
                        return(
                            <p key={index}>{bod}</p>
                        )
                    })}
                </AccordionDetails>
            </Accordion>
        </div>
        <div>
        <Accordion css={accStyle}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <h2>Others</h2>
                </AccordionSummary>
                <AccordionDetails>
                    {longAmenities.map((single,index)=>{
                        return(
                            <p key={index}>{single}</p>
                        )
                    })}
                </AccordionDetails>
            </Accordion>
        </div>
</div>
  )
}

export default MoreInfo
