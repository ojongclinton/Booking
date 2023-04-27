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
    const [allRooms,setRooms] = useState([]);


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
      let isUnfetched = true;

      fetchData(hotelTypeBody)

      return()=>{
        isUnfetched = false;
      }
    },[])

    useEffect(()=>{
      const abortSignal = new AbortController()

      switch(roomType){
        case('Popular'):
        setRooms(prev=>{
          return prev.slice(0,3)
        })
          break;

        case('Luxory'):
        setRooms(prev=>{
          return prev.slice(3,6)
        })
          break;

        case('Suites'):
        setRooms(prev=>{
          return prev.slice(2,5)
        })
          break;

        case('Family'):
        setRooms(prev=>{
          return prev.slice(4,9)
        })
         break;
        case('Single'):
        setRooms(prev=>{
          return prev.slice(9,prev.length)
        })
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
      if(data && data!=null && data?.data?.propertySearch?.properties?.length > 0 ){
        const criteriaResults =  data.data.propertySearch.properties
        setRooms(criteriaResults)
        content = 
        <div>
          <TransitionGroup className='theGroup'>
        {allRooms.map((room,index)=>{
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
