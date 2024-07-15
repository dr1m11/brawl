import {createSlice} from "@reduxjs/toolkit";

interface initialStateInterface {
    nickname: string | null
    balance: number | null
    id: string
}

const initialState: initialStateInterface = {
    nickname: null,
    balance: null,
    id: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setNickname: (state, {payload}) => {
            state.nickname = payload
        },
        setBalance: (state, {payload}) => {
            state.balance = payload
        },
        setId: (state, {payload}) => {
            state.id = payload
        }
    }
})

export const {
    setNickname,
    setBalance,
    setId,
} = userSlice.actions