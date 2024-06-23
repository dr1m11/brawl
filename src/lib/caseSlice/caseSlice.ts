import {createSlice} from "@reduxjs/toolkit";
import {ICase, IGun} from "@/services/case/case.types";

interface initialInterface {
    items: IGun[],
    case: ICase
}

const initialState: initialInterface ={
    items: [],
    case: {
        price: 0,
        items: [],
        name: '',
        id: 0
    }
}

export const caseSlice = createSlice({
    name: 'case',
    initialState,
    reducers: {
        setItems: (state, {payload}) => {
            state.items = payload
        },
        setCase: (state, {payload}) => {
            state.case = payload
        }
    },
    selectors: {
        selectItems: (state) => state.items,
        selectCase: (state) => state.case
    }
})

export const {setItems, setCase} = caseSlice.actions
export const {selectItems, selectCase} = caseSlice.selectors