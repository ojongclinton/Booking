import { Routes,Route } from "react-router-dom";
import SingleAmenityController from "./SingleAmenityController";

const Amenity = ()=>{
    return(
        <Routes>
            <Route path="/" element={<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti qui sint quod, ab pariatur aliquam tempore numquam inventore, adipisci placeat sunt laborum maiores aut! Magni aperiam ad reiciendis ullam!</p>}/>
            <Route path="/property/:id" element={<SingleAmenityController/>}/>
        </Routes>
    )
}

export default Amenity
