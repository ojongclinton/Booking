import React from 'react'
import './Home.css'

function LuxuryRooms() {
    const roomTypes = ['All Rooms','Luxory','Single','Small Suite','Family']
    const [roomType,setRoomType] = React.useState(roomTypes[0])
  return (
    <div>
        <div className='flexBtw'>
<div>

</div>
<div className='flexArn'>
    {roomTypes.map(room=>(<p>{room}</p>))}
</div>
        </div>
        <p>{roomType}</p>
    </div>
  )
}

export default LuxuryRooms
