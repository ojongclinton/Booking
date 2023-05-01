/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx,css } from '@emotion/react'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion,AccordionSummary,AccordionActions, AccordionDetails } from '@mui/material'

const accStyle = css `
    margin:3px 0px;

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


function MoreInfo({shldMention=[],pets=[],childBeds=[],others=[]}) {
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
            <Accordion style={{backgroundColor:"#f7f7f7",borderRadius:"0px",boxShadow:"none",width:"90%"}} css={accStyle}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} 
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                        <h2>Child and Beds</h2>
                </AccordionSummary>
                <AccordionDetails>
                    {childBeds.body.map((bod,index)=>{
                        return (
                            <p>{bod}</p>
                        )
                    })}
                </AccordionDetails>
            </Accordion>
        </div>
        <div>
            <Accordion style={{backgroundColor:"#f7f7f7",borderRadius:"0px",boxShadow:"none",width:"90%"}} css={accStyle}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                        <h2>Pets</h2>
                </AccordionSummary>
                <AccordionDetails>
                    {pets.body.map((bod,index)=>{
                        return(
                            <p>{bod}</p>
                        )
                    })}
                </AccordionDetails>
            </Accordion>
        </div>
        <div>
            <Accordion style={{backgroundColor:"#f7f7f7",borderRadius:"0px",boxShadow:"none",width:"90%"}} css={accStyle}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <h2>We should mention !</h2>
                </AccordionSummary>
                <AccordionDetails>
                    {shldMention.body.map((bod,index)=>{
                        return(
                            <p>{bod}</p>
                        )
                    })}
                </AccordionDetails>
            </Accordion>
        </div>
        <div>
        <Accordion style={{backgroundColor:"#f7f7f7",borderRadius:"0px",boxShadow:"none",width:"90%"}} css={accStyle}>
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
