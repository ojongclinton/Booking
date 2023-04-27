import { apiSlice } from "../../store/api/apiSlice";

const consoleData=(data)=>{
    console.log(data)
}

export const extendedApiSlice = apiSlice.injectEndpoints({
    endpoints:builder=>({
        
        getFiltered:builder.mutation({
            query:(body)=>{
                    const passedBody = {...body}
                    console.log("currently here")
                    console.log(passedBody)
                return ({
                url:'/properties/v2/list',
                method:'POST',
                body:passedBody

            })},
        }),
    })
})

export const {
    
    useGetFilteredMutation
} = extendedApiSlice
