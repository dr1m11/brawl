import {createSlice} from "@reduxjs/toolkit";

interface ICrashMultiplier {
    multiplier: number
}

const initialState: ICrashMultiplier ={
    multiplier: 0
}

export const crashMultiplierSlice = createSlice({
    name: 'crashMultiplier',
    initialState,
    reducers: {
        setMultiplier: (state, {payload}) => {
            state.multiplier = payload
        }
    },
})

export const {
    setMultiplier
} = crashMultiplierSlice.actions

