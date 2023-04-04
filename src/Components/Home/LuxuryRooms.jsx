import { Grid,Slide } from '@mui/material'
import React, { useState,useEffect } from 'react'
import { CSSTransition,TransitionGroup } from 'react-transition-group'
import './Home.css'
import { useGetFilteredMutation } from './LuxuryRoomSlice'
import LuxurySingleRoom from '../SingleItems/LuxuryRoom/LuxurySingleRoom'

const curerrentDate = new Date()
//Deep Search algorithm!
const deepSearchReplace = (target,keySearched,replaceValue) => {
  if (typeof target === 'object') {
      for (let key in target) {
        if(Array.isArray(target[key]) && key ===keySearched){
            target[key] = replaceValue
        }
          else if (typeof target[key] === 'object') {
            deepSearchReplace(target[key],keySearched,replaceValue);
          } else {
              if (key === keySearched) {
                  target[key] = replaceValue
              }

          }
      }
  }
  return target
}

const deleteEmptyKeys = (target)=>{
  if (typeof target === 'object') {
    for (let key in target) {
      if(Array.isArray(target[key]) && target[key].length == 0){
          delete target[key]
      }
      else if(Array.isArray(target[key]) && target[key].length > 0){
        deepSearchReplace(target[key]);
      }
        else if (typeof target[key] === 'object') {
          if(Object.entries(target[key]).length == 0 ){
            delete target[key]
          }
          else{
            deepSearchReplace(target[key]);
          }
        }
    }
}
return target
}

let hotelTypeBody = {
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
      }
  ],
  resultsStartingIndex: 0,
  resultsSize: 200,
  sort: "PRICE_LOW_TO_HIGH",
  filters: {
      price: {
          max: 5000,
          min: 500
      }
  },
  lodging:[],
  amenities:[],
  bedroomFilter:[],
  mealPlan:[],
  travelerType:[],
  bedroomFilter:[],
  star:[]
}

const testRoomChange = [
  {id:1,name:"Luxory 1",cate:"Luxory",price:"",height:200,width:400},
  {id:2,name:"Luxory 2",cate:"Luxory",price:"",height:200,width:400},
  {id:5,name:"Small Suite 2",cate:"Small Suite",price:"",height:200,width:400},
  {id:8,name:"Family 1",cate:"Family",price:"",height:200,width:400},
  {id:12,name:"Family 2",cate:"Family",price:"",height:200,width:400},

]

function LuxuryRooms() {
    const roomTypes = ['All Rooms']
    const [fetchData,{data,status,error,isLoading,isError}] = useGetFilteredMutation()

    testRoomChange.forEach(room=>{
      if(!roomTypes.includes(room.cate)){
        roomTypes.push(room.cate)
      }
    })
    const [roomType,setRoomType] = useState(roomTypes[0])
    const [selectedRoomData,setRoomData] = useState(testRoomChange) 

    const handleRoomChange =(e)=>{
      let selectedType = e.target.innerText
      setRoomType(selectedType)

      if(selectedType === 'All Rooms'){
        setRoomData(testRoomChange)
      }else{
        const data = testRoomChange.filter(room=>room.cate === selectedType)
        setRoomData(data)
      }
      
    }

    useEffect(()=>{
      const abortSignal = new AbortController()
      
      switch(roomType){
        case('All Rooms'):
          let copy1 = {...hotelTypeBody,type:"all rooms"}
          copy1 = deleteEmptyKeys(copy1)
          fetchData(copy1)
          break;

        case('Luxory'):
          let copy2 = {...hotelTypeBody,type:"luxory"}
          copy2 = deleteEmptyKeys(copy2)
          fetchData(deepSearchReplace(copy2,'star',["40","50"]))
          break;

        case('Small Suite'):
          let copy3 = {...hotelTypeBody,type:"small suite"}
          copy3 = deleteEmptyKeys(copy3)
          fetchData(deepSearchReplace(copy3,'bedroomFilter',["0"]))
          break;

        case('Family'):
           let copy4 = {...hotelTypeBody,type:"family"}
           copy4 = deepSearchReplace(copy4,'adults',3)
           copy4 = deepSearchReplace(copy4,'children',[{age:10},{age:10}])
           copy4 = deleteEmptyKeys(copy4)
           copy4 = deepSearchReplace(copy4,'travelerType',["FAMILY"])
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

let content;

if(isLoading){
  content = <div> <p></p></div>
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
        <div >
          <TransitionGroup className='theGroup'>
        {selectedRoomData.slice(0,3).map((room,index)=>{
          return(
            <CSSTransition key={room.id} timeout={100} classNames="item">
              <LuxurySingleRoom text={room.name} />
            </CSSTransition>
          )
        })}
        {selectedRoomData.slice(3,6).map((room,index)=>{
          return(
            <CSSTransition key={room.id} timeout={100} classNames="item">
              <LuxurySingleRoom text={room.name} />
            </CSSTransition>
          )
        })}
        </TransitionGroup>
        </div>
        
      </div>

  </div>
  )
}

export default LuxuryRooms
