import { apiSlice } from "../../store/api/apiSlice";

export const extendedApiSlice = apiSlice.injectEndpoints({
    endpoints:builder=>({
        getProducts: builder.query({
            query:()=>'/products',
            providesTags:(results,error,arg) =>[
                {type:'product',id:'LIST'},
                ...results.products.map(result=>({type:'product',id:result.id}))
            ],
            
        }),
        getLuxuryRooms:builder.query({}),
        getSmallSuites:builder.query({}),
        getFamilyRooms:builder.query({}),
        getSingleRooms:builder.query({}),
    })
})

export const {
    useGetProductsQuery
} = extendedApiSlice
