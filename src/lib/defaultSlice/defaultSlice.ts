import {createSlice} from "@reduxjs/toolkit";

interface initialInterface {
    isAuthOpen: boolean
    isCaseOpen: boolean
}

const initialState: initialInterface ={
    isAuthOpen: false,
    isCaseOpen: false
}

export const defaultSlice = createSlice({
    name: 'default',
    initialState,
    reducers: {
        changeLogin: (state) => {
            state.isAuthOpen = !state.isAuthOpen
        }
    },
    selectors: {
        selectLogin: (state) => state.isAuthOpen,
        selectCase: (state) => state.isCaseOpen
    }
})

export const {changeLogin} = defaultSlice.actions
export const {selectLogin, selectCase} = defaultSlice.selectors

