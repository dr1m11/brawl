import {createSlice} from "@reduxjs/toolkit";
import {IGun, IInCase} from "@/services/case/case.types";

interface initialInterface {
    items: IGun[],
    caseData: IInCase
    isOpened: boolean
    isFinished: boolean
    fast: boolean
    roulette: IGun[]
    winedItem: number
    isOpenDisabled: boolean
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
    isOpenDisabled: true,
    isFinished: false,
    fast: false,
    roulette: [],
    winedItem: null
}

export const caseSlice = createSlice({
    name: 'case',
    initialState,
    reducers: {
        setItems: (state, {payload}) => {
            state.items = payload
            state.isOpenDisabled = !state.items.length;
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
        setWinedItem: (state, {payload}) => {
            state.winedItem = payload
        }
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
    setWinedItem,
} = caseSlice.actions
export const {
    selectItems,
    selectCase,
} = caseSlice.selectors