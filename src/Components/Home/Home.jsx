import React from 'react'
import './Home.css'
import {BsPlayCircle,BsFillCalendarMinusFill} from 'react-icons/bs'
import {RiArrowDropDownLine} from 'react-icons/ri'
import { Modal,Grid } from '@mui/material'
import Button from '../SingleItems/Button/Button'

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import CustomImagePositioned from '../SingleItems/Other/CustomImagePositioned'
import room1 from '../../assets/pictures/welcome-section/room1.jpg'
import room2 from '../../assets/pictures/welcome-section/room2.jpg'
import LuxuryRooms from './LuxuryRooms'

function Home() {
  const[checkin,setCheckIn] = React.useState("mm/dd/yy")
  const[checkout,setCheckOut] = React.useState("mm/dd/yy")
  const[rooms,setRoom] = React.useState(2)
  const handleCheckin =(e)=>{
    let value = e.target.value;
    value = value.toString()

    setCheckIn(value)
  }
  const handleCheckOut =(e)=>{
    let value = e.target.value;
    value = value.toString()

    setCheckOut(value)
  }
  const handleRoom = (e)=>{
    let value = e.target.value;
    setRoom(value)
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '40%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    border:'none',
    boxSizing:'border-box',
    outline:'none'
  };
  const [open,setOpen] = React.useState(false)
  const handleClick = ()=>{
    setOpen(val=>!val)
  }
  return (
    <div>
      <div className='image-section'>
        <div className='image-text-container'>
          <BsPlayCircle size={130} onClick={handleClick} />
          <h3 className='image-text-line-1'>The Travelling Guidance <span className='image-text-line-2'>you always needed</span></h3>
          <Modal open={open} onClose={handleClick}>
            <div style={style}>
              <iframe width="800" height="400" style={{border:'none'}}
              src="https://www.youtube.com/embed/tgbNymZ7vqY">
              </iframe>
            </div>
          </Modal>
        </div>
        <div className='image-foot-container'>
          <Grid container spacing={0}>
            <Grid item xs={3}>
              <div className='image-footer-single-grid'>
                <div>
                  <p className='white'>Check in</p>
                </div>
                <div className='bottom-icon'>
                    <input type="date" value={checkin} onChange={handleCheckin}/>
                </div>
              </div>
            </Grid>
            <Grid item xs={3}>
            <div className='image-footer-single-grid'>
                <div>
                  <p className='white'>Check out</p>
                </div>
                <div className='bottom-icon'>
                  <input type="date" value={checkout} onChange={handleCheckOut}/>
                </div>
              </div>
            </Grid>
            <Grid item xs={3}>
            <div className='image-footer-single-grid'>
                <div>
                  <p className='white'>Room</p>
                </div>
                <div className='bottom-icon'>
                  <Select size='small' fullWidth value={rooms} onChange={handleRoom}  variant="standard" disableUnderline style={{color:'#b89146',fontWeight:700,fontSize:'14px'}}>
                    <MenuItem value={1}>1 Room</MenuItem>
                    <MenuItem value={2}>2 Rooms</MenuItem>
                    <MenuItem value={3}>3 Rooms</MenuItem>
                    <MenuItem value={4}>4 Rooms</MenuItem>
                  </Select>
                </div>
              </div>
            </Grid>
            <Grid item xs={3}>
            <div className='image-footer-single-grid-button'>
                  <Button text='CHECK NOW' big={true}/>
              </div>
            </Grid>
          </Grid>
        </div>

      </div>
      <div className='section'>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={5}>
              <div className='tex3t-div'>
                <p className='small gold'>Accomodations</p>
                <h2>Welcome Our Hotels And Resorts</h2>
                <p>Savvy travelers are looking for more than just the next destination on the map. They are looking for a memorable experience and to make new friends along the way.</p>
                <Button text='CHECK NOW' width='fit-content' to='#0e1317' textFrom='white'/>
              </div>
            </Grid>
            <Grid item xs={7}>
              <div className='images' style={{position:'relative'}}>
                <CustomImagePositioned 
                  image={room1}
                  height='400px'
                  width='500px'
                  top="85px"
                  left={0}
                  right={0}
                  bottom={0}
                  text="yoooo"
                />
                <CustomImagePositioned 
                  image={room2}
                  height='300px'
                  width='400px'
                  top="0px"
                  left="auto"
                  right="0px"
                  bottom="auto"
                  text="yoooo"
                />
              </div>
            </Grid>
          </Grid>
        </div>
        </div>
        <div className='section greyBack'>
            <LuxuryRooms />
        </div>
    </div>
  )
}

export default Home
