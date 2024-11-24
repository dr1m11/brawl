import {combineSlices, configureStore} from '@reduxjs/toolkit'
import {defaultSlice} from "@/lib/defaultSlice/defaultSlice";
import {caseSlice} from "@/lib/caseSlice/caseSlice";
import {crashSlice} from "@/lib/crashSlice/crashSlice";
import {wheelSlice} from "@/lib/wheelSlice/wheelSlice";
import {userSlice} from "@/lib/userSlice/userSlice";
import {paymentSlice} from "@/lib/paymentSlice/payment.slice";
import {withdrawSlice} from "@/lib/withdrawSlice/withdraw.slice";
import {crashGameIdSlice} from "@/lib/crashSlice/crashGameIdSlice";
import {crashMultiplierSlice} from "@/lib/crashSlice/crashMultiplierSlice";
import {crashStatusSlice} from "@/lib/crashSlice/crashStatusSlice";
import {crashTimerSlice} from "@/lib/crashSlice/crashTimerSlice";
import {crashUsersBetsSlice} from "@/lib/crashSlice/crashUserBets";


const rootReducer = combineSlices(
    defaultSlice,
    caseSlice,
    crashSlice,
    wheelSlice,
    userSlice,
    paymentSlice,
    withdrawSlice,
    crashGameIdSlice,
    crashMultiplierSlice,
    crashStatusSlice,
    crashTimerSlice,
    crashUsersBetsSlice,
)

export const makeStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']