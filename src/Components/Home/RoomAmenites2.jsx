import React from 'react'

const amenities = [
    {
        smallTitle:"our Food",
        bigTitle:"Restaurant Silo",
        description:"Proin massa augue, lacinia at blandit ac, fringilla scelerisque tortor. Mauris sit amet lectus porta,",
        picture:"feature-1.jpg",
        direction:"PT"
    },
    {
        smallTitle:"our Food",
        bigTitle:"Restaurant Silo",
        description:"Proin massa augue, lacinia at blandit ac, fringilla scelerisque tortor. Mauris sit amet lectus porta,",
        picture:"feature-2.jpg",
        direction:"TP"
    }
]

const PictureText=({amenity})=>{
    return(
        <div>

        </div>
    )
}
const TextPicture=({amenity})=>{
    return(
        <div>
            
        </div>
    )
}

function RoomAmenites2() {
  return (
    <div>
        <PictureText />
        <TextPicture />
    </div>
  )
}

export default RoomAmenites2
