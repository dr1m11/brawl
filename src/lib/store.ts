import {combineReducers, combineSlices, configureStore} from '@reduxjs/toolkit'
import {defaultSlice} from "@/lib/defaultSlice/defaultSlice";
import {caseSlice} from "@/lib/caseSlice/caseSlice";


const rootReducer = combineSlices(defaultSlice, caseSlice)

export const makeStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']