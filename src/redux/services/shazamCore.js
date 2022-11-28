import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


export const shazamCoreApi = createApi({
reducerPath: 'shazamCoreApi',
baseQuery: fetchBaseQuery({
    baseUrl:'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders:(headers) => {
        headers.set('X-RapidAPI-Key', 'cb9d57820amsh071d3fece3dbe5fp124bb9jsn20887519e01c');
        return headers;
    },
 }),
 endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () =>
    '/charts/world'}),
 }),
});
export const{
    useGetTopChartsQuery,
} = shazamCoreApi;