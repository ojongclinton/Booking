import React, { useState,useEffect } from 'react'
import { CSSTransition,TransitionGroup } from 'react-transition-group'
import './Home.css'
import { useGetFilteredMutation } from './LuxuryRoomSlice'
import LuxurySingleRoom from '../SingleItems/LuxuryRoom/LuxurySingleRoom'
import Loading,{Error} from '../SingleItems/Loading/Loading'
import { deepSearchReplace,deleteEmptyKeys } from '../SingleItems/Other/Functions'




const curerrentDate = new Date()
const hotelTypeBody = {
  eapid: 1,
  locale: "en_US",
  siteId: 300000001,
  destination: {
      regionId: "6054439"
  },
  checkInDate: {
      day: curerrentDate.getDate(),
      month: curerrentDate.getMonth() + 1,
      year: curerrentDate.getFullYear()
  },
  checkOutDate: {
      day: curerrentDate.getDate() + 10,
      month: curerrentDate.getMonth() + 1,
      year: curerrentDate.getFullYear()
  },
  rooms: [
      {
          adults: 1,
          children:[]
      }
  ],
  resultsStartingIndex: 0,
  resultsSize: 5,
  sort: "PRICE_LOW_TO_HIGH",
  filters: {
      price: {
          max: 5000,
          min: 500
      }
  },
  lodging:[],
  amenities:[],
  mealPlan:[],
  travelerType:[],
  bedroomFilter:[],
  star:[]
}

function LuxuryRooms() {
    const roomTypes = ['Popular','Luxory','Small Suite','Family','Single']
    const [fetchData,{data,status,error,isLoading,isError,isSuccess}] = useGetFilteredMutation()

    const [roomType,setRoomType] = useState(roomTypes[0])


    const handleRoomChange =(e)=>{
      let selectedType = e.target.innerText
      setRoomType(selectedType)
      
    }

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

        case('Small Suite'):
          let copy3 = {...hotelTypeBody,type:"small suite"}
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
      <div className='flex-btw'>
        <div>
          <div className='tex3t-div'>
          <p className='small gold'>Deluxe And Luxury</p>
          <h2>Our Luxury Rooms</h2>
          </div>
        </div>
        <div className='flex-btw'>
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
