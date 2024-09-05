import {createSlice} from "@reduxjs/toolkit";

interface initialInterface {
    isGameSelected: boolean
    position: string
    isEmailSend: boolean
    isValidEmail: boolean
    emailValue: string
    code: string
    error: null | string
    field: string
    price: number
}

const initialState: initialInterface = {
    isGameSelected: false,
    position: '',
    isEmailSend: false,
    isValidEmail: false,
    emailValue: '',
    code: '',
    error: null,
    field: '',
    price: 0,
}

export const withdrawSlice = createSlice({
    name: 'withdraw',
    initialState,
    reducers: {
        setIsGameSelected: (state, {payload}) => {
            state.isGameSelected = payload
        },
        setPosition: (state, {payload}) => {
            state.position = payload
        },
        setPrice: (state, {payload}) => {
            state.price = payload
        },
        setIsEmailSend: (state, {payload}) => {
            state.isEmailSend = payload
        },
        setIsValidEmail: (state, {payload}) => {
            state.isValidEmail = payload
        },
        setEmailValue: (state, {payload}) => {
            state.emailValue = payload
        },
        setCode: (state, {payload}) => {
            state.code = payload
        },
        setError: (state, {payload}) => {
            state.error = payload
        },
        setField: (state, {payload}) => {
            state.field = payload
        },
        reset: (state) => {
            state.isGameSelected = false
            state.position = ''
            state.isEmailSend = false
            state.isValidEmail = false
            state.emailValue = ''
            state.code = ''
            state.error = null
            state.field = ''
            state.price = 0
        }
    },
})

export const {
    setIsGameSelected,
    setPosition,
    setIsValidEmail,
    setIsEmailSend,
    setEmailValue,
    setCode,
    setError,
    setField,
    reset,
    setPrice
} = withdrawSlice.actions