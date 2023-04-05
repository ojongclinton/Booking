import { apiSlice } from "../../store/api/apiSlice";

const consoleData=(data)=>{
    console.log(data)
}

export const extendedApiSlice = apiSlice.injectEndpoints({
    endpoints:builder=>({
        
        getFiltered:builder.mutation({
            query:(body)=>{
                    const passedBody = {...body}
                    delete passedBody["type"]
                    console.log(body)
                return ({
                url:'/properties/v2/list',
                method:'POST',
                body:passedBody

            })},
            providesTags:(result,query,arg) =>[arg.type]

        }),
    })
})

export const {
    
    useGetFilteredMutation
} = extendedApiSlice
