import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux'
import { apiSlice } from "./apiSlice";
import leaderboardSlice from './leaderboard';
import playerSlice  from "./player";

const store = configureStore({
    reducer: {
        leaderboard: leaderboardSlice,
        player: playerSlice,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),

})

export type RootState = ReturnType<typeof store.getState>
export default store;