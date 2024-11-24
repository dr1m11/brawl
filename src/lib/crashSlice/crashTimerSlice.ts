import {createSlice} from "@reduxjs/toolkit";

interface ICrashTimer{
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    timer: any
}

const initialState: ICrashTimer ={
    timer: ''
}

export const crashTimerSlice = createSlice({
    name: 'crashTimer',
    initialState,
    reducers: {
        setTimer: (state, {payload}) => {
            state.timer = payload
        }
    },
})

export const {
    setTimer
} = crashTimerSlice.actions

