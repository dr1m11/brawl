import {createSlice} from "@reduxjs/toolkit";
import {IUser} from "@/utils/types";

interface initialInterface {
    isPaymentSelected: boolean
    value: string | number
}

const initialState: initialInterface ={
    isPaymentSelected: false,
    value: ''
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
        reset: (state) => {
            state.isPaymentSelected = false
            state.value = ''
        }
    },
})

export const {
    setIsPaymentSelected,
    setValue,
    reset
} = paymentSlice.actions