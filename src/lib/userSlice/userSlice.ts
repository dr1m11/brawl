import {createSlice} from "@reduxjs/toolkit";

interface initialStateInterface {
    nickname: string | null
    balance: number | null
}

const initialState: initialStateInterface = {
    nickname: null,
    balance: null
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
        }
    }
})

export const {
    setNickname,
    setBalance
} = userSlice.actions