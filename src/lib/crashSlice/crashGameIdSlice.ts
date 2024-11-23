import {createSlice} from "@reduxjs/toolkit";

interface ICrashGameId {
    gameId: number
}

const initialState: ICrashGameId ={
    gameId: 0
}

export const crashGameIdSlice = createSlice({
    name: 'crashGameId',
    initialState,
    reducers: {
        setGameId: (state, {payload}) => {
            state.gameId = payload
        }
    },
})

export const {
    setGameId
} = crashGameIdSlice.actions

