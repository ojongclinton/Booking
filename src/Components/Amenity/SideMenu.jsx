/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx,css } from '@emotion/react'
import { Select,MenuItem } from '@mui/material'
import React, { useContext, useState } from 'react'
import Button from '../SingleItems/Button/Button'
import { MediaQueryContext } from '../../Hooks/MediaQueryContext'

let objectDate = new Date();

function SideMenu({id,coordinates}) {
console.log(coordinates)

let dataObj = {
    currency: "USD",
    eapid: 1,
    locale: "en_US",
    propertyId: "9209612",
    checkInDate: {
        day: objectDate.getDate(),
        month: objectDate.getMonth() + 1,
        year: objectDate.getFullYear()
    },
    checkOutDate: {
      day: objectDate.getDate(),
      month: objectDate.getMonth() + 2,
      year: objectDate.getFullYear()
    },
    destination: {
        coordinates: {
            latitude: coordinates.latitude,
            longitude: coordinates.longitude
        }
    },
    rooms: [
        {
            adults: 1,
            children: [
                
            ]
        },
        {
            adults: 1,
            children: []
        }
    ]
}

  const medias = useContext(MediaQueryContext)

  const parentContainer = css `
  padding:20px;
  border:1px solid #E7E7E8;
  max-width:400px;
  width:${medias.DT || medias.TB?"unset":"fit-content"};
  margin:auto;
`
  const [checkIn,setChkin] = useState("mm/dd/yy")
  const [checkOut,setChkOut] = useState("mm/dd/yy")
  const [adlts,setAdults] = useState(dataObj.rooms[0].adults)
  const [chldr,setChldrn] = useState(0)

  const handleCheckin =(e)=>{
    let value = e.target.value;
    value = value.toString()
    setChkin(value)

    let chkInvalue = new Date(e.target.value)
    dataObj.checkInDate.day = chkInvalue.getDate()
    dataObj.checkInDate.month = chkInvalue.getMonth() + 1
    dataObj.checkInDate.year = chkInvalue.getFullYear()
  }
  const handleCheckOut =(e)=>{
    let value = e.target.value;
    value = value.toString()

    setChkOut(value)
    let chkOutvalue = new Date(e.target.value)
    dataObj.checkOutDate.day = chkOutvalue.getDate()
    dataObj.checkOutDate.month = chkOutvalue.getMonth() + 1
    dataObj.checkOutDate.year = chkOutvalue.getFullYear()
  }
  const handleChil = (e)=>{
    let value = e.target.value;
    setChldrn(value)

    const childObj = {
      age:8
    }

    for(let i =0;i<=value-1;i++){
      dataObj.rooms[0].children.push(childObj)
    }
  }
  const handleAdlt = (e)=>{
    let value = e.target.value;
    setAdults(value)

    dataObj.rooms[0].adults = value;
    dataObj.rooms[1].adults = value;

    console.log(dataObj)
  }

  return (
    <div css={parentContainer} className='sticky-side-bar-selection'>
      <h2 style={{marginBottom:"10px",padding:"5px",borderBottom:"1px solid #b89146"}}>Book Now</h2>
            <div>
              <p>Check-in date</p>
              <input type="date" value={checkIn} onChange={handleCheckin}/>
            </div>
            <div>
              <p>Check-out date</p>
              <input type="date" value={checkOut} onChange={handleCheckOut}/>
            </div>
          <div>
            <p>Number of adults</p>
          <Select value={adlts} onChange={handleAdlt} fullWidth disableUnderline style={{fontWeight:700,fontSize:'14px'}}>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
          </Select>
          </div>
          <div>
            <p>Number of children(Below 10)</p>
          <Select value={chldr} onChange={handleChil} fullWidth  disableUnderline style={{fontWeight:700,fontSize:'14px'}}>
                    <MenuItem value={0}>0</MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
          </Select>
          </div>
          <div style={{margin:"10px 0px"}}>
          <a href='lol.com'>
            <Button to='#0e1317' textFrom='white' text='Check availability' />
          </a>
          </div>
          
    </div>
  )
}

export default SideMenu
