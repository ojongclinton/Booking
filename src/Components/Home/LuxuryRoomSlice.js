import { apiSlice } from "../../store/api/apiSlice";

const consoleData=(data)=>{
    console.log(data)
}

export const extendedApiSlice = apiSlice.injectEndpoints({
    endpoints:builder=>({
        getProducts: builder.query({
            query:()=>'/products',
            providesTags:(results,error,arg) =>[
                {type:'product',id:'LIST'},
                ...results.products.map(result=>({type:'product',id:result.id}))
            ],
            
        }),
        getFiltered:builder.mutation({
            query:(body)=>{
                    const passedBody = {...body}
                    delete passedBody["type"]
                    // console.log(body)
                return ({
                url:'/properties/v2/list',
                method:'POST',
                body:passedBody

            })},
            transformResponse:(result,ruery,arg)=>{
                console.log("Currently Here")
                console.log(result)
            },
            providesTags:(result,query,arg) =>[arg.type]

        }),
    })
})

export const {
    
    useGetFilteredMutation
} = extendedApiSlice
