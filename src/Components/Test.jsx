import React,{useContext} from 'react'
import { LocationContext } from '../Hooks/LocationContext'

function Test() {
    const location = useContext(LocationContext)
    const changeDestination = location[1]
    const handleClick = ()=>{
        changeDestination('THis is the updated data ')
        console.log(location[0])
    }
  return (
    <div style={{paddingTop:'400px'}}>
        <p>THe value gotten is in the console</p>
        <button onClick={handleClick}>
            change
        </button>
    </div>
  )
}

export default Test
