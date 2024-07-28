import {createSlice} from "@reduxjs/toolkit";

interface initialInterface {
    isGameSelected: boolean
    value: string | number
    isEmailSend: boolean
    isValidEmail: boolean
    emailValue: string
    code: string
    error: null | string
    field: string
}

const initialState: initialInterface ={
    isGameSelected: false,
    value: '',
    isEmailSend: false,
    isValidEmail: false,
    emailValue: '',
    code: '',
    error: null,
    field: ''
}

export const withdrawSlice = createSlice({
    name: 'withdraw',
    initialState,
    reducers: {
        setIsGameSelected: (state, {payload}) => {
            state.isGameSelected = payload
        },
        setValue: (state, {payload}) => {
            state.value = payload
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
            state.value = ''
            state.isEmailSend = false
            state.isValidEmail = false
            state.emailValue = ''
            state.code = ''
            state.error = null
            state.field = ''
        }
    },
})

export const {
    setIsGameSelected,
    setValue,
    setIsValidEmail,
    setIsEmailSend,
    setEmailValue,
    setCode,
    setError,
    setField,
    reset,
} = withdrawSlice.actions