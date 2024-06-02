import {createSlice} from "@reduxjs/toolkit";

interface initialInterface {
    isLoginOpen: boolean
    isCaseOpen: boolean
}

const initialState: initialInterface ={
    isLoginOpen: false,
    isCaseOpen: false
}

export const defaultSlice = createSlice({
    name: 'default',
    initialState,
    reducers: {
        changeLogin: (state) => {
            state.isLoginOpen = !state.isLoginOpen
        }
    },
    selectors: {
        selectLogin: (state) => state.isLoginOpen,
        selectCase: (state) => state.isCaseOpen
    }
})

export const {changeLogin} = defaultSlice.actions
export const {selectLogin, selectCase} = defaultSlice.selectors

