import { createSlice } from "@reduxjs/toolkit";
import { ILeaderboardItem } from "../typings";
import type { PayloadAction } from '@reduxjs/toolkit'

export const leaderboardSlice = createSlice({
    name: "leaderboard",
    initialState: {
        leaderboardItems: [] as ILeaderboardItem[],
        allLeaderboardItems: [] as ILeaderboardItem[]
    },
    reducers: {
        concatLeaderboardItems: (state, action: PayloadAction<ILeaderboardItem[]>) => {
            state.leaderboardItems = state.leaderboardItems.concat(action.payload as ILeaderboardItem[]);
        },
        setAllLeaderboardItems: (state, action: PayloadAction<ILeaderboardItem[]>) => {
            state.allLeaderboardItems = state.leaderboardItems.concat(action.payload as ILeaderboardItem[]);
        }
    }
});

export const { concatLeaderboardItems, setAllLeaderboardItems } = leaderboardSlice.actions
export default leaderboardSlice.reducer
