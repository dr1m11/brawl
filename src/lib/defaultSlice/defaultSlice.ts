import {createSlice} from "@reduxjs/toolkit";
import {IUser} from "@/utils/types";

interface initialInterface {
    isAuthOpen: boolean
    isCaseOpen: boolean
    isBurgerOpen: boolean
}

const initialState: initialInterface ={
    isAuthOpen: false,
    isCaseOpen: false,
    isBurgerOpen: false,
}

export const defaultSlice = createSlice({
    name: 'default',
    initialState,
    reducers: {
        changeLogin: (state) => {
            state.isAuthOpen = !state.isAuthOpen
        },
        changeBurger: (state) => {
            state.isBurgerOpen = !state.isBurgerOpen
        }
    },
    selectors: {
        selectLogin: (state) => state.isAuthOpen,
        selectCase: (state) => state.isCaseOpen,
        selectBurger: (state) => state.isBurgerOpen,
    }
})

export const {changeLogin, changeBurger} = defaultSlice.actions
export const {selectLogin, selectCase, selectBurger} = defaultSlice.selectors

