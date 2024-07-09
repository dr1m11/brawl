import {createSlice} from "@reduxjs/toolkit";

interface CrashInterface {
    bet: number
    user: string
    socketEvent: CrashGameInterface
    isBetSet: boolean
}

interface CrashGameInterface {
    status: "Running" | "Crashed" | "Pending"
    multiplier: number
    time_before_start: number
    length: number
    rotate: number
    game_id: number
}

const initialState: CrashInterface ={
    bet: 0,
    user: '',
    socketEvent: {
        time_before_start: 5,
        multiplier: 2,
        status: "Pending",
        length: 0,
        rotate: 0,
        game_id: 0
    },
    isBetSet: false,
}

export const crashSlice = createSlice({
    name: 'crash',
    initialState,
    reducers: {
        setBet: (state, {payload}) => {
            state.bet = payload
        },
        setSocketEvent: (state, {payload}) => {
            state.socketEvent = payload
        },
        setUser: (state, {payload}) => {
            state.user = payload
        },
        setIsBetSet: (state, {payload}) => {
            state.isBetSet = payload
        }
    },
    selectors: {
        selectBet: (state) => state.bet,
        selectUser: (state) => state.user,
        selectSocketEvent: (state) => state.socketEvent,
        selectIsBetSet: (state) => state.isBetSet,
    }
})

export const {
    setBet,
    setSocketEvent,
    setUser,
    setIsBetSet
} = crashSlice.actions
export const {
    selectBet,
    selectUser,
    selectSocketEvent,
    selectIsBetSet
} = crashSlice.selectors

