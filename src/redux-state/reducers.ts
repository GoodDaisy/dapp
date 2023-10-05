import { combineReducers } from "@reduxjs/toolkit"
import claimReducer from "./slices/claim"
import walletReducer from "./slices/wallet"
import islandReducer from "./slices/island"
import assistantReducer from "./slices/assistant"

const mainReducer = combineReducers({
  claim: claimReducer,
  wallet: walletReducer,
  island: islandReducer,
  assistant: assistantReducer,
})

export type RootState = ReturnType<typeof mainReducer>

export default mainReducer
