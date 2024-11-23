import {createSlice} from "@reduxjs/toolkit";

interface ICrashStatus {
    status: 'Pending' | 'Running' | 'Crashed'
}

const initialState: ICrashStatus ={
    status: 'Pending'
}

export const crashStatusSlice = createSlice({
    name: 'crashStatus',
    initialState,
    reducers: {
        setStatus: (state, {payload}) => {
            state.status = payload
        }
    },
})

export const {
    setStatus
} = crashStatusSlice.actions

