import {createSlice} from "@reduxjs/toolkit";

interface CrashInterface {
    bet: number
    user: string
    socketEvent: CrashGameInterface
    isBetSet: boolean
    usersBets: PlayerInterface[]
    isAutoBet: boolean
    history: HistoryInterface[]
    isAutoWithdraw: boolean
    isModalOpen: boolean
}

interface HistoryInterface {
    id: number
    win_multiplier: number | string
}

export interface PlayerInterface {
    player_id: string
    player_nickname: string
    amount: number
    winning: number
    user_multiplier: number
    player_photo: number
    index: number
}

interface CrashGameInterface {
    status: "Running" | "Crashed" | "Pending"
    multiplier: number
    timer: number
    game_id: number
    users_bets: PlayerInterface[]
}

const initialState: CrashInterface ={
    bet: 0,
    user: '',
    socketEvent: {
        timer: 5,
        multiplier: 2,
        status: "Pending",
        game_id: 0,
        users_bets: []
    },
    isBetSet: false,
    usersBets: [],
    isAutoBet: false,
    history: [],
    isAutoWithdraw: false,
    isModalOpen: false
}

export const crashSlice = createSlice({
    name: 'crash',
    initialState,
    reducers: {
        setBet: (state, {payload}) => {
            state.bet = payload
            if (!state.bet) {
                state.isAutoBet = false
            }
        },
        setSocketEvent: (state, {payload}) => {
            state.socketEvent = payload
        },
        setUser: (state, {payload}) => {
            state.user = payload
        },
        setIsBetSet: (state, {payload}) => {
            state.isBetSet = payload
        },
        setUsersBets: (state, {payload}) => {
            state.socketEvent.users_bets = payload
        },
        setIsAutoBet: (state, {payload}) => {
            state.isAutoBet = payload
        },
        setHistory: (state, {payload}) => {
            state.history = payload
        },
        setIsAutoWithdraw: (state, {payload}) => {
            state.isAutoWithdraw = payload
        },
        setIsModalOpen: (state, {payload}) => {
            state.isModalOpen = payload
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
    setIsBetSet,
    setUsersBets,
    setIsAutoBet,
    setHistory,
    setIsAutoWithdraw,
    setIsModalOpen,
} = crashSlice.actions

