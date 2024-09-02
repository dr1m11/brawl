import {createSlice} from "@reduxjs/toolkit";
import {IUser} from "@/utils/types";

interface initialInterface {
    isPaymentSelected: boolean
    value: string | number
    promo: string
}

const initialState: initialInterface ={
    isPaymentSelected: false,
    value: '',
    promo: '',
}

export const paymentSlice = createSlice({
    name: 'payment',
    initialState,
    reducers: {
        setIsPaymentSelected: (state, {payload}) => {
            state.isPaymentSelected = payload
        },
        setValue: (state, {payload}) => {
            state.value = payload
        },
        setPromo: (state, {payload}) => {
            state.promo = payload
        },
        reset: (state) => {
            state.isPaymentSelected = false
            state.value = ''
        }
    },
})

export const {
    setIsPaymentSelected,
    setValue,
    reset,
    setPromo
} = paymentSlice.actions