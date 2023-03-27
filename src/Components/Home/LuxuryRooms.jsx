import React from 'react'
import './Home.css'

function LuxuryRooms() {
    const roomTypes = ['All Rooms','Luxory','Single','Small Suite','Family']

      const bookingTemp =[
        {
          name:'All Rooms',
          rooms:[{},{},{},{}]
        },
        {
          name:'Luxury Rooms',
          rooms:[{},{},{},{}]
        },
        {
          name:'Single',
          rooms:[{},{},{},{}]
        },
        {
          name:'Small Suite',
          rooms:[{},{},{},{}]
        },
        {
          name:'Family',
          rooms:[{},{},{},{}]
        }
      ]
    const [roomType,setRoomType] = React.useState(roomTypes[0])
    const handleRoomChange =(selectedRoom)=>{
      setRoomType(roomTypes[roomTypes.indexOf(selectedRoom)])
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
          <div key={roomTypes.indexOf(room)} onClick={()=>handleRoomChange(room)} className={room===roomType?'luxury-room-type type-active':'luxury-room-type'}>
            <p>{room}</p>
          </div>
          
          ))}
        </div>
      </div>
  {/* <p>{roomType}</p> */}
  </div>
  )
}

export default LuxuryRooms
