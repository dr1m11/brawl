import {combineReducers, combineSlices, configureStore} from '@reduxjs/toolkit'
import {defaultSlice} from "@/lib/defaultSlice/defaultSlice";
import {caseSlice} from "@/lib/caseSlice/caseSlice";
import {crashSlice} from "@/lib/crashSlice/crashSlice";
import {wheelSlice} from "@/lib/wheelSlice/wheelSlice";
import {userSlice} from "@/lib/userSlice/userSlice";
import {paymentSlice} from "@/lib/paymentSlice/payment.slice";
import {withdrawSlice} from "@/lib/withdrawSlice/withdraw.slice";


const rootReducer = combineSlices(
    defaultSlice,
    caseSlice,
    crashSlice,
    wheelSlice,
    userSlice,
    paymentSlice,
    withdrawSlice,
)

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