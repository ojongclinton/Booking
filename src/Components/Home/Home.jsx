import React from 'react'
import './Home.css'
import {BsPlayCircle,BsFillCalendarMinusFill} from 'react-icons/bs'
import { Modal,Grid } from '@mui/material'


function Home() {
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
            <Grid xs={3}>
              <div className='image-footer-single-grid flex-btw'>
                <div>
                  <p className='white'>Check in</p>
                  <p className='gold'>mm/dd/yy</p>
                </div>
                <div className='bottom-icon'><BsFillCalendarMinusFill/></div>
              </div>
            </Grid>
            <Grid xs={3}>
              <div className='image-footer-single-grid'>
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, perspiciatis?
              </div>
            </Grid>
            <Grid xs={3}>
              <div className='image-footer-single-grid'>
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, perspiciatis?
              </div>
            </Grid>
            <Grid xs={3}>
              <div className='image-footer-single-grid'>
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, perspiciatis?
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  )
}

export default Home
