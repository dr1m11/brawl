import {createSlice} from "@reduxjs/toolkit";
import {IUser} from "@/utils/types";

interface initialInterface {
    selectedMethod: {
        id: number
        title: string
    }
    value: string | number
    promo: string
    isCheckModalOpen: boolean
}

const initialState: initialInterface ={
    selectedMethod: null,
    value: '',
    promo: '',
    isCheckModalOpen: false
}

export const paymentSlice = createSlice({
    name: 'payment',
    initialState,
    reducers: {
        setSelectedMethod: (state, {payload}) => {
            state.selectedMethod = payload
        },
        setValue: (state, {payload}) => {
            state.value = payload
        },
        setPromo: (state, {payload}) => {
            state.promo = payload
        },
        setIsCheckModalOpen: (state, {payload}) => {
            state.isCheckModalOpen = payload
        },
        reset: (state) => {
            state.selectedMethod = null
            state.value = ''
            state.isCheckModalOpen = false
        }
    },
})

export const {
    setSelectedMethod,
    setValue,
    reset,
    setPromo,
    setIsCheckModalOpen,
} = paymentSlice.actions