import { createSlice } from "@reduxjs/toolkit";
import { IPlayer } from "../typings";
import type { PayloadAction } from '@reduxjs/toolkit'

export const playerSlice = createSlice({
    name: "player",
    initialState: {
        selectedPlayer: {} as IPlayer
    },
    reducers: {
        setSelectedPlayer: (state, action: PayloadAction<IPlayer>) => {
            state.selectedPlayer = action.payload;
        }
    }
});

export const { setSelectedPlayer } = playerSlice.actions
export default playerSlice.reducer
