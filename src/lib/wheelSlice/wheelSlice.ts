import {createSlice} from "@reduxjs/toolkit";

interface WheelInterface {
    bet: number
    user: string
    socketEvent: WheelGameInterface
    isBetSet: boolean
    userCell: number
    userBets: UserBetsInterface
    history: HistoryInterface[]
    isModalOpen: boolean
}

interface HistoryInterface {
    id: number
    win_cell: number | string
}

interface UserBetsInterface {
    main_amount: number
    bet2: BetInterface[] | null
    bet3: BetInterface[] | null
    bet5: BetInterface[] | null
    bet10: BetInterface[] | null
    bet100: BetInterface[] | null
}

export interface BetInterface {
    amount: number
    player_nickname: string
}

interface WheelGameInterface {
    status: "Running" | "End" | "Pending"
    multiplier: number
    time_before_start: number
    length: number
    rotate: number
    game_id: number
    cell: number
}

const initialState: WheelInterface ={
    bet: 0,
    user: '',
    socketEvent: {
        time_before_start: 5,
        multiplier: 2,
        status: "Pending",
        length: 0,
        rotate: 0,
        game_id: 0,
        cell: 0
    },
    isBetSet: false,
    userCell: 0,
    userBets: {
        main_amount: 0,
        bet3: null,
        bet2: null,
        bet5: null,
        bet10: null,
        bet100: null,
    },
    history: [],
    isModalOpen: false
}

export const wheelSlice = createSlice({
    name: 'wheel',
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
        },
        setUserCell: (state, {payload}) => {
            state.userCell = payload
        },
        setUserBets: (state, {payload}) => {
            state.userBets = payload
        },
        setHistory: (state, {payload}) => {
            state.history = payload
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
        selectCell: (state) => state.socketEvent.cell
    }
})

export const {
    setBet,
    setSocketEvent,
    setUser,
    setIsBetSet,
    setUserCell,
    setUserBets,
    setHistory,
    setIsModalOpen,
} = wheelSlice.actions
export const {
    selectBet,
    selectUser,
    selectSocketEvent,
    selectIsBetSet
} = wheelSlice.selectors