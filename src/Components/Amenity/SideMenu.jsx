/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx,css } from '@emotion/react'
import { Select,MenuItem } from '@mui/material'
import React, { useContext, useState } from 'react'
import Button from '../SingleItems/Button/Button'
import { MediaQueryContext } from '../../Hooks/MediaQueryContext'
import { Link } from 'react-router-dom'

let objectDate = new Date();

function SideMenu({id,coordinates}) {

let initial = {
    currency: "USD",
    eapid: 1,
    locale: "en_US",
    propertyId: id,
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
            children: []
        },
        {
            adults: 1,
            children: []
        }
    ]
}

const [dataObj,setDataObgj] = useState(initial)

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
    setDataObgj(prev=>({
      ...prev, ...prev.checkInDate.day= chkInvalue.getDate()
    }))
    setDataObgj(prev=>({
      ...prev,...prev.checkInDate.month = chkInvalue.getMonth() + 1
    }))
    setDataObgj(prev=>({
      ...prev,...prev.checkInDate.year = chkInvalue.getFullYear()
    }))

  }
  const handleCheckOut =(e)=>{
    let value = e.target.value;
    value = value.toString()

    setChkOut(value)
    let chkOutvalue = new Date(e.target.value)

    setDataObgj(prev=>({
      ...prev,...prev.checkOutDate.day = chkOutvalue.getDate()
    }))
    setDataObgj(prev=>({
      ...prev,...prev.checkOutDate.month = chkOutvalue.getMonth() + 1
    }))
    setDataObgj(prev=>({
      ...prev,...prev.checkOutDate.year = chkOutvalue.getFullYear()
    }))
  }
  const handleChil = (e)=>{
    let value = e.target.value;
    setChldrn(value)

    const childObj = {
      age:8
    }

    for(let i = 0 ; i <= value-1 ; i++){
      setDataObgj(prev=>({...prev,...prev.rooms[0].children.push(childObj)}))
    }
  }
  const handleAdlt = (e)=>{
    let value = e.target.value;
    setAdults(value)
    setDataObgj(prev=>({...prev,...prev.rooms[0].adults = value}))
    setDataObgj(prev=>({...prev,...prev.rooms[1].adults = value}))

  }

  return (
    <div css={parentContainer} className='sticky-side-bar-selection'>
      <h2 style={{marginBottom:"10px",padding:"5px",borderBottom:"1px solid #b89146"}}>Book Now</h2>
            <div>
              <p>Check-in date</p>
              <input required type="date" value={checkIn} onChange={handleCheckin}/>
            </div>
            <div>
              <p>Check-out date</p>
              <input required type="date" value={checkOut} onChange={handleCheckOut}/>
            </div>
          <div>
            <p>Number of adults</p>
          <Select required value={adlts} onChange={handleAdlt} fullWidth style={{fontWeight:700,fontSize:'14px'}}>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
          </Select>
          </div>
          <div>
            <p>Number of children(Below 10)</p>
          <Select required value={chldr} onChange={handleChil} fullWidth style={{fontWeight:700,fontSize:'14px'}}>
                    <MenuItem value={0}>0</MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
          </Select>
          </div>
          <div style={{margin:"10px 0px"}}>
            <Link to="./offers" state={dataObj}>
              <Button to='#0e1317' textFrom='white' text='Check availability' />
            </Link>

          </div>
          
    </div>
  )
}

export default SideMenu
