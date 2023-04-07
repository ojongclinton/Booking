import React from 'react'
import './Home.css'
import {BsPlayCircle} from 'react-icons/bs'
import { Modal } from '@mui/material'



function VideoSection() {
    const [open,setOpen] = React.useState(false)
    const handleClick = ()=>{
      setOpen(val=>!val)
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

  return (
    <div className='videoContainer'>
        <div className='videoContainerContent'>
            <div className='videcoContainerText'>
                <h2>Book hotel rooms, get deals & book flights online.</h2>
            </div>
            <div>
             <BsPlayCircle size={130} onClick={handleClick} />
            </div>
            <Modal open={open} onClose={handleClick}>
            <div style={style}>
              <iframe width="800" height="400" style={{border:'none'}} title='video play'
              src="https://www.youtube.com/embed/tgbNymZ7vqY">
              </iframe>
            </div>
            </Modal>
        </div>
    </div>
  )
}

export default VideoSection
