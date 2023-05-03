import { apiSlice } from "../../store/api/apiSlice";

export const extendedApiSlice = apiSlice.injectEndpoints({
    endpoints:builder=>({
        
        getPropertyOffers:builder.mutation({
            query:(body)=>{

                console.log("Logging the body of property offers mutation !")
                console.log(body)
                return ({
                url:'/properties/v2/get-offers',
                method:'POST',
                body:body
            })},
        }),
    })
})

export const {
    useGetPropertyOffersMutation
} = extendedApiSlice
