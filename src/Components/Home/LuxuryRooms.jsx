/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx,css } from '@emotion/react'
import React, { useState,useEffect, useContext } from 'react'
import { CSSTransition,TransitionGroup } from 'react-transition-group'
import './Home.css'
import { useGetFilteredMutation } from './LuxuryRoomSlice'
import LuxurySingleRoom from '../SingleItems/LuxuryRoom/LuxurySingleRoom'
import Loading,{Error} from '../SingleItems/Loading/Loading'
import { deepSearchReplace,deleteEmptyKeys } from '../SingleItems/Other/Functions'
import { MediaQueryContext } from '../../Hooks/MediaQueryContext'



const curerrentDate = new Date()
const hotelTypeBody = {
  currency: "USD",
  eapid: 1,
  locale: "en_US",
  siteId: 300000001,
  checkInDate: {
    day: curerrentDate.getDate(),
    month: curerrentDate.getMonth() + 1,
    year: curerrentDate.getFullYear()
  },
  checkOutDate: {
    day: curerrentDate.getDate() + 2,
    month: curerrentDate.getMonth() + 1,
    year: curerrentDate.getFullYear()
  },
  rooms: [
      {
          adults: 2,
          children: [
              {
                  age: 5
              },
              {
                  age: 7
              }
          ]
      }
  ],
  resultsStartingIndex: 0,
  resultsSize: 200,
  sort: "PRICE_LOW_TO_HIGH",
  filters: {
      price: {
          max: 150,
          min: 100
      }
  }
}

function LuxuryRooms() {
    const media = useContext(MediaQueryContext)
    const roomTypes = ['Popular','Luxory','Suites','Family','Single']
    const [fetchData,{data,status,error,isLoading,isError,isSuccess}] = useGetFilteredMutation()
    const [roomType,setRoomType] = useState(roomTypes[0])
    const [allRooms,setRooms] = useState();


    const typeStyle = css`
      display:${media.DT?'flex':'grid'};
      justify-content:space-between;
      grid-template-columns:${media.TB?'1fr 1fr 1fr 1fr 1fr':media.BP?'1fr 1fr 1fr 1fr':'1fr 1fr 1fr'};
      width:${media.DT?'auto':'fit-content'};
      margin:${media.DT?'unset':'auto'};
    `

    const parentContainer = css `
      display:${media.DT?'flex':'block'};
      justify-content:space-between;
    `

    const handleRoomChange =(e)=>{
      let selectedType = e.target.innerText
      setRoomType(selectedType)
      
    }

    useEffect(()=>{
      fetchData(hotelTypeBody)
      setRooms(data)
    },[])

    useEffect(()=>{
      const abortSignal = new AbortController()

      switch(roomType){
        case('Popular'):
          let copy1 = {...hotelTypeBody,type:"Popular"}
          copy1 = deleteEmptyKeys(copy1)
          fetchData(copy1)
          break;

        case('Luxory'):
          let copy2 = {...hotelTypeBody,type:"luxory"}
          copy2 = deepSearchReplace(copy2,'star',["40","50"])
          copy2 = deleteEmptyKeys(copy2)
          fetchData(copy2)
          break;

        case('Suites'):
          let copy3 = {...hotelTypeBody,type:"Suites"}
          copy3 = deepSearchReplace(copy3,'bedroomFilter',["0"]);
          copy3 = deleteEmptyKeys(copy3)
          fetchData(copy3)
          break;

        case('Family'):
           let copy4 = {...hotelTypeBody,type:"family"}
           copy4 = deepSearchReplace(copy4,'adults',3)
           copy4.rooms[0].children = [{age:10},{age:10}]
           copy4 = deepSearchReplace(copy4,'travelerType',["FAMILY"])
           copy4 = deleteEmptyKeys(copy4)
           fetchData(copy4)
         
         break;
        case('Single'):
          let copy5 = {...hotelTypeBody,type:"single"}
          copy5 =  deepSearchReplace(copy5,'adults',1)
          copy5 = deleteEmptyKeys(copy5)
          fetchData(copy5)
          break;

      }
      return () => {
        abortSignal.abort()
      }
    },[roomType])

    let content

    if(isLoading){
      content = <Loading />
    }
    else if (isError){
      content = <Error/>
    } else if(isSuccess){
      console.log(data)
      if(data && data!=null && data.data.propertySearch.properties.length > 0 ){
        const criteriaResults =  data.data.propertySearch.properties
        content = 
        <div>
          <TransitionGroup className='theGroup'>
        {criteriaResults.map((room,index)=>{
          return(
            <CSSTransition key={index} timeout={300} classNames="item">
              <LuxurySingleRoom room={room} />
            </CSSTransition>
          )
        })}
        </TransitionGroup>

        </div>
      }
      else isError = true;
    }

  return (
  <div>
      <div css={parentContainer}>
        <div>
          <div className='tex3t-div' style={{textAlign:media.DT?'unset':'center'}}>
          <p className='small gold'>Deluxe And Luxury</p>
          <h2>Our Luxury Rooms</h2>
          </div>
        </div>
        <div css={typeStyle}>
          {
          roomTypes.map(room=>(
          <div key={room} onClick={handleRoomChange} className={room===roomType?'luxury-room-type type-active':'luxury-room-type'}>
            <p>{room}</p>
            <div></div>
          </div>
          ))}
        </div>
      </div>
      <div >
        <p>{roomType}</p>
          {content}
      </div>

  </div>
  )
}

export default LuxuryRooms
