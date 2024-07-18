import {createSlice} from "@reduxjs/toolkit";
import {IGun} from "@/services/case/case.types";

interface initialStateInterface {
    username: string | null
    balance: number | null
    id: string
    email: string
    is_active: boolean
    items: IGun[]
    photo: string
    best_item?: IGun
}

const initialState: initialStateInterface = {
    username: null,
    balance: null,
    id: '',
    email: '',
    best_item: null,
    photo: '',
    is_active: false,
    items: [],
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUsername: (state, {payload}) => {
            state.username = payload
        },
        setBalance: (state, {payload}) => {
            state.balance = payload
        },
        setId: (state, {payload}) => {
            state.id = payload
        },
        setUser: (state, {payload}) => {
            state.username = payload.username
            state.balance = payload.balance
            state.id = payload.id
            state.photo = `https://raw.githubusercontent.com/tomikartemik/brawler_avatars/main/image_${payload.photo}.jpg`
            state.items = payload.items
            state.email = payload.email
            state.best_item = payload.best_item
            state.is_active = payload.is_active
        }
    }
})

export const {
    setUsername,
    setBalance,
    setId,
    setUser
} = userSlice.actions