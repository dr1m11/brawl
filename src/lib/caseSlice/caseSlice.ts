import {createSlice} from "@reduxjs/toolkit";
import {IGun, IInCase} from "@/services/case/case.types";

interface initialInterface {
    items: IGun[],
    caseData: IInCase
    isOpened: boolean
    isFinished: boolean
    fast: boolean
    roulette: IGun[]
}

const initialState: initialInterface ={
    items: [],
    caseData: {
        price: 0,
        items: [],
        name: '',
        id: 0
    },
    isOpened: false,
    isFinished: false,
    fast: false,
    roulette: []
}

export const caseSlice = createSlice({
    name: 'case',
    initialState,
    reducers: {
        setItems: (state, {payload}) => {
            state.items = payload
        },
        setCase: (state, {payload}) => {
            state.caseData = payload
        },
        setIsOpened: (state, {payload}) => {
            state.isOpened = payload
        },
        setIsFinished: (state, {payload}) => {
            state.isFinished = payload
        },
        setFast: (state, {payload}) => {
            state.fast = payload
        },
        setRoulette: (state, {payload}) => {
            state.roulette = payload
        },
    },
    selectors: {
        selectItems: (state) => state.items,
        selectCase: (state) => state.caseData
    }
})

export const {
    setItems,
    setCase,
    setIsOpened,
    setIsFinished,
    setFast,
    setRoulette,
} = caseSlice.actions
export const {
    selectItems,
    selectCase,
} = caseSlice.selectors