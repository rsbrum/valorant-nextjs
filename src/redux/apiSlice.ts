import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//"https://react-app-9574d-default-rtdb.firebaseio.com/meetups.json",
export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.henrikdev.xyz",
        credentials: "same-origin",
    }),
    endpoints: (builder) => ({
        getLeaderboardInfo: builder.query<any, void>({
            query: (arg) => {
                return {
                    url: `/valorant/v2/leaderboard/eu`
                }
            }
        }),
        getPlayerByUuid: builder.query<any, { uuid: string }>({
            query: (arg) => {
                let { uuid } = arg;
                return {
                    url: `/valorant/v1/by-puuid/account/${uuid}`
                }
            }
        }),
        getMatchesByPlayer: builder.query<any, { region: string, name: string, tag: string }>({
            query: (arg) => {
                let { region, name, tag } = arg;
                return {
                    url: `/valorant/v3/matches/${region}/${name}/${tag}`
                }
            }
        })
    })
})

export const {
    useGetLeaderboardInfoQuery,
    useGetPlayerByUuidQuery,
    useGetMatchesByPlayerQuery
} = apiSlice;
