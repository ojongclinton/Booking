import { apiSlice } from "../../store/api/apiSlice";

export const extendedApiSlice = apiSlice.injectEndpoints({
    endpoints:builder=>({
        
        getSingleAmenity:builder.mutation({
            query:(body)=>{

                console.log("Logging the body of single amenity mutation !")
                console.log(body)
                return ({
                url:'properties/v2/detail',
                method:'POST',
                body:body
            })},
        }),
    })
})

export const {
    useGetSingleAmenityMutation
} = extendedApiSlice
