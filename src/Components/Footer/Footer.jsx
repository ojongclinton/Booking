import React, { useContext } from 'react'
import './Footer.css'
import {GiMountaintop} from 'react-icons/gi'
import {FaFacebookF,FaInstagram,FaTwitter,FaLinkedin} from 'react-icons/fa'
import {MdLocationPin} from 'react-icons/md'
import {BsFillEnvelopePaperFill,BsFillTelephoneFill} from 'react-icons/bs'
import Button from '../SingleItems/Button/Button'
import { Grid } from '@mui/material'
import { MediaQueryContext } from '../../Hooks/MediaQueryContext'



function Footer() {
  const medias = useContext(MediaQueryContext)
  return (
    <div className='footerDivContainer'>
      <Grid container spacing={1} className='footerFirstSection'>
        <Grid item xl={3} lg={3} md={4} sm={12} xs={12}>
          <div style={{display:'flex',gap:'5px'}}>
            <GiMountaintop size={40}/>
            <h2 style={{marginTop:'5px',color:"#b89146"}}>WEMOVE</h2>
          </div>
          <p>Phasellus nisi sapien, rutrum placerat sapien eu, rhoncus tempus</p>
          <div className='iconsLinksDiv'>    
            <a href=""><FaFacebookF /></a>
            <a href=""><FaInstagram /></a>
            <a href=""><FaTwitter /></a>
            <a href=""><FaLinkedin /></a>
          </div>
        </Grid>
        <Grid item xl={3} lg={3} md={4} sm={12} xs={12}>
          <h2>Information</h2>
          <div className='infoIconsDiv'>
            <p> <MdLocationPin fill='#b89146' size={25}/> Terminus Odza, Yaounde </p>
            <p> <BsFillEnvelopePaperFill fill='#b89146' size={25}/>Sheyenoh123@gmail.com</p>
            <p> <BsFillTelephoneFill fill='#b89146' size={25}/>(+237) 6 52 30 39 43</p>
          </div>
        </Grid>
        <Grid item xl={3} lg={3} md={4} sm={12} xs={12}>
          <h2>Page Links</h2>
          <p><a href="">Room Cleaning</a></p>
          <p><a href="">Car parking</a></p>
          <p><a href="">Swimming Pool</a></p>
          <p><a href="">Fitness Gym</a></p>
        </Grid>
        <Grid item xl={3} lg={3} md={4} sm={12} xs={12}>
          <h2>Subscribe</h2>
          <input type="email" placeholder='example@email.com'/>
          <button>SUBSCRIBE</button>
        </Grid>
      </Grid>
      <div className='footerSecondSection'>
          <div>
            <p>Copyright © 2023 <span>Booking</span>  Website by <span>Ojong</span></p>
            <div>
              <a href="">FAQ</a>
              <a href="">Terms Of Use</a>
              <a href="">Privacy Policy</a>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Footer
