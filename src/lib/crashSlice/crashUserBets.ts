import {createSlice} from "@reduxjs/toolkit";

export type TUsersBets = {
    index: number
    player_id: string
    player_nickname: string
    player_photo: number
    user_multiplier: number
    winning: number
    amount: number
}

interface ICrashUsersBets {
    usersBets: TUsersBets[] | null
}

const initialState: ICrashUsersBets ={
    usersBets: null
}

export const crashUsersBetsSlice = createSlice({
    name: 'crashUsersBets',
    initialState,
    reducers: {
        setUsersBets: (state, {payload}) => {
            state.usersBets = payload
        }
    },
})

export const {
    setUsersBets
} = crashUsersBetsSlice.actions

