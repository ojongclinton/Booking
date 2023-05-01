/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx,css } from '@emotion/react'
import {BsFillEyeFill,BsFillCreditCard2BackFill} from 'react-icons/bs'
import {FaHotel,FaDog,FaParking,FaUmbrellaBeach,FaStore} from 'react-icons/fa'
import {MdBedroomChild,
        MdElevator,
        MdFreeBreakfast,
        MdCoronavirus,
        MdChildFriendly,
        MdOutlineDesk,
        MdBusinessCenter
      } from 'react-icons/md'
import {GiConfirmed,GiSmokeBomb,GiVacuumCleaner,GiWaterGallon} from 'react-icons/gi'
import {TbAirConditioning} from 'react-icons/tb'
import {IoWifi,IoTvSharp} from 'react-icons/io5'
import {AiOutlineClockCircle} from 'react-icons/ai'
import {BiChild} from 'react-icons/bi'
import {CiAirportSign1} from 'react-icons/ci'
import React from 'react'
import { IconContext } from 'react-icons'
import { Grid } from '@mui/material'


const iconFinder = (text = "none") =>{
  let chosenIcon;
  if(text.includes("glance")){
    chosenIcon = <BsFillEyeFill/>
  }else if(text.includes("property")){
    chosenIcon = <FaHotel/>
  }else if(text.includes("room")){
    chosenIcon = <MdBedroomChild/>
  }else if(text.includes("wifi")){
    chosenIcon = <IoWifi />
  }else if(text.includes("credit")){
  chosenIcon = <BsFillCreditCard2BackFill />
  }else if(text.includes("tv") || text.includes("telev")){
  chosenIcon = <IoTvSharp />
}  else if(text.includes("hour") || text.includes("time")){
  chosenIcon = <AiOutlineClockCircle />
} else if(text.includes("child")){
  chosenIcon = <BiChild />
}else if(text.includes("elevator")){
  chosenIcon = <MdElevator />
}else if(text.includes("food") || text.includes("break")){
  chosenIcon = <MdFreeBreakfast />
}else if(text.includes("pet")){
  chosenIcon = <FaDog />
}else if(text.includes("covid")){
  chosenIcon = <MdCoronavirus />
}else if(text.includes("park")){
  chosenIcon = <FaParking />
}else if(text.includes("infan")){
  chosenIcon = <MdChildFriendly />
}else if(text.includes("condit")){
  chosenIcon = <TbAirConditioning />
}else if(text.includes("desk")){
  chosenIcon = <MdOutlineDesk />
}else if(text.includes("beach") || text.includes("pool")){
  chosenIcon = <FaUmbrellaBeach />
}else if(text.includes("store") || text.includes("shop")){
  chosenIcon = <FaStore />
}else if(text.includes("smok")){
  chosenIcon = <GiSmokeBomb />
}else if(text.includes("busi")){
  chosenIcon = <MdBusinessCenter />
}else if(text.includes("clean") || text.includes("neat") || text.includes("housek")){
  chosenIcon = <GiVacuumCleaner />
}else if(text.includes("water")){
  chosenIcon = <GiWaterGallon />
}else if(text.includes("airport")){
  chosenIcon = <CiAirportSign1 />
}


  else{
    chosenIcon = <GiConfirmed/>;
  }

  return chosenIcon;
}

function PropertyAmenity({amen}) {
  const icon = iconFinder(amen.title.toLowerCase())
  const parentStyle = css`
    
  `
  const titleStyles = css`
    display:flex;
    gap:10px;

    & h2{
      font-size:20px;
      font-weight:500;
      margin-top:-3px;
    }
  `
  const subAmenities= css`
    margin:20px;
  `

  return (
    <IconContext.Provider value={{size: 20, color:'#b89146'}}>
    <div css={parentStyle}>
        <div css={titleStyles}>
          <p>{icon}</p>
          <h2 className='amenTitle'>{amen.title}</h2>
        </div>
    </div>
    <Grid container css={subAmenities} spacing={1}>
      {amen.contents.filter((amen=>amen.items[0].text.length < 100)).map((single,index)=>{
        const subIcon = iconFinder(single.items[0].text.toLowerCase())
        return(
          <Grid item css={titleStyles} xl={4} lg={4} md={6} sm={6} xs={12} key={index}>
            <p>{subIcon}</p>
            <p style={{marginTop:'-3px'}}>{single.items[0].text}</p>
          </Grid>
        )
      })

      }
    </Grid>
    </IconContext.Provider>
  )
}

export default PropertyAmenity
