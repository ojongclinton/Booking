/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx,css } from '@emotion/react'

import React from 'react'
import { offersData } from './offMock'
import SingleOffer from './SingleOffer'

function RoomOffers({offers}) {
  return (
    <div>
        {offers.data.propertyOffers.units.map((offer,index)=>{
            return(
                <SingleOffer offerData = {offer} key={index}/>
            )
        })}
    </div>
  )
}

export default RoomOffers
