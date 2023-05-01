import { Routes,Route } from "react-router-dom";
import SingleAmenityController from "./SingleAmenityController";
import Test from "../Test";
import PropertyOffers from "../Offers/PropertyOffers";

const Amenity = ()=>{
    return(
        <Routes>
            <Route path="/" element={<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti qui sint quod, ab pariatur aliquam tempore numquam inventore, adipisci placeat sunt laborum maiores aut! Magni aperiam ad reiciendis ullam!</p>}/>
            <Route path="/property/:id" element={<SingleAmenityController/>}/>
            <Route path="/property/:id/offers" element={<PropertyOffers/>}/>

        </Routes>
    )
}

export default Amenity
